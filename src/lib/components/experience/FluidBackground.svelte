<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { browser } from '$app/environment';
	import { experienceStore } from '$services/experience';
	import { get } from 'svelte/store'; // Import get for initial state

	let container: HTMLDivElement;
	let renderer: THREE.WebGLRenderer;
	let scene: THREE.Scene;
	let camera: THREE.OrthographicCamera;
	let material: THREE.ShaderMaterial;
	let mesh: THREE.Mesh;
	let raf: number;
	let animationActive = true; // Control animation loop

	// Shader code for a smooth, evolving fluid/aurora effect
	const vertexShader = `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
	`;

	const fragmentShader = `
		uniform float uTime;
		uniform vec2 uResolution;
		uniform vec2 uMouse;
		uniform float uTheme; // 0: Light, 1: Dark, 2: Aurora

		varying vec2 vUv;

		// Simplex noise function
		vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
		float snoise(vec2 v){
			const vec4 C = vec4(0.211324865405187, 0.366025403784439,
					-0.577350269189626, 0.024390243902439);
			vec2 i  = floor(v + dot(v, C.yy) );
			vec2 x0 = v -   i + dot(i, C.xx);
			vec2 i1;
			i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
			vec4 x12 = x0.xyxy + C.xxzz;
			x12.xy -= i1;
			i = mod(i, 289.0);
			vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
				+ i.x + vec3(0.0, i1.x, 1.0 ));
			vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
			m = m*m ;
			m = m*m ;
			vec3 x = 2.0 * fract(p * C.www) - 1.0;
			vec3 h = abs(x) - 0.5;
			vec3 ox = floor(x + 0.5);
			vec3 a0 = x - ox;
			m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
			vec3 g;
			g.x  = a0.x  * x0.x  + h.x  * x0.y;
			g.yz = a0.yz * x12.xz + h.yz * x12.yw;
			return 130.0 * dot(m, g);
		}

		void main() {
			vec2 st = gl_FragCoord.xy / uResolution.xy;
			float aspect = uResolution.x / uResolution.y;
			st.x *= aspect;

			// Mouse influence
			float mouseDist = distance(st, uMouse * vec2(aspect, 1.0));
			float mouseInteraction = smoothstep(0.5, 0.0, mouseDist) * 0.2;

			// Time evolutions
			float t = uTime * 0.15;
			
			// Fluid noise layers
			float n1 = snoise(st * 3.0 + t + mouseInteraction);
			float n2 = snoise(st * 6.0 - t * 0.5 + n1);
			float n3 = snoise(st * 12.0 + t * 0.2 + n2);

			// Color palettes based on theme
			vec3 colorA, colorB, colorC;

			if (uTheme < 0.5) { 
				// Light Theme (Soft, airy)
				colorA = vec3(0.95, 0.98, 1.0); // White/Blue
				colorB = vec3(0.9, 0.95, 1.0); // Soft Cyan
				colorC = vec3(1.0, 0.95, 0.9); // Warm Highlight
			} else if (uTheme < 1.5) {
				// Dark Theme (Deep, cosmic)
				colorA = vec3(0.02, 0.02, 0.05); // Deep Void
				colorB = vec3(0.05, 0.08, 0.15); // Dark Blue
				colorC = vec3(0.1, 0.05, 0.12); // Deep Purple
			} else {
				// Aurora Theme (Vibrant, electric)
				colorA = vec3(0.05, 0.05, 0.1);
				colorB = vec3(0.1, 0.3, 0.4); // Teal
				colorC = vec3(0.4, 0.1, 0.3); // Magenta
			}

			// Mix colors based on noise
			vec3 color = mix(colorA, colorB, smoothstep(-1.0, 1.0, n1));
			color = mix(color, colorC, smoothstep(-1.0, 1.0, n2) * 0.5);

			// Add a subtle grain/dither
			float grain = fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453);
			color += (grain - 0.5) * 0.03;

			gl_FragColor = vec4(color, 1.0);
		}
	`;

	onMount(() => {
		if (!browser) return;

		const init = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			renderer = new THREE.WebGLRenderer({ 
				antialias: false, // Performance optimization
				powerPreference: "high-performance",
				alpha: false
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap DPR for performance
			renderer.setSize(width, height);
			container.appendChild(renderer.domElement);

			scene = new THREE.Scene();
			camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

			const geometry = new THREE.PlaneGeometry(2, 2);
			material = new THREE.ShaderMaterial({
				vertexShader,
				fragmentShader,
				uniforms: {
					uTime: { value: 0 },
					uResolution: { value: new THREE.Vector2(width, height) },
					uMouse: { value: new THREE.Vector2(0.5, 0.5) },
					uTheme: { value: 1.0 } // Default to Dark
				},
				depthWrite: false,
				depthTest: false
			});

			mesh = new THREE.Mesh(geometry, material);
			scene.add(mesh);

			window.addEventListener('resize', onResize);
			window.addEventListener('mousemove', onMouseMove);
		};

		const onResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			renderer.setSize(width, height);
			material.uniforms.uResolution.value.set(width, height);
		};

		const onMouseMove = (e: MouseEvent) => {
			const x = e.clientX / window.innerWidth;
			const y = 1.0 - e.clientY / window.innerHeight;
			// Smooth interpolation could be added here for even better feel
			material.uniforms.uMouse.value.set(x, y);
		};

		const animate = (time: number) => {
			if (!animationActive) return; // Stop animation if not active
			raf = requestAnimationFrame(animate);
			if (material) {
				material.uniforms.uTime.value = time * 0.001;
			}
			renderer.render(scene, camera);
		};

		// Initial check for performance mode
		if (get(experienceStore).isPerformanceMode) {
			animationActive = false;
			renderer?.dispose();
			container.replaceChildren();
		} else {
			init();
			animate(0);
		}

		// Subscribe to theme and performance mode store
		const unsub = experienceStore.subscribe(state => {
			if (!material) return;

			// Handle theme change
			if (state.theme === 'day') material.uniforms.uTheme.value = 0.0;
			else if (state.theme === 'night') material.uniforms.uTheme.value = 1.0;
			else if (state.theme === 'aurora') material.uniforms.uTheme.value = 2.0;

			// Handle performance mode change
			if (state.isPerformanceMode !== !animationActive) {
				animationActive = !state.isPerformanceMode;
				if (animationActive) {
					// Re-initialize and start animation if entering normal mode
					init();
					animate(0);
				} else {
					// Stop animation and dispose resources if entering performance mode
					cancelAnimationFrame(raf);
					renderer?.dispose();
					container.replaceChildren();
					scene = null as any; // Clear references
					mesh = null as any;
					material = null as any;
				}
			}
		});

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('mousemove', onMouseMove);
			unsub();
			renderer?.dispose();
			geometry?.dispose();
			material?.dispose();
			container?.replaceChildren();
		};
	});
</script>

<div bind:this={container} class="fixed inset-0 -z-50 pointer-events-none transition-opacity duration-1000"></div>
