<script>
	import { appConfig } from '$config/app.config';
	import HeroSequencer from '$components/experience/HeroSequencer.svelte';
	import PageSection from '$lib/components/ui/PageSection.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const identity = data.identity ?? appConfig.identity;
	const metrics = data.metrics ?? appConfig.metrics;

	const studioPillars = [
		{
			title: 'Strategy-first craft',
			description:
				'Clarity and intent guide every concept. We map goals, audiences, and success metrics before the first pixel ships.'
		},
		{
			title: 'Web as a playground',
			description:
				'We embrace motion, storytelling, and modern web APIs to deliver experiences that feel alive and memorable.'
		},
		{
			title: 'Inclusive by default',
			description:
				'Accessibility, performance, and localization are treated as core features, not afterthoughts.'
		}
	];

	const collaborationModes = [
		{
			title: 'Embedded partner',
			description:
				'Join forces on in-flight products as the design-engineering layer that accelerates outcomes.',
			deliverables: 'Product UX, component builds, sprint rituals'
		},
		{
			title: 'Launch studio',
			description:
				'From brand narrative to launch assets, we orchestrate the end-to-end reveal of your next big thing.',
			deliverables: 'Identity, landing systems, marketing stack'
		},
		{
			title: 'Exploration lab',
			description:
				'Rapid prototypes, speculative concepts, and R&D explorations to push ideas into the wild.',
			deliverables: 'Interactive demos, technical spikes, storytelling decks'
		}
	];

	const dateFormatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	function formatDate(value) {
		try {
			return dateFormatter.format(new Date(value));
		} catch {
			return value;
		}
	}
</script>

<HeroSequencer {identity} {metrics} showcases={data.showcases ?? []} />

<PageSection id="manifesto" tone="contrast">
	<div class="grid gap-10 lg:grid-cols-[1.25fr_minmax(0,1fr)] lg:items-start">
		<div class="space-y-6">
			<span class="eyebrow text-secondary/80">Manifesto</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">
				Where clarity, experimentation, and inclusivity converge.
			</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Every engagement starts with rigorous discovery and evolves into playful iteration. We
				choreograph the dance between product goals and expressive storytelling so experiences
				resonate, perform, and scale.
			</p>
		</div>

		<div class="grid gap-4">
			{#each studioPillars as pillar}
				<div
					class="rounded-2xl border border-base-200/80 bg-base-100/60 p-6 shadow-lg backdrop-blur"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
						{pillar.title}
					</p>
					<p class="mt-3 text-sm text-base-content/70">{pillar.description}</p>
				</div>
			{/each}
		</div>
	</div>
</PageSection>

<PageSection id="featured-work">
	<div class="mx-auto max-w-3xl text-center space-y-4">
		<span class="eyebrow">Featured Work</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">A selection of our favorite projects.</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			We take pride in our work. Here are a few of our favorite projects.
		</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		{#each data.projects as project}
			<a
				href={`/work/${project.slug}`}
				class="surface-card group flex h-full flex-col justify-between"
			>
				<div class="space-y-3">
					<div class="overflow-hidden rounded-lg">
						<img
							src={project.image}
							alt={project.title}
							class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<h3 class="text-xl font-semibold text-base-content group-hover:text-primary">
						{project.title}
					</h3>
					<p class="text-sm text-base-content/70">{project.description}</p>
				</div>
				<span class="link-cta mt-6">View Project</span>
			</a>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<a href="/work" class="btn btn-primary btn-lg">View all work</a>
	</div>
</PageSection>

<PageSection id="latest" tone="subtle">
	<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
		<div class="space-y-3">
			<span class="eyebrow text-secondary/80">Journal</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Latest writing from the studio.</h2>
			<p class="max-w-2xl text-sm text-base-content/70 sm:text-base">
				Insights on modern web craft, behind-the-scenes process notes, and explorations fresh from
				the lab.
			</p>
		</div>
		<a href="/blog" class="btn btn-outline btn-sm self-start">View all posts</a>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		{#if data.posts?.length}
			{#each data.posts as post}
				<article
					class="group flex h-full flex-col rounded-2xl border border-base-300/70 bg-base-100/80 p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="text-xs uppercase tracking-widest text-base-content/60">
						{formatDate(post.date)}
					</div>
					<h3 class="mt-3 text-2xl font-semibold text-base-content group-hover:text-primary">
						{post.title}
					</h3>
					<p class="mt-3 flex-1 text-sm text-base-content/70">{post.description}</p>
					<a href={`/blog/${post.slug}`} class="link-cta mt-6">
						Read article
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
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
					</a>
				</article>
			{/each}
		{:else}
			<div
				class="rounded-2xl border border-dashed border-base-300/70 bg-base-100/60 p-10 text-center text-base-content/70"
			>
				New stories are brewing. Check back soon!
			</div>
		{/if}
	</div>
</PageSection>

<PageSection id="capabilities">
	<div class="mx-auto max-w-3xl text-center space-y-3">
		<span class="eyebrow">Collaboration</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">
			Shape a collaboration model that fits your momentum.
		</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			We adapt to your team’s cadence—plug us into a sprint, co-create a launch, or prototype
			something audacious.
		</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		{#each collaborationModes as mode}
			<div class="surface-card h-full">
				<h3 class="text-xl font-semibold">{mode.title}</h3>
				<p class="mt-3 text-sm text-base-content/70">{mode.description}</p>
				<div
					class="mt-6 rounded-xl border border-base-200/70 bg-base-100/80 p-4 text-xs uppercase tracking-widest text-base-content/60"
				>
					{mode.deliverables}
				</div>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection id="connect" tone="contrast" padding="compact">
	<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center">
		<span class="eyebrow text-secondary/80">Let’s build together</span>
		<h2 class="mt-4 text-3xl font-semibold sm:text-4xl">
			Have an idea, launch, or experiment in mind?
		</h2>
		<p class="mt-4 text-base text-base-content/70 sm:text-lg">
			Share your project vision, and we’ll map a path from discovery to a memorable, shippable
			experience.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3">
			<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Open a conversation</a>
			<a href="/about" class="btn btn-ghost btn-lg">Get to know the studio</a>
		</div>
	</div>
</PageSection>
