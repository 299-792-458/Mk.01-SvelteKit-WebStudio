<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import LabPreview from '$components/experience/LabPreview.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const experiments = data.experiments ?? [];

	const statusBadge = {
		prototype: { label: 'Prototype', tone: 'badge-secondary' },
		production: { label: 'In production', tone: 'badge-primary' },
		archived: { label: 'Archived', tone: 'badge-ghost' }
	} as const;
</script>

<PageSection id="labs-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Mk.01 Labs</span>
		<h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			Explorations that bend light, sound, and data into living web experiences.
		</h1>
		<p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">
			The Labs are our playground for prototyping radical ideas. Some ship into production, others
			become open-source seeds, all of them teach us how to build bolder products.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a href="/work" class="btn btn-outline btn-lg">See launched work</a>
			<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Collaborate on R&D</a>
		</div>
	</div>
</PageSection>

<PageSection id="labs-grid">
	<div class="grid gap-8 lg:grid-cols-3">
			{#each experiments as experiment}
				<article class="lab-card">
					<div class="media">
						<div class="glow"></div>
						<div class="preview">
							<LabPreview accent={experiment.accent ?? '#7cf7ff'} glow="#ff6bcb" speed={1.1} />
						</div>
						<img src={experiment.thumbnail} alt={experiment.title} loading="lazy" />
					</div>
				<div class="body">
					<span class={`badge ${statusBadge[experiment.status].tone}`}>
						{statusBadge[experiment.status].label}
					</span>
					<h2>{experiment.title}</h2>
					<p>{experiment.summary}</p>
					<ul class="tech">
						{#each experiment.tech as tech}
							<li>{tech}</li>
						{/each}
					</ul>
					<p class="highlight">
						<span>Highlight</span>
						{experiment.highlight}
					</p>
					<div class="cta-group">
						<a href={`/labs/${experiment.slug}`} class="btn btn-sm btn-outline">Read case</a>
						{#if experiment.links.demo}
							<a
								href={experiment.links.demo}
								class="btn btn-sm btn-ghost"
								target="_blank"
								rel="noreferrer"
							>
								Launch demo
							</a>
						{:else}
							<span class="btn btn-sm btn-ghost btn-disabled">Demo brewing</span>
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>
</PageSection>

<style>
	.lab-card {
		display: grid;
		gap: 1.25rem;
		border-radius: 1.6rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background:
			radial-gradient(120% 120% at 10% 0%, rgba(255, 107, 203, 0.18), transparent 65%),
			radial-gradient(130% 140% at 100% 100%, rgba(47, 93, 255, 0.24), rgba(9, 13, 31, 0.9));
		box-shadow: 0 25px 60px rgba(5, 11, 28, 0.35);
		overflow: hidden;
	}

	.media {
		position: relative;
		overflow: hidden;
		border-radius: 1.4rem 1.4rem 0 0;
		min-height: 220px;
	}

	.media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		filter: saturate(120%);
		transform: scale(1.02);
		transition:
			transform 400ms ease,
			filter 400ms ease;
		position: relative;
		z-index: 1;
	}

	.lab-card:hover img {
		transform: scale(1.05);
		filter: saturate(140%);
	}

	.glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 20% 20%, rgba(255, 107, 203, 0.25), transparent 60%);
		mix-blend-mode: screen;
		pointer-events: none;
		z-index: 2;
	}

	.preview {
		position: absolute;
		inset: 0;
		z-index: 0;
		opacity: 0.85;
		mix-blend-mode: screen;
	}

	.body {
		display: grid;
		gap: 0.9rem;
		padding: 0 1.6rem 1.6rem 1.6rem;
		color: rgba(226, 232, 255, 0.95);
	}

	.badge {
		align-self: start;
	}

	h2 {
		font-size: 1.4rem;
		font-weight: 600;
	}

	p {
		font-size: 0.95rem;
		color: rgba(226, 232, 255, 0.72);
	}

	.tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.tech li {
		padding: 0.35rem 0.6rem;
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.08);
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(226, 232, 255, 0.75);
	}

	.highlight {
		display: grid;
		gap: 0.25rem;
		font-size: 0.85rem;
	}

	.highlight span {
		text-transform: uppercase;
		letter-spacing: 0.28em;
		font-size: 0.68rem;
		color: rgba(226, 232, 255, 0.55);
	}

	.cta-group {
		display: flex;
		gap: 0.6rem;
	}
</style>
