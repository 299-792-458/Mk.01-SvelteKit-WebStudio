<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import Surface from '$components/ui/Surface.svelte';
	import Reveal from '$lib/components/motion/Reveal.svelte';
	import TextReveal from '$lib/components/motion/TextReveal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { project, related } = data;
	const projectContent = project.content;

	let activeTimeline = 0;
	const timeline = projectContent.timeline ?? [];
</script>

<PageSection id="project-hero" tone="contrast" padding="xl">
	<div class="space-y-6">
		<a href="/work" class="link-cta">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 rotate-180"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
			Back to work
		</a>

		<div class="space-y-4">
			<TextReveal text={project.title} type="word" />
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				{project.summary}
			</p>
			<ul class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60">
				<li>{project.industry}</li>
				<li>{project.year}</li>
				{#each project.tags as tag}
					<li>#{tag}</li>
				{/each}
			</ul>
		</div>
	</div>
</PageSection>

<PageSection id="project-hero-media">
	<div class="hero-media">
		{#if projectContent.hero.video}
			<video autoplay muted playsinline loop class="hero-video">
				<source src={projectContent.hero.video} type="video/mp4" />
			</video>
		{:else}
			<img
				src={`/images/work/${project.slug}-hero.jpg`}
				alt={project.title}
				class="hero-image"
				loading="lazy"
				decoding="async"
			/>
		{/if}
		<div class="hero-overlay">
			<h2>{projectContent.hero.headline}</h2>
			<p>{projectContent.hero.subheadline}</p>
		</div>
	</div>
</PageSection>

{#if projectContent.kpis}
	<PageSection id="project-kpis" tone="subtle">
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each projectContent.kpis as kpi}
				<Surface variant="glass" padding="lg" class="kpi-card">
					<p class="kpi-label">{kpi.label}</p>
					<p class="kpi-value">{kpi.value}</p>
					{#if kpi.description}
						<p class="kpi-meta">{kpi.description}</p>
					{/if}
				</Surface>
			{/each}
		</div>
	</PageSection>
{/if}

<PageSection id="project-outcomes">
	<div class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
			<Surface variant="panel" padding="md" as="section">
				<h2 class="text-2xl font-semibold text-base-content">Outcomes</h2>
				<ul class="mt-4 space-y-3 text-sm text-base-content/70">
					{#each projectContent.outcomes as outcome}
						<li class="flex gap-3">
							<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span>
							<span>{outcome}</span>
						</li>
					{/each}
				</ul>
			</Surface>

		<Surface variant="glass" padding="md" as="section">
			<h2 class="text-2xl font-semibold text-base-content">Services</h2>
			<ul
				class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"
			>
				{#each projectContent.services ?? project.tags as service}
					<li>#{service}</li>
				{/each}
			</ul>
			<a href="/contact" class="btn btn-primary btn-sm mt-6">Start a scope</a>
		</Surface>
	</div>
</PageSection>

<PageSection id="project-chapters" tone="contrast">
	<div class="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
		<div class="space-y-5">
			<Reveal preset="hero-lift">
				<h2 class="text-3xl font-semibold">Case study timeline</h2>
			</Reveal>
			<p class="text-base text-base-content/70">
				Track how we sequenced research, motion language, and delivery for this build.
			</p>
			<ol class="timeline">
				{#each timeline as step, i}
					<li class={`timeline-item ${i === activeTimeline ? 'active' : ''}`}>
						<button type="button" on:click={() => (activeTimeline = i)}>
							<span class="step-index">{i + 1}</span>
							<div class="step-body">
								<p class="step-time">{step.timeframe}</p>
								<h3>{step.title}</h3>
								<p>{step.summary}</p>
								{#if step.metric}
									<span class="step-metric">{step.metric}</span>
								{/if}
							</div>
						</button>
					</li>
				{/each}
			</ol>
		</div>
		<div class="chapter-pane">
			{#if projectContent.chapters[activeTimeline]}
				<div class="chapter">
					<header>
						<h3>{projectContent.chapters[activeTimeline].title}</h3>
						<span>{projectContent.chapters[activeTimeline].id}</span>
					</header>
					<p>{projectContent.chapters[activeTimeline].description}</p>
					<div class="chapter-meta">
						<p>Stage {activeTimeline + 1} of {projectContent.chapters.length}</p>
						{#if timeline[activeTimeline]?.metric}
							<span class="chip">{timeline[activeTimeline].metric}</span>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</PageSection>

<PageSection id="project-related" tone="subtle">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">More projects</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Additional case studies you may enjoy.</h2>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each related as item}
			<a href={`/work/${item.slug}`} class="surface-card h-full">
				<h3 class="text-xl font-semibold text-base-content">{item.title}</h3>
				<p class="mt-2 text-sm text-base-content/70">{item.summary}</p>
				<ul
					class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"
				>
					{#each item.tags as tag}
						<li>#{tag}</li>
					{/each}
				</ul>
				<span class="link-cta mt-4 inline-flex">View project</span>
			</a>
		{/each}
	</div>
</PageSection>

<style>
	.hero-media {
		position: relative;
		border-radius: 2rem;
		overflow: hidden;
		box-shadow: 0 40px 90px rgba(5, 11, 35, 0.5);
	}

	.hero-video,
	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.hero-overlay {
		position: absolute;
		inset: auto 0 0 0;
		padding: 2.5rem 3rem;
		background: linear-gradient(180deg, transparent, rgba(5, 8, 20, 0.88));
		color: rgba(226, 232, 255, 0.9);
	}

	.hero-overlay h2 {
		font-size: 1.8rem;
		font-weight: 600;
	}

	.hero-overlay p {
		margin-top: 0.5rem;
		font-size: 1rem;
		color: rgba(226, 232, 255, 0.75);
		max-width: 34rem;
	}

	.kpi-card {
		min-height: 160px;
	}

	.kpi-label {
		text-transform: uppercase;
		letter-spacing: 0.26em;
		font-size: 0.75rem;
		color: rgba(226, 232, 255, 0.6);
	}

	.kpi-value {
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 1.1;
		margin-top: 0.4rem;
		color: rgba(226, 232, 255, 0.95);
	}

	.kpi-meta {
		margin-top: 0.3rem;
		color: rgba(226, 232, 255, 0.7);
		font-size: 0.95rem;
	}

	.chapter {
		padding: 2rem;
		border-radius: 1.4rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(140deg, rgba(9, 13, 31, 0.9), rgba(47, 93, 255, 0.18));
		color: rgba(226, 232, 255, 0.92);
		box-shadow: 0 25px 60px rgba(5, 11, 28, 0.35);
	}

	.chapter header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 0.8rem;
	}

	.chapter header h3 {
		font-size: 1.4rem;
		font-weight: 600;
	}

	.chapter header span {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.28em;
		color: rgba(226, 232, 255, 0.55);
	}

	.chapter p {
		font-size: 0.98rem;
		color: rgba(226, 232, 255, 0.72);
		line-height: 1.7;
	}

	.chapter-meta {
		margin-top: 1rem;
		display: flex;
		gap: 0.6rem;
		align-items: center;
		color: rgba(226, 232, 255, 0.68);
		font-size: 0.95rem;
	}

	.chip {
		padding: 0.45rem 0.75rem;
		border-radius: 999px;
		background: rgba(124, 247, 255, 0.1);
		color: #7cf7ff;
		font-size: 0.82rem;
		letter-spacing: 0.05em;
	}

	.timeline {
		display: grid;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.timeline-item button {
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.9rem;
		padding: 0.9rem 1.1rem;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(9, 13, 31, 0.65);
		text-align: left;
		color: rgba(226, 232, 255, 0.9);
		box-shadow: 0 10px 28px rgba(4, 7, 18, 0.45);
		transition: border-color 200ms ease, transform 200ms ease, background 200ms ease;
	}

	.timeline-item.active button {
		border-color: rgba(124, 247, 255, 0.4);
		background: linear-gradient(140deg, rgba(9, 13, 31, 0.9), rgba(124, 247, 255, 0.08));
		transform: translateY(-2px);
	}

	.step-index {
		width: 2rem;
		height: 2rem;
		border-radius: 999px;
		display: grid;
		place-items: center;
		background: rgba(124, 247, 255, 0.12);
		border: 1px solid rgba(124, 247, 255, 0.5);
		font-weight: 600;
	}

	.step-body h3 {
		font-size: 1.1rem;
		font-weight: 600;
	}

	.step-body p {
		margin-top: 0.25rem;
		font-size: 0.95rem;
		color: rgba(226, 232, 255, 0.72);
	}

	.step-time {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.24em;
		color: rgba(124, 247, 255, 0.75);
	}

	.step-metric {
		margin-top: 0.35rem;
		display: inline-flex;
		padding: 0.35rem 0.7rem;
		border-radius: 999px;
		background: rgba(255, 107, 203, 0.12);
		color: #ff6bcb;
		font-size: 0.85rem;
		letter-spacing: 0.04em;
	}

	.chapter-pane {
		min-height: 320px;
	}

	@media (max-width: 768px) {
		.timeline-item button {
			grid-template-columns: 1fr;
		}
	}
</style>
