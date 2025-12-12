<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const projects = data.projects ?? [];
	const labs = data.labs ?? [];

	const industries = ['All', ...new Set(projects.map((project) => project.industry))];
	const years = ['All', ...new Set(projects.map((project) => project.year))];

	let selectedIndustry = 'All';
	let selectedYear = 'All';

	$: filteredProjects = projects.filter((project) => {
		const industryMatch = selectedIndustry === 'All' || project.industry === selectedIndustry;
		const yearMatch = selectedYear === 'All' || project.year === selectedYear;
		return industryMatch && yearMatch;
	});
</script>

<PageSection id="work-hero" tone="contrast" padding="xl">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Case studies</span>
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			Launch systems, product platforms, and narrative websites crafted to ship.
		</h1>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			Every engagement blends strategy, systems, and expressive engineering. Filter by industry or
			year to explore how the same codebase adapts to each brief.
		</p>
	</div>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		<div class="rounded-2xl border border-base-200/60 bg-base-100/80 p-6 shadow-lg">
			<p class="text-4xl font-semibold text-base-content">17+</p>
			<p class="mt-1 text-xs uppercase tracking-widest text-base-content/60">
				Global collaborators
			</p>
		</div>
		<div class="rounded-2xl border border-base-200/60 bg-base-100/80 p-6 shadow-lg">
			<p class="text-4xl font-semibold text-base-content">48</p>
			<p class="mt-1 text-xs uppercase tracking-widest text-base-content/60">
				Experiments in production
			</p>
		</div>
		<div class="rounded-2xl border border-base-200/60 bg-base-100/80 p-6 shadow-lg">
			<p class="text-4xl font-semibold text-base-content">92</p>
			<p class="mt-1 text-xs uppercase tracking-widest text-base-content/60">Average client NPS</p>
		</div>
	</div>
</PageSection>

<PageSection id="work-filters">
	<div class="flex flex-wrap gap-3">
		<label class="filter">
			<span class="filter-label">Industry</span>
			<select bind:value={selectedIndustry} class="select select-bordered">
				{#each industries as industry}
					<option value={industry}>{industry}</option>
				{/each}
			</select>
		</label>
		<label class="filter">
			<span class="filter-label">Year</span>
			<select bind:value={selectedYear} class="select select-bordered">
				{#each years as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</label>
	</div>
</PageSection>

<PageSection id="work-grid">
	{#if filteredProjects.length === 0}
		<div
			class="rounded-2xl border border-dashed border-base-200/70 bg-base-100/80 p-10 text-center text-base-content/70"
		>
			No projects match those filters yet. Try another combination.
		</div>
	{:else}
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project (project.slug)}
				<article class="work-card">
					<div class="media">
						<img
							src={project.coverImage ?? `/images/work/${project.slug}-cover.jpg`}
							alt={project.title}
							loading="lazy"
							decoding="async"
							width="960"
							height="640"
						/>
					</div>
					<div class="body">
						<div class="chips">
							<span>{project.industry}</span>
							<span>{project.year}</span>
						</div>
						<h2>{project.title}</h2>
						<p>{project.summary ?? project.description}</p>
						<ul class="tags">
							{#each project.tags as tag}
								<li>#{tag}</li>
							{/each}
						</ul>
						<a href={`/work/${project.slug}`} class="link-cta">View project</a>
					</div>
				</article>
			{/each}
		</div>
	{/if}
</PageSection>

<PageSection id="work-labs" tone="subtle">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">From the labs</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Experiments that inspired these launches.</h2>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each labs as experiment}
			<div class="surface-card h-full">
				<h3 class="text-lg font-semibold text-base-content">{experiment.title}</h3>
				<p class="mt-2 text-sm text-base-content/70">{experiment.summary}</p>
				<a href={`/labs/${experiment.slug}`} class="link-cta mt-4 inline-flex"> Read experiment </a>
			</div>
		{/each}
	</div>
</PageSection>

<style>
	.work-card {
		display: grid;
		gap: 1.25rem;
		border-radius: 1.6rem;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(150deg, rgba(9, 13, 31, 0.92), rgba(47, 93, 255, 0.18));
		box-shadow: 0 25px 60px rgba(5, 11, 28, 0.35);
	}

	.media {
		position: relative;
		overflow: hidden;
		border-radius: 1.4rem 1.4rem 0 0;
	}

	.media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition:
			transform 400ms ease,
			filter 400ms ease;
	}

	.work-card:hover .media img {
		transform: scale(1.05);
		filter: saturate(130%);
	}

	.body {
		display: grid;
		gap: 0.7rem;
		padding: 0 1.6rem 1.6rem;
		color: rgba(226, 232, 255, 0.92);
	}

	.chips {
		display: flex;
		gap: 0.5rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: rgba(226, 232, 255, 0.6);
	}

	h2 {
		font-size: 1.4rem;
		font-weight: 600;
	}

	p {
		font-size: 0.95rem;
		color: rgba(226, 232, 255, 0.72);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		font-size: 0.75rem;
		color: rgba(226, 232, 255, 0.65);
	}

	.filter {
		display: grid;
		gap: 0.4rem;
	}

	.filter-label {
		font-size: 0.62rem;
		text-transform: uppercase;
		letter-spacing: 0.28em;
		color: rgba(15, 18, 40, 0.58);
	}

	.filter .select {
		margin: 0;
	}
</style>
