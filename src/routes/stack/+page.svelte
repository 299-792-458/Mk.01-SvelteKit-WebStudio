<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';

	const layers = [
		{
			title: 'Frontend',
			tools: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'mdsvex', 'Motion One', 'GSAP']
		},
		{
			title: 'Rendering & visuals',
			tools: ['Three.js', 'GLSL', 'Spline', 'Rive', 'Lottie']
		},
		{
			title: 'Data & content',
			tools: ['Sanity', 'Contentful', 'GraphQL', 'Supabase', 'Contentlayer']
		},
		{
			title: 'Automation & ops',
			tools: ['Vercel', 'Netlify', 'Cloudflare', 'GitHub Actions', 'Playwright', 'Percy']
		}
	];
</script>

<PageSection id="stack-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Studio stack</span>
		<h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			Tools and platforms powering Mk.01 experiences.
		</h1>
		<p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">
			Every engagement selects the right combination of tools across strategy, design, motion, and
			engineering to deliver expressive yet performant products.
		</p>
	</div>
</PageSection>

<PageSection id="stack-grid">
	<div class="grid gap-6 md:grid-cols-2">
		{#each layers as layer}
			<div class="surface-card h-full">
				<h2 class="text-xl font-semibold text-base-content">{layer.title}</h2>
				<ul
					class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"
				>
					{#each layer.tools as tool}
						<li class="rounded-full bg-base-200/60 px-3 py-1">{tool}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</PageSection>
