<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import ScrambleText from '$lib/components/motion/ScrambleText.svelte';
	import { tilt } from '$lib/components/motion/tilt';
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
		<h1 class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[0.9]">
			<ScrambleText text="Systems designed to ship." speed={40} />
		</h1>
		<p class="max-w-3xl text-lg text-base-content/70 sm:text-xl leading-relaxed">
			Every engagement blends strategy, systems, and expressive engineering. Filter by industry or
			year to explore how the same codebase adapts to each brief.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
		<div class="p-6 rounded-2xl border border-base-content/10 bg-base-100/50 backdrop-blur-md" use:tilt={{ max: 5, scale: 1.02 }}>
			<p class="text-5xl font-bold text-base-content tracking-tighter">17+</p>
			<p class="mt-2 text-xs uppercase tracking-[0.25em] text-base-content/50 font-bold">
				Global collaborators
			</p>
		</div>
		<div class="p-6 rounded-2xl border border-base-content/10 bg-base-100/50 backdrop-blur-md" use:tilt={{ max: 5, scale: 1.02 }}>
			<p class="text-5xl font-bold text-base-content tracking-tighter">48</p>
			<p class="mt-2 text-xs uppercase tracking-[0.25em] text-base-content/50 font-bold">
				Experiments live
			</p>
		</div>
		<div class="p-6 rounded-2xl border border-base-content/10 bg-base-100/50 backdrop-blur-md" use:tilt={{ max: 5, scale: 1.02 }}>
			<p class="text-5xl font-bold text-base-content tracking-tighter">92</p>
			<p class="mt-2 text-xs uppercase tracking-[0.25em] text-base-content/50 font-bold">Client NPS</p>
		</div>
	</div>
</PageSection>

<PageSection id="work-filters" padding="compact">
	<div class="flex flex-wrap gap-4 p-4 rounded-xl border border-base-content/10 bg-base-200/30 backdrop-blur-sm">
		<label class="flex flex-col gap-1.5">
			<span class="text-[0.65rem] uppercase tracking-widest font-bold text-base-content/50">Industry</span>
			<select bind:value={selectedIndustry} class="select select-sm select-bordered bg-base-100/50 min-w-[160px]">
				{#each industries as industry}
					<option value={industry}>{industry}</option>
				{/each}
			</select>
		</label>
		<label class="flex flex-col gap-1.5">
			<span class="text-[0.65rem] uppercase tracking-widest font-bold text-base-content/50">Year</span>
			<select bind:value={selectedYear} class="select select-sm select-bordered bg-base-100/50 min-w-[120px]">
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
			class="py-20 rounded-3xl border border-dashed border-base-content/20 bg-base-100/30 text-center"
		>
			<span class="text-4xl block mb-4 opacity-50">∅</span>
			<p class="text-lg text-base-content/70">No projects found in this sector.</p>
			<button class="btn btn-link mt-2" on:click={() => { selectedIndustry = 'All'; selectedYear = 'All'; }}>Reset Filters</button>
		</div>
	{:else}
		<div class="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project (project.slug)}
				<article class="group" use:tilt={{ max: 8, scale: 1.02, glare: true }}>
					<a href={`/work/${project.slug}`} class="block space-y-5">
						<div class="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3]">
							<Image
								src={project.coverImage ?? `/images/work/${project.slug}-cover.jpg`}
								alt={project.title}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
						</div>
						
						<div class="space-y-2">
							<div class="flex justify-between items-center text-xs uppercase tracking-widest font-bold text-base-content/50">
								<span>{project.industry}</span>
								<span class="text-primary">{project.year}</span>
							</div>
							<h2 class="text-2xl font-bold text-base-content group-hover:text-primary transition-colors">{project.title}</h2>
							<p class="text-base text-base-content/70 line-clamp-2">{project.summary ?? project.description}</p>
							
							<div class="flex flex-wrap gap-2 pt-2">
								{#each project.tags.slice(0, 3) as tag}
									<span class="px-2 py-1 rounded-md bg-base-content/5 text-[0.65rem] uppercase tracking-wider text-base-content/60 border border-base-content/5">
										#{tag}
									</span>
								{/each}
							</div>
						</div>
					</a>
				</article>
			{/each}
		</div>
	{/if}
</PageSection>

<PageSection id="work-labs" tone="subtle">
	<div class="space-y-8 text-center max-w-3xl mx-auto mb-12">
		<span class="eyebrow text-secondary/80">R&D Pipeline</span>
		<h2 class="text-4xl font-bold">Experiments that fuel the work.</h2>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each labs as experiment}
			<a href={`/labs/${experiment.slug}`} class="p-6 rounded-2xl border border-base-content/10 bg-base-100/60 hover:border-primary/30 transition-colors group block" use:tilt={{ max: 3, scale: 1.01 }}>
				<h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors">{experiment.title}</h3>
				<p class="mt-2 text-sm text-base-content/70">{experiment.summary}</p>
				<span class="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-base-content/50 group-hover:text-primary transition-colors">
					Access Data
					<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
				</span>
			</a>
		{/each}
	</div>
</PageSection>