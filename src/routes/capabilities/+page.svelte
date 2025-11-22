<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';

	const capabilitySets = [
		{
			title: 'Strategy & positioning',
			items: ['Vision workshops', 'Narrative mapping', 'Content architecture', 'Measurement plans']
		},
		{
			title: 'Experience design',
			items: ['Interaction design', 'Design systems', 'Accessibility audits', 'Design tokens']
		},
		{
			title: 'Engineering',
			items: ['SvelteKit builds', 'WebGL & shaders', 'Edge deployments', 'Automation suites']
		},
		{
			title: 'Launch & growth',
			items: ['Launch playbooks', 'Motion specs', 'Knowledge bases', 'Enablement sessions']
		}
	];
</script>

<PageSection id="capabilities-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Capabilities</span>
		<h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			A full-stack studio blending strategy, design, motion, and engineering.
		</h1>
		<p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">
			Our engagements flex to your stage: discovery sprints, product redesigns, launch campaigns,
			and experimentation programs.
		</p>
	</div>
</PageSection>

<PageSection id="capability-grid">
	<div class="grid gap-6 md:grid-cols-2">
		{#each capabilitySets as set}
			<div class="surface-card h-full">
				<h2 class="text-xl font-semibold text-base-content">{set.title}</h2>
				<ul class="mt-4 space-y-2 text-sm text-base-content/70">
					{#each set.items as item}
						<li class="flex items-start gap-2">
							<span class="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-primary/60"></span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</PageSection>
