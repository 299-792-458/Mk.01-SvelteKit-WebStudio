<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const members = data.team ?? [];
</script>

<PageSection id="team-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Team</span>
		<h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			The constellation behind Mk.01 experiments and launches.
		</h1>
		<p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">
			Distributed across Seoul, Busan, Tokyo, and beyond, the team blends strategy, design systems,
			motion direction, and engineering discipline.
		</p>
	</div>
</PageSection>

<PageSection id="team-grid">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each members as member}
			<article class="surface-card h-full">
				<div class="flex items-start gap-4">
					<div class="avatar">
						<div class="w-16 rounded-full ring ring-primary/30 ring-offset-2 ring-offset-base-200">
							<img src={member.avatar} alt={member.name} loading="lazy" decoding="async" />
						</div>
					</div>
					<div class="space-y-1">
						<h2 class="text-xl font-semibold text-base-content">{member.name}</h2>
						<p class="text-sm text-base-content/60">{member.title}</p>
						<p class="text-xs uppercase tracking-[0.22em] text-primary/70">{member.location}</p>
					</div>
				</div>
				<ul class="mt-4 flex flex-wrap gap-2 text-[0.75rem] uppercase tracking-[0.18em] text-base-content/70">
					{#each member.specialties as specialty}
						<li class="rounded-full bg-base-200/70 px-3 py-2">{specialty}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</PageSection>

<PageSection id="team-cta" tone="subtle" padding="compact">
	<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center">
		<h2 class="text-2xl font-semibold sm:text-3xl">Build with us.</h2>
		<p class="mt-3 text-sm text-base-content/70 sm:text-base">
			We assemble a bespoke crew for every engagement. Tell us what you’re building and we’ll
			pair the right specialists.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3">
			<a href="/contact" class="btn btn-primary btn-sm sm:btn-md">Start a scope</a>
			<a href="/about" class="btn btn-ghost btn-sm sm:btn-md">Learn about the studio</a>
		</div>
	</div>
</PageSection>
