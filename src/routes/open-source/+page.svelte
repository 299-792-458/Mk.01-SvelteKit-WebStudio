<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';

	const repositories = [
		{
			name: 'mk1-motion-kit',
			description: 'Motion presets, scroll choreography, and utilities for Svelte projects.',
			stars: '1.2k',
			url: 'https://github.com/your-handle/mk1-motion-kit',
			tags: ['Svelte', 'Motion', 'Open Source']
		},
		{
			name: 'aurora-shaders',
			description:
				'GLSL shader collection powering atmospheric hero sections and background loops.',
			stars: '870',
			url: 'https://github.com/your-handle/aurora-shaders',
			tags: ['GLSL', 'WebGL', 'Visuals']
		},
		{
			name: 'mk1-content-studio',
			description: 'MDX-first authoring experience integrating with SvelteKit + Contentlayer.',
			stars: '640',
			url: 'https://github.com/your-handle/mk1-content-studio',
			tags: ['Content', 'MDX', 'SvelteKit']
		}
	];
</script>

<PageSection id="oss-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Open source</span>
		<h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			Sharing tools and learnings with the community.
		</h1>
		<p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">
			Mk.01 believes in teaching through building. Explore the libraries, starters, and experiments
			we maintain for the creative web community.
		</p>
	</div>
</PageSection>

<PageSection id="oss-repositories">
	<div class="grid gap-6 md:grid-cols-3">
		{#each repositories as repo}
			<a href={repo.url} target="_blank" rel="noreferrer" class="surface-card h-full">
				<h2 class="text-xl font-semibold text-base-content">{repo.name}</h2>
				<p class="mt-2 text-sm text-base-content/70">{repo.description}</p>
				<div
					class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"
				>
					{#each repo.tags as tag}
						<span class="rounded-full bg-base-200/80 px-3 py-1">{tag}</span>
					{/each}
				</div>
				<span class="link-cta mt-4 inline-flex">View on GitHub · ⭐ {repo.stars}</span>
			</a>
		{/each}
	</div>
</PageSection>
