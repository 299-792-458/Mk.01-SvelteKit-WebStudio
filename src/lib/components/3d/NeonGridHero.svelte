<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import * as THREE from 'three';
	import { pointer, viewport, quality } from '$lib/stores/interaction';
	import { get } from 'svelte/store';
	import { experienceStore } from '$services/experience'; // Import experienceStore

	let container: HTMLDivElement | null = null;
	let renderer: THREE.WebGLRenderer;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let clock: THREE.Clock;
	let grid: THREE.Points | null = null;
	let raf = 0;
	let animationActive = true; // Control animation loop

	// Shader for glowing points
	const vertexShader = `
		attribute float size;
		varying vec3 vColor;
		void main() {
			vColor = color;
			vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
			gl_PointSize = size * (300.0 / -mvPosition.z);
			gl_Position = projectionMatrix * mvPosition;
		}
	`;

	const fragmentShader = `
		varying vec3 vColor;
		void main() {
			float r = distance(gl_PointCoord, vec2(0.5));
			if (r > 0.5) discard;
			float glow = 1.0 - (r * 2.0);
			glow = pow(glow, 1.5);
			gl_FragColor = vec4(vColor, glow);
		}
	`;

	const params = {
		gridSize: 220,
		spacing: 0.8
	};

	function buildGrid(density: 'high' | 'medium' | 'low') {
		if (grid && scene) {
			scene.remove(grid);
		}

		const size = density === 'high' ? params.gridSize : density === 'medium' ? 160 : 120;
		const spacing = density === 'high' ? params.spacing : density === 'medium' ? 1 : 1.2;
		const positions = [];
		const colors = [];
		const sizes = [];
		const color = new THREE.Color();

		for (let x = -size; x < size; x++) {
			for (let z = -size; z < size; z++) {
				if ((x + z) % 4 !== 0) continue;
				
				// Terrain generation
				const y = (Math.sin((x + z) * 0.05) * 0.6) / 2;
				positions.push(x * spacing, y, z * spacing);
				
				// Color gradient based on height/position
				const t = (y + 0.3) / 0.6;
				color.setHSL(0.6 + t * 0.1, 0.8, 0.6); // Blue/Purple/Cyan
				colors.push(color.r, color.g, color.b);

				// Randomize sizes slightly
				sizes.push(Math.random() * 0.5 + 0.5);
			}
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
		geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

		const material = new THREE.ShaderMaterial({
			uniforms: {},
			vertexShader,
			fragmentShader,
			transparent: true,
			vertexColors: true,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});

		grid = new THREE.Points(geometry, material);
		scene.add(grid);
	}

	function init() {
		if (!container) return;

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		scene = new THREE.Scene();
		// Fog matches the dark blue/black background
		scene.fog = new THREE.FogExp2('#05060f', 0.015);

		camera = new THREE.PerspectiveCamera(
			60,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.set(0, 15, 40);

		clock = new THREE.Clock();
		buildGrid(get(quality));
	}

	function animate() {
		const elapsed = clock.getElapsedTime();
		const { normalized } = get(pointer);

		if (grid) {
			// Flyover effect
			grid.position.z = (elapsed * 2) % 4; 
			// Subtle rotation based on mouse
			grid.rotation.z = normalized.x * 0.05;
		}

		camera.position.y = 15 + normalized.y * 2;
		camera.lookAt(0, 0, -20); // Look ahead into the horizon

		renderer.render(scene, camera);
		raf = requestAnimationFrame(animate);
	}

	function resize() {
		if (!renderer || !container) return;
		const w = container.clientWidth;
		const h = container.clientHeight;
		renderer.setSize(w, h);
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
	}

	onMount(() => {
		if (!browser) return;

		// Initial check for performance mode
		if (get(experienceStore).isPerformanceMode) {
			animationActive = false;
		} else {
			init();
			animate();
		}

		const unsubViewport = viewport.subscribe(() => resize());
		const unsubQuality = quality.subscribe((value) => buildGrid(value));
		const unsubExperience = experienceStore.subscribe(state => {
			if (state.isPerformanceMode !== !animationActive) {
				animationActive = !state.isPerformanceMode;
				if (animationActive) {
					init(); // Re-initialize if entering normal mode
					animate();
				} else {
					cancelAnimationFrame(raf);
					renderer?.dispose();
					grid?.geometry?.dispose();
					(grid?.material as THREE.Material)?.dispose();
					container?.replaceChildren();
					scene = null as any; // Clear references
					grid = null;
				}
			}
		});


		return () => {
			cancelAnimationFrame(raf);
			unsubViewport();
			unsubQuality();
			unsubExperience();
			renderer?.dispose();
			grid?.geometry?.dispose();
			(grid?.material as THREE.Material)?.dispose();
			container?.replaceChildren();
		};
	});
</script>

{#if animationActive}
<div class="hero-canvas" bind:this={container} aria-hidden="true"></div>
{/if}

<style>
	.hero-canvas {
		position: absolute;
		inset: 0;
		/* Fallback gradient */
		background: radial-gradient(circle at 50% 0%, #1a2035 0%, #05060f 60%);
		overflow: hidden;
		z-index: 0;
	}
</style>