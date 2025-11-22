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
			title: 'Strategy, then spectacle',
			description:
				'Workshops, competitive sweeps, and a crisp success map before pushing a single pixel. We align the story before turning on the spotlight.'
		},
		{
			title: 'Web as a stage',
			description:
				'Motion, narrative beats, and modern web APIs help the experience breathe. We design memorable pacing, not just screens.'
		},
		{
			title: 'Inclusive by default',
			description:
				'Accessibility, performance, and localization are non-negotiable. We test them the way others test CTAs.'
		}
	];

	const signatureMoves = [
		{
			title: 'Launch storyworlds',
			description:
				'Campaign landers, interactive walkthroughs, and cinematic scroll that guide people to your reveal.'
		},
		{
			title: 'Product-grade polish',
			description:
				'Componentized design systems, UX refactors, and measured microcopy that fit real product roadmaps.'
		},
		{
			title: 'Narrative prototyping',
			description:
				'Clickable concepts, coded demos, and pitch-ready decks that get stakeholders saying yes faster.'
		}
	];

	const capabilityToolkit = [
		{
			title: 'Design',
			items: ['Narrative architecture', 'Design systems', 'Responsive campaigns', 'Motion direction']
		},
		{
			title: 'Engineering',
			items: ['SvelteKit & Vite', 'Headless CMS', 'Edge + static hosting', 'Web animations & WebGL']
		},
		{
			title: 'Growth',
			items: ['A/B experiments', 'Analytics wiring', 'SEO + structured data', 'Localization + a11y']
		}
	];

	const stackHighlights = [
		{
			name: 'SvelteKit',
			note: 'Fast-by-default SSR and SPA blends with first-class animations.'
		},
		{
			name: 'TypeScript',
			note: 'Typed surfaces and contracts for safer, faster iteration.'
		},
		{
			name: 'Tailwind + daisyUI',
			note: 'Tokenized theming with a dash of expressive gradients.'
		},
		{
			name: 'Contentlayer',
			note: 'Structured content that stays friendly to writers and localization.'
		},
		{
			name: 'Cloudflare/Netlify',
			note: 'Edge-first delivery, instant previews, zero-drama deploys.'
		},
		{
			name: 'Playwright',
			note: 'Visual and interaction checks so immersive experiences stay stable.'
		}
	];

	const serviceTracks = [
		{
			title: 'Launch OS',
			description: 'Signature landing systems for product launches, announcements, and rebrands.',
			outcomes: ['Narrative architecture', 'Design-to-code system', 'Conversion experiments']
		},
		{
			title: 'Product pulse',
			description: 'Embedded design-engineering inside your sprints to ship quality at pace.',
			outcomes: ['Weekly ship room', 'Component builds', 'UX refactors']
		},
		{
			title: 'Exploration lab',
			description: 'Speculative prototypes, demos, and interactive decks that make ideas tangible.',
			outcomes: ['Rapid protos', 'Creative tech spikes', 'Storytelling decks']
		}
	];

	const operatingCadence = [
		{
			title: 'Signal → Shape → Ship',
			description: 'A three-beat loop where research fuels direction, direction fuels prototypes, prototypes fuel releases.'
		},
		{
			title: 'Hybrid rituals',
			description: 'Async loom reviews meet live crits. We keep stakeholders in the loop without clogging their calendar.'
		},
		{
			title: 'Quality gates',
			description: 'Inclusive checklists for performance, accessibility, and localization baked into our delivery pipeline.'
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

<PageSection id="signal" tone="subtle" padding="compact">
	<div class="surface-panel">
		<div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
			<div class="max-w-3xl space-y-4">
				<span class="eyebrow text-secondary/80">Studio signal</span>
				<h2 class="text-3xl font-semibold sm:text-4xl">
					A universal web studio for bold founders, product crews, and curious labs.
				</h2>
				<p class="text-base text-base-content/70 sm:text-lg">
					We choreograph brand, product, and engineering into one expressive surface. Strategy is our
					guardrail, experimentation is our tempo.
				</p>
			</div>
			<div class="signal-marquee" aria-hidden="true">
				<div class="marquee-track">
					{#each Array(2) as _}
						<span>Launch builds</span>
						<span>Design engineering</span>
						<span>Interactive stories</span>
						<span>Inclusive by default</span>
						<span>Prototype to production</span>
					{/each}
				</div>
			</div>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<div class="surface-card">
				<p class="text-xs uppercase tracking-[0.3em] text-primary/70">Experiments shipped</p>
				<p class="mt-2 text-3xl font-semibold text-base-content">{metrics.experimentsShipped}</p>
				<p class="mt-2 text-sm text-base-content/70">
					Launches, interactive demos, and product refreshes that made it to customers.
				</p>
			</div>
			<div class="surface-card">
				<p class="text-xs uppercase tracking-[0.3em] text-primary/70">Global collaborators</p>
				<p class="mt-2 text-3xl font-semibold text-base-content">{metrics.activeCollaborators}</p>
				<p class="mt-2 text-sm text-base-content/70">
					Teams we have plugged into across timezones, industries, and internal stacks.
				</p>
			</div>
			<div class="surface-card">
				<p class="text-xs uppercase tracking-[0.3em] text-primary/70">Sprint rhythm</p>
				<p class="mt-2 text-3xl font-semibold text-base-content">{metrics.averageSprintLength}</p>
				<p class="mt-2 text-sm text-base-content/70">
					Delivery cadence tuned for fast iteration without sacrificing craft.
				</p>
			</div>
			<div class="surface-card">
				<p class="text-xs uppercase tracking-[0.3em] text-primary/70">Response time</p>
				<p class="mt-2 text-3xl font-semibold text-base-content">{metrics.responseTime}</p>
				<p class="mt-2 text-sm text-base-content/70">
					Direct access to the studio—no layers of account management slowing you down.
				</p>
			</div>
		</div>
	</div>
</PageSection>

<PageSection id="manifesto" tone="contrast">
	<div class="grid gap-10 lg:grid-cols-[1.25fr_minmax(0,1fr)] lg:items-start">
		<div class="space-y-6">
			<span class="eyebrow text-secondary/80">Manifesto</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">
				We build digital flagships that feel inevitable.
			</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Elegant strategy, expressive design, and durable engineering arrive as one package. Every
				project ships with clarity, performance, and the cinematic polish users remember.
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

<PageSection id="signature-moves" tone="default">
	<div class="mx-auto max-w-3xl text-center space-y-3">
		<span class="eyebrow">Signature moves</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">
			Every build follows a cinematic arc—signal, intrigue, decision.
		</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			We choreograph story beats across scroll, interactions, and content to keep people engaged and
			confident.
		</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		{#each signatureMoves as move}
			<div class="surface-panel h-full border border-base-200/80">
				<p class="text-xs uppercase tracking-[0.3em] text-primary/80">{move.title}</p>
				<p class="mt-3 text-sm text-base-content/70">{move.description}</p>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection id="services" tone="subtle">
	<div class="mx-auto max-w-3xl text-center space-y-4">
		<span class="eyebrow">Service tracks</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Choose the lane that matches your momentum.</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			Each track blends research, design, and engineering so you can move from storyboard to shipped
			in weeks—not quarters.
		</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		{#each serviceTracks as track}
			<div class="surface-panel h-full border-primary/20 bg-gradient-to-br from-base-100 to-base-200/70">
				<h3 class="text-xl font-semibold text-base-content">{track.title}</h3>
				<p class="mt-3 text-sm text-base-content/70">{track.description}</p>
				<div class="mt-6 flex flex-wrap gap-2">
					{#each track.outcomes as outcome}
						<span
							class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
						>
							{outcome}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection id="featured-work">
	<div class="mx-auto max-w-3xl text-center space-y-4">
		<span class="eyebrow">Featured Work</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">A selection of recent flagship builds.</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			From launch campaigns to product refactors, each project is engineered to perform and feel
			memorable.
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

<PageSection id="toolkit" tone="subtle">
	<div class="grid gap-10 lg:grid-cols-[1.15fr_minmax(0,1fr)] lg:items-start">
		<div class="space-y-4">
			<span class="eyebrow text-secondary/80">Toolkit</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Design, build, and measure in one stack.</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				We ship with modern primitives—typed code, structured content, and instrumented experiments—so
				you keep learning after launch.
			</p>
			<div class="grid gap-4 sm:grid-cols-2">
				{#each capabilityToolkit as capability}
					<div class="surface-card h-full">
						<p class="text-xs uppercase tracking-[0.28em] text-primary/80">{capability.title}</p>
						<ul class="mt-3 space-y-2 text-sm text-base-content/70">
							{#each capability.items as item}
								<li class="flex items-start gap-2">
									<span class="mt-[6px] block h-1.5 w-1.5 rounded-full bg-primary/70" />
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div class="surface-panel border-primary/10 bg-gradient-to-br from-base-100 via-base-200/60 to-primary/5">
			<h3 class="text-xl font-semibold text-base-content">Engineered for the modern web</h3>
			<p class="mt-3 text-sm text-base-content/70">
				Opinionated stack choices keep performance high and maintenance low. We also adapt to your
				team’s existing toolkit when needed.
			</p>
			<div class="mt-4 grid gap-3 sm:grid-cols-2">
				{#each stackHighlights as stack}
					<div class="rounded-2xl border border-base-200/80 bg-base-100/80 p-4">
						<p class="text-sm font-semibold text-base-content">{stack.name}</p>
						<p class="mt-2 text-xs text-base-content/70">{stack.note}</p>
					</div>
				{/each}
			</div>
		</div>
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

<PageSection id="cadence" tone="contrast">
	<div class="grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center">
		<div class="space-y-4">
			<span class="eyebrow text-secondary/80">Operating cadence</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">
				We move with purpose—measured, transparent, and ready to ship.
			</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Expect thoughtful kickoff, tight feedback loops, and a calm hand at launch. We map every
				sprint so you know exactly what is landing.
			</p>
		</div>

		<div class="grid gap-4">
			{#each operatingCadence as item}
				<div class="rounded-2xl border border-base-200/80 bg-base-100/70 p-6 shadow-lg">
					<p class="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
						{item.title}
					</p>
					<p class="mt-3 text-sm text-base-content/70">{item.description}</p>
				</div>
			{/each}
		</div>
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

<style>
	.signal-marquee {
		min-width: 260px;
		max-width: 360px;
		overflow: hidden;
		border-radius: 9999px;
		border: 1px solid rgba(99, 102, 241, 0.2);
		background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(14, 165, 233, 0.12));
		box-shadow: 0 14px 35px -18px rgba(15, 23, 42, 0.35);
		color: inherit;
	}

	.marquee-track {
		display: inline-flex;
		align-items: center;
		gap: 2rem;
		padding: 0.85rem 1.5rem;
		animation: marquee-slide 18s linear infinite;
		min-width: max-content;
	}

	.signal-marquee span {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		opacity: 0.7;
	}

	@keyframes marquee-slide {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-50%);
		}
	}
</style>
