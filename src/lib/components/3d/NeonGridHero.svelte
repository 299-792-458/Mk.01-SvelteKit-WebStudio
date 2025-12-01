<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import * as THREE from 'three';
	import { pointer, viewport, quality } from '$lib/stores/interaction';
	import { get } from 'svelte/store';

	let container: HTMLDivElement | null = null;
	let renderer: THREE.WebGLRenderer;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let clock: THREE.Clock;
	let grid: THREE.Points | null = null;
	let halo: THREE.Mesh | null = null;
	let raf = 0;

	const params = {
		gridSize: 220,
		spacing: 0.8,
		pulse: 1.2
	};

	function buildGrid(density: 'high' | 'medium' | 'low') {
		if (grid && scene) {
			scene.remove(grid);
		}

		const size = density === 'high' ? params.gridSize : density === 'medium' ? 160 : 120;
		const spacing = density === 'high' ? params.spacing : density === 'medium' ? 1 : 1.2;
		const positions = [];
		const colors = [];
		const color = new THREE.Color();

		for (let x = -size; x < size; x++) {
			for (let z = -size; z < size; z++) {
				if ((x + z) % 4 !== 0) continue;
				positions.push(x * spacing, (Math.sin((x + z) * 0.05) * 0.6) / 2, z * spacing);
				color.setHSL(0.55 + Math.sin((x + z) * 0.02) * 0.05, 0.9, 0.55);
				colors.push(color.r, color.g, color.b);
			}
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 0.8,
			vertexColors: true,
			transparent: true,
			depthWrite: false,
			opacity: 0.95
		});

		grid = new THREE.Points(geometry, material);
		scene.add(grid);
	}

	function buildHalo() {
		const geometry = new THREE.RingGeometry(6, 14, 64, 1);
		const material = new THREE.MeshBasicMaterial({
			color: new THREE.Color('#7cf7ff'),
			transparent: true,
			opacity: 0.5,
			side: THREE.DoubleSide
		});
		halo = new THREE.Mesh(geometry, material);
		halo.rotation.x = Math.PI / 2;
		halo.position.y = 4;
		scene.add(halo);
	}

	function init() {
		if (!container) return;

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		container.appendChild(renderer.domElement);

		scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2('#02030a', 0.008);

		camera = new THREE.PerspectiveCamera(
			55,
			container.clientWidth / container.clientHeight,
			0.1,
			900
		);
		camera.position.set(0, 22, 55);

		const ambient = new THREE.AmbientLight('#7cf7ff', 0.35);
		const fill = new THREE.PointLight('#5a9bff', 4, 160, 0.8);
		fill.position.set(18, 30, 18);
		const rim = new THREE.PointLight('#ff46c9', 3, 120, 0.8);
		rim.position.set(-28, 18, -14);
		scene.add(ambient, fill, rim);

		clock = new THREE.Clock();
		buildGrid(get(quality));
		buildHalo();
	}

	function animate() {
		const elapsed = clock.getElapsedTime();
		const { normalized } = get(pointer);

		if (grid) {
			grid.rotation.y = elapsed * 0.08;
			grid.rotation.x = Math.sin(elapsed * 0.25) * 0.08;
			grid.position.y = Math.sin(elapsed * 0.8) * 1.2;
		}

		if (halo) {
			halo.rotation.z = elapsed * 0.6;
			halo.material.opacity = 0.45 + Math.sin(elapsed * 2.3) * 0.15;
			halo.scale.setScalar(1 + Math.sin(elapsed * 1.5) * 0.08);
		}

		camera.position.x = normalized.x * 10;
		camera.position.y = 20 + normalized.y * 5;
		camera.lookAt(0, 8, 0);

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
		init();
		animate();

		const unsubViewport = viewport.subscribe(() => resize());
		const unsubQuality = quality.subscribe((value) => buildGrid(value));

		return () => {
			cancelAnimationFrame(raf);
			unsubViewport();
			unsubQuality();
			renderer?.dispose();
			grid?.geometry?.dispose();
			container?.replaceChildren();
		};
	});
</script>

<div class="hero-canvas" bind:this={container} aria-hidden="true"></div>

<style>
	.hero-canvas {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 20% 20%, rgba(124, 247, 255, 0.12), transparent 45%),
			radial-gradient(circle at 70% 60%, rgba(255, 70, 201, 0.12), transparent 40%),
			linear-gradient(145deg, #04040a, #02030a 50%, #05060f);
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));
		overflow: hidden;
		z-index: 0;
	}
</style>
