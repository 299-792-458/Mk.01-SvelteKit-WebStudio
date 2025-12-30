<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { derived, writable } from 'svelte/store';
	import { tilt } from '$lib/components/motion/tilt';

	export let projects: { title: string; slug: string; image: string; category?: string }[] = [];

	const angle = tweened(0, { duration: 360, easing: cubicOut });
	const activeIndex = writable(0);

	const nodes = derived([angle, activeIndex], ([$angle, $active]) => {
		const step = (Math.PI * 2) / Math.max(projects.length, 1);
		return projects.map((project, index) => {
			const theta = step * index + $angle;
			const radius = 420;
			const x = Math.cos(theta) * radius;
			const z = Math.sin(theta) * radius;
			const y = Math.sin(theta * 1.8) * 60;
			const depth = (Math.cos(theta) + 1) / 2;
			return { project, index, x, y, z, depth, active: index === $active };
		});
	});

	function rotate(delta: number) {
		angle.update((v) => v + delta);
	}

	function setActive(i: number) {
		activeIndex.set(i);
		angle.set(-((Math.PI * 2) / Math.max(projects.length, 1)) * i);
	}
</script>

<div class="carousel-shell">
	<div class="controls">
		<button class="chip" on:click={() => rotate(0.8)}>Spin +</button>
		<button class="chip" on:click={() => rotate(-0.8)}>Spin –</button>
	</div>
	<div class="carousel-track">
		{#each $nodes as node}
			<a
				class={`card ${node.active ? 'active' : ''}`}
				href={`/work/${node.project.slug}`}
				style={`--x:${node.x}px; --y:${node.y}px; --z:${node.z}px; --depth:${node.depth};`}
				on:mouseenter={() => setActive(node.index)}
			>
				<div class="tilt-wrapper" use:tilt={{ max: 12, scale: 1.02, glare: true }}>
					<div class="card-bg">
						<img src={node.project.image} alt={node.project.title} loading="lazy" />
						<div class="overlay"></div>
					</div>
					<div class="card-content">
						<p class="eyebrow">{node.project.category ?? 'Project'}</p>
						<h3>{node.project.title}</h3>
						<span class="cta">Open case →</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.carousel-shell {
		position: relative;
		perspective: 1400px;
		overflow: visible;
	}

	.controls {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.chip {
		padding: 0.4rem 0.8rem;
		border-radius: 999px;
		border: 1px solid rgba(124, 247, 255, 0.4);
		background: rgba(124, 247, 255, 0.1);
		color: #7cf7ff;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
	}

	.carousel-track {
		position: relative;
		height: 520px;
		transform-style: preserve-3d;
	}

	.card {
		position: absolute;
		top: 50%;
		left: 50%;
		width: min(420px, 70vw);
		height: 240px;
		transform-style: preserve-3d;
		transform: translate3d(var(--x), var(--y), var(--z));
		transition:
			transform 300ms ease,
			filter 300ms ease,
			box-shadow 300ms ease;
		border-radius: 1.4rem;
		/* overflow: hidden; Removed to allow glare to spill if needed, but tilt-wrapper handles it */
		filter: blur(calc((1 - var(--depth)) * 2px)) brightness(calc(0.6 + var(--depth) * 0.6));
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
	}
	
	.tilt-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 1.4rem;
		overflow: hidden;
		transform-style: preserve-3d;
	}

	.card:hover,
	.card.active {
		transform: translate3d(var(--x), var(--y), var(--z)) scale(1.05);
		filter: brightness(1.1);
		box-shadow:
			0 40px 120px rgba(255, 70, 201, 0.16),
			0 10px 30px rgba(124, 247, 255, 0.18);
	}

	.card-bg {
		position: absolute;
		inset: 0;
		transform: translateZ(0); /* Fix Safari flicker */
	}

	.card-bg img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 20% 30%, rgba(124, 247, 255, 0.26), transparent 40%),
			linear-gradient(120deg, rgba(5, 5, 10, 0.4), rgba(5, 5, 10, 0.8));
		mix-blend-mode: screen;
	}

	.card-content {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 1.4rem;
		color: white;
		text-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
		transform: translateZ(20px); /* Parallax text pop */
	}

	.card-content h3 {
		font-size: 1.6rem;
		font-weight: 700;
	}

	.card-content .eyebrow {
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.7);
	}

	.cta {
		margin-top: 0.4rem;
		font-weight: 600;
		color: #7cf7ff;
		text-decoration: none;
	}
</style>
