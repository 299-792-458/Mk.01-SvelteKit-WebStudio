<script lang="ts">
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	export let items: { year: string; title: string; detail: string }[] = [];

	let container: HTMLDivElement;

	onMount(() => {
		const cards = container.querySelectorAll('.timeline-card');
		cards.forEach((card, index) => {
			animate(
				card,
				{
					opacity: [0, 1],
					y: [30, 0],
					scale: [0.95, 1]
				},
				{
					duration: 0.6,
					delay: index * 0.08,
					easing: 'cubic-bezier(0.25, 0.8, 0.4, 1)'
				}
			);
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
				<p class="text-xs uppercase tracking-[0.3em] text-primary/80">{item.year}</p>
				<span class="chip">orbit</span>
			</div>
			<h3 class="text-xl font-semibold text-base-content">{item.title}</h3>
			<p class="mt-2 text-sm text-base-content/70">{item.detail}</p>
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
		@apply bg-base-200/90 text-base-content border border-base-content/10 shadow-lg backdrop-blur-md;
		transform: translateZ(calc(var(--z) * 0.4px)) rotateY(calc(var(--rotation)));
		transition:
			transform 240ms ease,
			border-color 240ms ease,
			box-shadow 240ms ease;
	}

	.timeline-card:hover {
		transform: translateZ(calc(var(--z) * 0.6px)) rotateY(calc(var(--rotation) * -1.2)) translateY(-2px);
		@apply border-primary/30 shadow-xl;
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
