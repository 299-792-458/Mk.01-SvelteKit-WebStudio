<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { Float, ContactShadows, Grid } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	let rotationY = 0;
	let time = 0;

	useFrame((_, delta) => {
		rotationY += delta * 0.1;
		time += delta;
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 2, 10]} fov={35} lookAt={[0, 0, 0]} />

<T.AmbientLight intensity={0.2} />
<T.DirectionalLight position={[10, 10, 5]} intensity={2} color="#a855f7" />
<T.PointLight position={[-10, -5, 5]} intensity={2} color="#0ea5e9" />

<Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
	<T.Group rotation.y={rotationY}>
		<!-- Core Core -->
		<T.Mesh>
			<T.IcosahedronGeometry args={[2, 1]} />
			<T.MeshStandardMaterial
				wireframe
				color="#8b5cf6"
				roughness={0.1}
				metalness={0.9}
				emissive="#4c1d95"
				emissiveIntensity={0.5}
			/>
		</T.Mesh>

		<!-- Inner Core -->
		<T.Mesh scale={0.6}>
			<T.OctahedronGeometry args={[2, 0]} />
			<T.MeshPhysicalMaterial
				color="#0ea5e9"
				transmission={1}
				opacity={0.8}
				metalness={0}
				roughness={0}
				ior={1.5}
				thickness={2}
			/>
		</T.Mesh>
		
		<!-- Orbiting Particles (Simulated by Points) -->
		<T.Points>
			<T.BufferGeometry>
				<T.BufferAttribute
					args={[new Float32Array(Array.from({ length: 150 }, () => (Math.random() - 0.5) * 10)), 3]}
					attach="attributes.position"
				/>
			</T.BufferGeometry>
			<T.PointsMaterial size={0.05} color="#f97316" transparent opacity={0.6} sizeAttenuation />
		</T.Points>
	</T.Group>
</Float>

<Grid
	position={[0, -3, 0]}
	args={[20, 20]}
	cellColor="#334155"
	sectionColor="#6366f1"
	sectionThickness={1}
	fadeDistance={15}
/>
