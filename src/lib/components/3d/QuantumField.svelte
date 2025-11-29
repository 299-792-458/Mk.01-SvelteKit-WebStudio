<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLElement;
	let frameId: number;

	onMount(async () => {
		if (!container) return;
		const THREE = await import('three');

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			35,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 10;
		camera.position.y = 2;
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		container.appendChild(renderer.domElement);

		// Lights
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
		scene.add(ambientLight);

		const dirLight = new THREE.DirectionalLight(0xa855f7, 2);
		dirLight.position.set(10, 10, 5);
		scene.add(dirLight);

		const pointLight = new THREE.PointLight(0x0ea5e9, 2);
		pointLight.position.set(-10, -5, 5);
		scene.add(pointLight);

		// Objects
		const geometry = new THREE.IcosahedronGeometry(2, 1);
		const material = new THREE.MeshStandardMaterial({
			color: 0x8b5cf6,
			wireframe: true,
			roughness: 0.1,
			metalness: 0.9,
			emissive: 0x4c1d95,
			emissiveIntensity: 0.5
		});
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const innerGeo = new THREE.OctahedronGeometry(2, 0);
		const innerMat = new THREE.MeshPhysicalMaterial({
			color: 0x0ea5e9,
			transmission: 1,
			opacity: 0.8,
			metalness: 0,
			roughness: 0,
			ior: 1.5,
			thickness: 2
		});
		const innerMesh = new THREE.Mesh(innerGeo, innerMat);
		innerMesh.scale.set(0.6, 0.6, 0.6);
		scene.add(innerMesh);

		// Particles
		const particleCount = 150;
		const posArray = new Float32Array(particleCount * 3);
		for (let i = 0; i < particleCount * 3; i++) {
			posArray[i] = (Math.random() - 0.5) * 10;
		}
		const particlesGeo = new THREE.BufferGeometry();
		particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
		const particlesMat = new THREE.PointsMaterial({
			size: 0.05,
			color: 0xf97316,
			transparent: true,
			opacity: 0.6
		});
		const particles = new THREE.Points(particlesGeo, particlesMat);
		scene.add(particles);

		const clock = new THREE.Clock();

		let mouseX = 0;
		let mouseY = 0;
		let targetX = 0;
		let targetY = 0;

		const handleMouseMove = (event: MouseEvent) => {
			mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		};
		window.addEventListener('mousemove', handleMouseMove);

		function animate() {
			frameId = requestAnimationFrame(animate);
			const delta = clock.getDelta();
			const elapsed = clock.getElapsedTime();

			// Smooth mouse follow
			targetX += (mouseX - targetX) * 0.05;
			targetY += (mouseY - targetY) * 0.05;

			mesh.rotation.y += delta * 0.1;
			mesh.rotation.x = targetY * 0.2;
			mesh.rotation.z = targetX * 0.2;

			innerMesh.rotation.y -= delta * 0.05;
			innerMesh.rotation.x = -targetY * 0.2;
			innerMesh.rotation.z = -targetX * 0.2;
			
			particles.rotation.y += delta * 0.02 + targetX * 0.05;

			// Float effect
			const floatY = Math.sin(elapsed * 0.5) * 0.2;
			mesh.position.y = floatY;
			innerMesh.position.y = floatY;

			camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
			camera.position.y += (2 + mouseY * 0.2 - camera.position.y) * 0.05;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
		}

		animate();

		const resize = () => {
			if (!container) return;
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		};

		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(frameId);
			renderer.dispose();
			geometry.dispose();
			innerGeo.dispose();
			particlesGeo.dispose();
		};
	});
</script>

<div bind:this={container} class="h-full w-full"></div>
