<script lang="ts">
	export interface TimelineItem {
		year: string;
		title: string;
		description: string;
	}

	export let items: TimelineItem[] = [];
</script>

<ol class="timeline">
	{#each items as item}
		<li class="timeline-item">
			<div class="marker" aria-hidden="true">
				<span />
				<span />
			</div>
			<div class="body">
				<p class="year">{item.year}</p>
				<h3>{item.title}</h3>
				<p class="description">{item.description}</p>
			</div>
		</li>
	{/each}
</ol>

<style>
	.timeline {
		display: grid;
		gap: 1.75rem;
		position: relative;
		padding-left: 1.5rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 0.6rem;
		top: 0.3rem;
		bottom: 0.3rem;
		width: 2px;
		background: linear-gradient(180deg, rgba(47, 93, 255, 0.35), rgba(255, 107, 203, 0.35));
	}

	.timeline-item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1.2rem;
		align-items: start;
	}

	.marker {
		position: relative;
		width: 1.4rem;
		height: 1.4rem;
		display: grid;
		place-items: center;
	}

	.marker span:first-child {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 999px;
		background: rgba(47, 93, 255, 0.9);
	}

	.marker span:last-child {
		position: absolute;
		inset: 0;
		border-radius: 999px;
		border: 2px solid rgba(47, 93, 255, 0.4);
		animation: pulse 2.8s ease-in-out infinite;
	}

	.body {
		padding: 1rem 1.2rem;
		border-radius: 1.1rem;
		background: rgba(9, 13, 31, 0.55);
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: rgba(226, 232, 255, 0.9);
		backdrop-filter: blur(12px);
		box-shadow: 0 12px 24px rgba(5, 11, 30, 0.28);
	}

	.year {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.28em;
		color: rgba(226, 232, 255, 0.6);
		margin-bottom: 0.3rem;
	}

	h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.4rem;
	}

	.description {
		font-size: 0.95rem;
		color: rgba(226, 232, 255, 0.72);
		line-height: 1.6;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.85);
			opacity: 0.9;
		}

		100% {
			transform: scale(1.4);
			opacity: 0;
		}
	}
</style>
