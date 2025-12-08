<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';

	const serviceLines = [
		{
			title: 'Discovery & positioning',
			lede: 'Strategy sprints that align outcomes, audiences, and measurement before a single pixel moves.',
			items: [
				'Stakeholder labs & co-creation',
				'Product narrative mapping',
				'Content architecture & IA',
				'Opportunity prototypes'
			]
		},
		{
			title: 'Design systems & product',
			lede: 'Systemic design across web and product surfaces—tokens, components, accessibility, and motion.',
			items: [
				'Design system blueprints',
				'Token architecture & theming',
				'Motion language & specs',
				'Accessibility audits'
			]
		},
		{
			title: 'Engineering & WebGL',
			lede: 'SvelteKit builds with WebGL storytelling, edge deployments, and performance tuned for launch.',
			items: ['SvelteKit + Vite delivery', 'WebGL & shader development', 'Edge/CDN pipelines', 'QA & automation']
		},
		{
			title: 'Launch & enablement',
			lede: 'Runway for go-live: content choreography, playbooks, and teams trained to operate the system.',
			items: ['Content & SEO choreography', 'Motion/interaction handoff', 'Launch playbooks', 'Team enablement']
		}
	];

	const engagementModels = [
		{
			name: 'Sprint',
			description: '2–4 weeks of concentrated discovery and prototyping to define direction and validate risk.',
			bestFor: ['Early-stage teams', 'Positioning a new product', 'Validating motion or WebGL concepts']
		},
		{
			name: 'Embedded squad',
			description:
				'Cross-functional pod (strategy, design, engineering) shipping end-to-end experiences on a roadmap.',
			bestFor: ['Rebuilds & rebrands', 'Design system rollouts', 'Complex product launches']
		},
		{
			name: 'Retainer',
			description: 'Continuous evolution, experiments, and governance with monthly capacity you can depend on.',
			bestFor: ['Ongoing growth', 'Labs & R&D tracks', 'Governance & QA rituals']
		}
	];
</script>

<PageSection id="services-hero" tone="contrast" padding="xl">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Services</span>
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			From zero to launch: strategy, design systems, WebGL, and engineering.
		</h1>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			Choose the engagement model that fits your stage. We choreograph motion, content, and code to
			ship cinematic experiences with rigor.
		</p>
		<div class="flex flex-wrap gap-3">
			<a href="/contact" class="btn btn-primary btn-lg">Start a project</a>
			<a href="/capabilities" class="btn btn-outline btn-lg">See capability matrix</a>
		</div>
	</div>
</PageSection>

<PageSection id="service-lines">
	<div class="grid gap-6 md:grid-cols-2">
		{#each serviceLines as line}
			<div class="surface-card h-full">
				<div class="flex items-start justify-between gap-4">
					<div class="space-y-2">
						<h2 class="text-xl font-semibold text-base-content">{line.title}</h2>
						<p class="text-sm text-base-content/70">{line.lede}</p>
					</div>
					<span class="rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary/80">
						Core
					</span>
				</div>
				<ul class="mt-4 space-y-2 text-sm text-base-content/70">
					{#each line.items as item}
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

<PageSection id="engagement-models" tone="subtle">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Engagement models</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Pick the pace. We calibrate the team.</h2>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each engagementModels as model}
			<div class="surface-panel h-full bg-base-100/80">
				<h3 class="text-xl font-semibold text-base-content">{model.name}</h3>
				<p class="mt-2 text-sm text-base-content/70">{model.description}</p>
				<div class="mt-4 space-y-2 text-xs uppercase tracking-[0.24em] text-base-content/60">
					{#each model.bestFor as item}
						<div class="rounded-full bg-base-200/70 px-3 py-2 text-left text-base-content/70">
							{item}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection id="services-cta" padding="compact">
	<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center">
		<h2 class="text-2xl font-semibold sm:text-3xl">Tell us what you’re building.</h2>
		<p class="mt-3 text-sm text-base-content/70 sm:text-base">
			Send a short brief or call for pitch. We’ll respond with a tailored squad and a clear path to
			launch.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3">
			<a href="/contact" class="btn btn-primary btn-sm sm:btn-md">Contact the studio</a>
			<a href="/work" class="btn btn-ghost btn-sm sm:btn-md">View recent work</a>
		</div>
	</div>
</PageSection>
