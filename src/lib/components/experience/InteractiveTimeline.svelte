<script lang="ts">
	import { motion } from 'motion';
	import { onMount } from 'svelte';

	export let items: { year: string; title: string; detail: string }[] = [];

	let container: HTMLDivElement;

	onMount(() => {
		const cards = container.querySelectorAll('.timeline-card');
		cards.forEach((card, index) => {
			motion(card, {
				opacity: [0, 1],
				y: [30, 0],
				scale: [0.95, 1]
			}, {
				duration: 0.6,
				delay: index * 0.08,
				easing: 'cubic-bezier(0.25, 0.8, 0.4, 1)'
			});
		});
	});
</script>

<div class="timeline-shell" bind:this={container}>
	{#each items as item, index}
		<div
			class="timeline-card"
			style={`--i:${index}; --rotation:${(index % 2 === 0 ? -1 : 1) * 4}deg; --z:${index * 10};`}
		>
			<div class="timeline-glow" aria-hidden="true"></div>
			<div class="flex items-center justify-between">
				<p class="text-xs uppercase tracking-[0.3em] text-cyan-200/80">{item.year}</p>
				<span class="chip">orbit</span>
			</div>
			<h3 class="text-xl font-semibold text-white">{item.title}</h3>
			<p class="mt-2 text-sm text-white/70">{item.detail}</p>
		</div>
	{/each}
</div>

<style>
	.timeline-shell {
		position: relative;
		display: grid;
		gap: 1rem;
		transform-style: preserve-3d;
		perspective: 1200px;
	}

	.timeline-card {
		position: relative;
		padding: 1rem 1.1rem;
		border-radius: 1.2rem;
		background: linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(17, 24, 39, 0.9));
		border: 1px solid rgba(124, 247, 255, 0.2);
		box-shadow:
			0 20px 60px rgba(0, 0, 0, 0.45),
			inset 0 0 0 1px rgba(255, 255, 255, 0.04);
		transform: translateZ(calc(var(--z) * 0.4px)) rotateY(calc(var(--rotation)));
		backdrop-filter: blur(10px);
		transition:
			transform 240ms ease,
			border-color 240ms ease,
			box-shadow 240ms ease;
	}

	.timeline-card:hover {
		transform: translateZ(calc(var(--z) * 0.6px)) rotateY(calc(var(--rotation) * -1.2)) translateY(-2px);
		border-color: rgba(255, 70, 201, 0.35);
		box-shadow:
			0 24px 64px rgba(255, 70, 201, 0.18),
			0 10px 32px rgba(124, 247, 255, 0.12);
	}

	.timeline-glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 20% 30%, rgba(124, 247, 255, 0.16), transparent 40%),
			radial-gradient(circle at 80% 80%, rgba(255, 70, 201, 0.16), transparent 35%);
		filter: blur(16px);
		z-index: 0;
		pointer-events: none;
	}

	.timeline-card > * {
		position: relative;
		z-index: 1;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem 0.55rem;
		border-radius: 999px;
		background: rgba(124, 247, 255, 0.12);
		color: rgba(124, 247, 255, 0.9);
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
	}
</style>
