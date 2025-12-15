<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import LabPreview from '$components/experience/LabPreview.svelte';
	import ScrambleText from '$lib/components/motion/ScrambleText.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import { tilt } from '$lib/components/motion/tilt';
	import type { PageData } from './$types';

	export let data: PageData;

	const experiments = data.experiments ?? [];

	const statusBadge = {
		prototype: { label: 'PROTOTYPE', tone: 'text-warning bg-warning/10 border-warning/20' },
		production: { label: 'LIVE', tone: 'text-success bg-success/10 border-success/20' },
		archived: { label: 'ARCHIVED', tone: 'text-base-content/40 bg-base-content/5 border-base-content/10' }
	} as const;
</script>

<PageSection id="labs-hero" tone="contrast" padding="xl">
	<div class="space-y-8 text-center max-w-4xl mx-auto">
		<span class="eyebrow text-secondary/80">Mk.01 Labs</span>
		<h1 class="text-5xl font-bold tracking-tight sm:text-7xl leading-[0.9]">
			<ScrambleText text="Living web experiments." speed={50} />
		</h1>
		<p class="text-lg text-base-content/70 sm:text-xl leading-relaxed max-w-2xl mx-auto">
			The Labs are our playground for prototyping radical ideas. Some ship into production, others
			become open-source seeds, all of them teach us how to build bolder products.
		</p>
		<div class="flex flex-wrap justify-center gap-4 pt-4">
			<a href="/work" class="btn btn-outline btn-lg">See launched work</a>
			<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Collaborate on R&D</a>
		</div>
	</div>
</PageSection>

<PageSection id="labs-grid">
	<div class="grid gap-10 lg:grid-cols-3">
		{#each experiments as experiment}
			<article class="group relative flex flex-col h-full rounded-3xl border border-base-content/10 bg-base-100/40 backdrop-blur-md overflow-hidden transition-all hover:border-primary/30 hover:shadow-2xl" use:tilt={{ max: 5, scale: 1.01, glare: true }}>
				
				<!-- Media Area -->
				<div class="relative h-64 overflow-hidden border-b border-base-content/5">
					<div class="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
						<LabPreview accent={experiment.accent ?? '#7cf7ff'} glow="#ff6bcb" speed={1.1} />
					</div>
					{#if experiment.thumbnail}
						<div class="absolute inset-0 z-10 opacity-40 mix-blend-overlay group-hover:opacity-20 transition-opacity">
							<Image 
								src={experiment.thumbnail} 
								alt={experiment.title} 
								className="w-full h-full object-cover grayscale"
							/>
						</div>
					{/if}
					
					<!-- Status Pill -->
					<div class="absolute top-4 left-4 z-20">
						<span class={`px-2 py-1 text-[0.6rem] font-mono font-bold uppercase tracking-widest border rounded ${statusBadge[experiment.status].tone}`}>
							{statusBadge[experiment.status].label}
						</span>
					</div>
				</div>

				<!-- Content -->
				<div class="p-8 flex-1 flex flex-col gap-4">
					<div class="space-y-2">
						<h2 class="text-2xl font-bold group-hover:text-primary transition-colors">{experiment.title}</h2>
						<p class="text-base text-base-content/70 leading-relaxed">{experiment.summary}</p>
					</div>

					<div class="pt-4 mt-auto border-t border-base-content/5 space-y-4">
						<div class="flex flex-wrap gap-2">
							{#each experiment.tech as tech}
								<span class="text-[0.65rem] font-mono text-base-content/50 border border-base-content/10 px-1.5 py-0.5 rounded">
									{tech}
								</span>
							{/each}
						</div>
						
						<div class="flex gap-3">
							<a href={`/labs/${experiment.slug}`} class="btn btn-sm btn-outline flex-1">Read Analysis</a>
							{#if experiment.links.demo}
								<a href={experiment.links.demo} target="_blank" rel="noreferrer" class="btn btn-sm btn-ghost flex-1">
									Launch
									<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
								</a>
							{/if}
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</PageSection>