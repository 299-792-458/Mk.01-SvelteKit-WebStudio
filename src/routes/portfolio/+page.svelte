<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const projects = data.projects ?? [];
</script>

<PageSection id="portfolio-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Portfolio</span>
		<h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			A curated library of Mk.01 case studies and immersive launches.
		</h1>
		<p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">
			Explore narrative websites, design systems, and R&D experiments that shipped for partners
			across entertainment, fintech, wellness, and more.
		</p>
	</div>
</PageSection>

<PageSection id="portfolio-grid">
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<article class="portfolio-card">
				<div class="media">
					<img
						src={project.coverImage}
						alt={project.title}
						loading="lazy"
						decoding="async"
						width="960"
						height="640"
					/>
					<div class="pill">{project.industry}</div>
				</div>
				<div class="body">
					<h2>{project.title}</h2>
					<p>{project.summary}</p>
					<ul>
						{#each project.tags as tag}
							<li>#{tag}</li>
						{/each}
					</ul>
					<a href={`/work/${project.slug}`} class="link-cta" sveltekit:prefetch>
						View case study
					</a>
				</div>
			</article>
		{/each}
	</div>
</PageSection>

<PageSection id="portfolio-cta" tone="subtle" padding="compact">
	<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center">
		<h2 class="text-2xl font-semibold sm:text-3xl">Need a bespoke build?</h2>
		<p class="mt-3 text-sm text-base-content/70 sm:text-base">
			Share your brief and we’ll assemble the right squad—strategy, motion, WebGL, and engineering—
			to ship it.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3">
			<a href="/contact" class="btn btn-primary btn-sm sm:btn-md">Start a scope</a>
			<a href="/capabilities" class="btn btn-ghost btn-sm sm:btn-md">View capabilities</a>
		</div>
	</div>
</PageSection>

<style>
	.portfolio-card {
		display: grid;
		gap: 1rem;
		border-radius: 1.5rem;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(150deg, rgba(12, 17, 35, 0.92), rgba(75, 88, 255, 0.18));
		box-shadow: 0 24px 60px rgba(5, 12, 38, 0.35);
	}

	.media {
		position: relative;
		overflow: hidden;
	}

	.media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 400ms ease, filter 400ms ease;
	}

	.portfolio-card:hover .media img {
		transform: scale(1.04);
		filter: saturate(125%);
	}

	.pill {
		position: absolute;
		top: 1rem;
		right: 1rem;
		padding: 0.4rem 0.8rem;
		border-radius: 999px;
		background: rgba(15, 23, 42, 0.7);
		color: rgba(226, 232, 255, 0.88);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
	}

	.body {
		display: grid;
		gap: 0.6rem;
		padding: 0 1.4rem 1.4rem;
		color: rgba(226, 232, 255, 0.9);
	}

	h2 {
		font-size: 1.3rem;
		font-weight: 600;
	}

	p {
		color: rgba(226, 232, 255, 0.7);
		line-height: 1.6;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		font-size: 0.75rem;
		color: rgba(226, 232, 255, 0.65);
	}
</style>
