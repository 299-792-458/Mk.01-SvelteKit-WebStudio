<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import Surface from '$components/ui/Surface.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const experiment = data.experiment;
	const relatedProject = data.relatedProject;
</script>

<PageSection id="experiment-hero" tone="contrast" padding="xl">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
		<div class="space-y-5">
			<span class="eyebrow text-secondary/80">Lab experiment</span>
			<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
				{experiment.title}
			</h1>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">{experiment.summary}</p>
			<ul class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60">
				{#each experiment.tech as tech}
					<li class="rounded-full bg-base-100/60 px-4 py-2 text-[0.7rem]">{tech}</li>
				{/each}
			</ul>
			<div class="flex flex-wrap gap-3">
				{#if experiment.links.demo}
					<a
						href={experiment.links.demo}
						target="_blank"
						rel="noreferrer"
						class="btn btn-primary btn-lg"
					>
						Launch demo
					</a>
				{/if}
				{#if experiment.links.source}
					<a
						href={experiment.links.source}
						target="_blank"
						rel="noreferrer"
						class="btn btn-outline btn-lg"
					>
						View source
					</a>
				{/if}
			</div>
	</div>
	<div class="media">
		<div class="glow"></div>
		<img src={experiment.thumbnail} alt={experiment.title} loading="lazy" />
	</div>
</div>
</PageSection>

<PageSection id="experiment-detail">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
		<Surface variant="panel" padding="md" as="article">
			<h2 class="text-2xl font-semibold text-base-content">Concept</h2>
			<p class="mt-3 text-base text-base-content/70">
				{experiment.highlight}
			</p>

			<section class="mt-6 space-y-4">
				<h3 class="text-lg font-semibold text-base-content">What we explored</h3>
				<ul class="grid gap-3 text-sm text-base-content/70">
					<li>Motion language experiments blending sound, scroll, and pointer data.</li>
					<li>Performance profiling for shader-heavy experiences across mobile and desktop.</li>
					<li>Framework for wrapping prototypes into production-ready SvelteKit modules.</li>
				</ul>
			</section>

			<section class="mt-6 space-y-4">
				<h3 class="text-lg font-semibold text-base-content">What’s next</h3>
				<ul class="grid gap-3 text-sm text-base-content/70">
					<li>Ship a component pack turning the best patterns into reusable primitives.</li>
					<li>Host an open studio session to share process notes and code breakdowns.</li>
					<li>Integrate the learnings into upcoming product launches and case studies.</li>
				</ul>
			</section>
		</Surface>

		<Surface variant="glass" padding="md" as="aside">
			<h2 class="text-lg font-semibold text-base-content">Related work</h2>
			{#if relatedProject}
				<div class="mt-4 space-y-3">
					<div class="rounded-xl overflow-hidden">
						<img
							src={relatedProject.coverImage ?? '/images/work/neon-metropolis-cover.jpg'}
							alt={relatedProject.title}
							class="aspect-video w-full object-cover"
						/>
					</div>
					<h3 class="text-xl font-semibold text-base-content">{relatedProject.title}</h3>
					<ul class="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-base-content/60">
						{#each relatedProject.tags as tag}
							<li class="rounded-full bg-base-100/70 px-3 py-1">#{tag}</li>
						{/each}
					</ul>
					<a href={`/work/${relatedProject.slug}`} class="link-cta mt-4 inline-flex">
						View case study
					</a>
				</div>
			{:else}
				<p class="mt-4 text-sm text-base-content/70">More details coming soon.</p>
			{/if}
		</Surface>
	</div>
</PageSection>

<style>
	.media {
		position: relative;
		border-radius: 1.6rem;
		overflow: hidden;
		min-height: 260px;
		box-shadow: 0 25px 60px rgba(9, 11, 28, 0.5);
	}

	.media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 10% 10%, rgba(255, 107, 203, 0.3), transparent 60%);
		mix-blend-mode: screen;
	}
</style>
