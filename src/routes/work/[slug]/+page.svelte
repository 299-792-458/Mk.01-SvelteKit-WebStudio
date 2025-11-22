<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import Surface from '$components/ui/Surface.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { project, related } = data;
	const projectContent = project.content;
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
			<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
				{project.title}
			</h1>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">{project.summary}</p>
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
			<img src={`/images/work/${project.slug}-hero.jpg`} alt={project.title} class="hero-image" />
		{/if}
		<div class="hero-overlay">
			<h2>{projectContent.hero.headline}</h2>
			<p>{projectContent.hero.subheadline}</p>
		</div>
	</div>
</PageSection>

<PageSection id="project-outcomes">
	<div class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
		<Surface variant="panel" padding="md" as="section">
			<h2 class="text-2xl font-semibold text-base-content">Outcomes</h2>
			<ul class="mt-4 space-y-3 text-sm text-base-content/70">
				{#each projectContent.outcomes as outcome}
					<li class="flex gap-3">
						<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80" />
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
				<li>Experience design</li>
				<li>WebGL</li>
				<li>Motion direction</li>
				<li>Design systems</li>
			</ul>
			<a href="/contact" class="btn btn-primary btn-sm mt-6">Start a scope</a>
		</Surface>
	</div>
</PageSection>

<PageSection id="project-chapters">
	<div class="space-y-12">
		{#each projectContent.chapters as chapter}
			<section class="chapter">
				<header>
					<h3>{chapter.title}</h3>
					<span>{chapter.id}</span>
				</header>
				<p>{chapter.description}</p>
			</section>
		{/each}
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
</style>
