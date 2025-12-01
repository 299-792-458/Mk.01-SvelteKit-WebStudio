<script lang="ts">
	import { onMount } from 'svelte';
	import { appConfig } from '$config/app.config';
	import HeroSequencer from '$components/experience/HeroSequencer.svelte';
	import NeonGridHero from '$lib/components/3d/NeonGridHero.svelte';
	import InteractiveTimeline from '$lib/components/experience/InteractiveTimeline.svelte';
	import ProjectCarousel from '$lib/components/experience/ProjectCarousel.svelte';
	import LabPlayground from '$lib/components/experience/LabPlayground.svelte';
	import ReactiveContact from '$lib/components/experience/ReactiveContact.svelte';
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import Reveal from '$lib/components/motion/Reveal.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const identity = data.identity ?? appConfig.identity;
	const metrics = data.metrics ?? appConfig.metrics;
	let liveSignalIndex = 0;
	let liveSignalTimer: ReturnType<typeof setInterval> | null = null;

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

	const immersionSlices = [
		{
			badge: 'Launch',
			title: 'Dynamic hero systems',
			description: 'Modular hero compositions with motion-safe defaults and A/B-ready variants.',
			accent: 'linear-gradient(135deg, rgba(99,102,241,0.28), rgba(244,114,182,0.18))'
		},
		{
			badge: 'Storytelling',
			title: 'Guided scrollytelling',
			description: 'Narrative beats that pair copy, media, and micro-interactions into a clear arc.',
			accent: 'linear-gradient(135deg, rgba(14,165,233,0.26), rgba(59,130,246,0.24))'
		},
		{
			badge: 'Product',
			title: 'Interactive demos',
			description: 'Live-feel product tours that stay performant and accessible across devices.',
			accent: 'linear-gradient(135deg, rgba(74,222,128,0.22), rgba(34,197,94,0.22))'
		},
		{
			badge: 'Labs',
			title: 'Speculative experiments',
			description: 'Playable prototypes, WebGL stingers, and creative-tech spikes for labs and pitches.',
			accent: 'linear-gradient(135deg, rgba(248,113,113,0.22), rgba(234,179,8,0.2))'
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

	const industryFocus = [
		{
			title: 'AI & productivity',
			description: 'Product tours, onboarding, and launch stories for AI copilots and tools.'
		},
		{
			title: 'Developer platforms',
			description: 'Docs-inspired storytelling, interactive demos, and componentized UI kits.'
		},
		{
			title: 'Fintech & ops',
			description: 'High-trust flows, data visual narratives, and multi-locale readiness.'
		},
		{
			title: 'Consumer & culture',
			description: 'Immersive drops, editorial vibes, and commerce-friendly performance.'
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

	const deliveryBeats = [
		{
			title: 'Signal',
			description: 'Research spikes, competitive sweeps, and storyframes to align on what matters most.'
		},
		{
			title: 'Shape',
			description: 'Prototype, art direction, and systemization. Tight loops with stakeholders every few days.'
		},
		{
			title: 'Ship',
			description: 'Production builds, QA, and launch checklists. Experiments instrumented for fast learnings.'
		},
		{
			title: 'Evolve',
			description: 'Post-launch tweaks, localization, performance passes, and ongoing optimization.'
		}
	];

	const credibility = [
		'Launch-grade motion',
		'WCAG-conscious builds',
		'Multi-locale ready',
		'Edge + static hosting',
		'Analytics + SEO wired',
		'Design-to-code handoff'
	];

	let openFaq = -1;

	const quickActions = [
		{
			title: 'Book a chemistry call',
			description: '30-minute fit check to map goals, timeline, and the first sprint.',
			href: 'mailto:studio@mk1.dev?subject=Chemistry%20Call%20with%20Mk01',
			style: 'primary'
		},
		{
			title: 'Download the studio deck',
			description: 'Capabilities, process, and sample outputs in one PDF.',
			href: '/docs/mk01-studio-deck.pdf',
			style: 'secondary'
		},
		{
			title: 'Request a prototype sprint',
			description: 'Two-week design-engineering spike to de-risk your idea.',
			href: 'mailto:studio@mk1.dev?subject=Prototype%20Sprint%20Request',
			style: 'outline'
		}
	];

	const faqItems = [
		{
			question: 'Do you work with existing design systems?',
			answer:
				'Yes. We audit tokens, component coverage, and accessibility, then build within your system or extend it with new primitives.'
		},
		{
			question: 'Can you join mid-sprint?',
			answer:
				'We regularly embed into active squads. We’ll align on rituals, repos, and approvals, then start shipping in the first week.'
		},
		{
			question: 'What does “inclusive by default” mean?',
			answer:
				'We bake WCAG, localization hooks, and performance budgets into the plan. Checklists and automated checks gate our releases.'
		},
		{
			question: 'How do handoffs work?',
			answer:
				'Everything ships in code: repos, component libraries, and documentation. If you need Figma + code parity, we do that too.'
		}
	];

	const liveSignals = [
		'Edge-ready builds',
		'Motion with performance budgets',
		'Design + engineering in one lane',
		'Localization hooks baked in',
		'Analytics + SEO from day one',
		'Ship fast without chaos'
	];

	const microFeatures = [
		{
			title: 'Adaptive theming',
			description: 'Light/dark/aurora themes tuned for contrast and brand accenting.'
		},
		{
			title: 'Structured content',
			description: 'Content-layered pages so marketing teams can update without dev help.'
		},
		{
			title: 'Performance-first motion',
			description: 'GPU-friendly animations and scroll choreography that respect FPS.'
		},
		{
			title: 'Zero-downtime deploys',
			description: 'Preview URLs for every PR, rollout plans for every launch.'
		}
	];

	onMount(() => {
		liveSignalTimer = setInterval(() => {
			liveSignalIndex = (liveSignalIndex + 1) % liveSignals.length;
		}, 3200);

		return () => {
			if (liveSignalTimer !== null) {
				clearInterval(liveSignalTimer);
				liveSignalTimer = null;
			}
		};
	});

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

	const timelineBeats = [
		{ year: '2015', title: 'First shader toy', detail: 'Built GLSL loops for music visuals in small clubs.' },
		{
			year: '2018',
			title: 'Systems obsessed',
			detail: 'Led design systems rollouts and motion specs for multi-product teams.'
		},
		{
			year: '2021',
			title: '3D on the web',
			detail: 'Shipped WebGL-led campaigns with realtime story-driven scroll.'
		},
		{
			year: '2024',
			title: 'Mk.01 studio',
			detail: 'Hybrid launch+lab practice crafting cinematic, performant experiences.'
		}
	];

</script>

<div class="hero-wrap">
	<NeonGridHero />
	<div class="hero-overlay">
		<Reveal type="fade" delay={0.15}>
			<div class="hero-text">
				<p class="eyebrow text-secondary/80">Engineer / Creator / System Architect</p>
				<h1 class="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
					Hardcore web lab for neon-grade launches.
				</h1>
				<p class="max-w-2xl text-lg text-base-content/70">
					Cybernetic motion, shader-driven surfaces, and product-grade craft in one SvelteKit stack. Turn
					your story into an interactive spectacle.
				</p>
				<div class="flex flex-wrap gap-3">
					<a class="btn btn-primary btn-lg" href="#featured-work">See works</a>
					<a class="btn btn-ghost btn-lg" href="#contact">Contact</a>
				</div>
			</div>
		</Reveal>
	</div>
</div>

<Reveal type="fade" delay={0.2}>
	<HeroSequencer {identity} {metrics} showcases={data.showcases ?? []} />
</Reveal>

<Reveal type="slide" delay={0.4}>
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
</Reveal>

<Reveal delay={0.2}>
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
					class="rounded-2xl border border-base-200/80 bg-base-100/60 p-6 shadow-lg backdrop-blur transition-transform hover:scale-[1.02]"
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
</Reveal>

<Reveal type="slide" delay={0.2}>
<PageSection id="about" tone="contrast">
	<div class="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-start">
		<div class="space-y-4">
			<span class="eyebrow text-primary/80">Identity</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">
				An interactive chronicle you can scroll, drag, and orbit.
			</h2>
			<p class="max-w-2xl text-base text-base-content/70 sm:text-lg">
				Instead of static copy, your story lives inside a kinetic timeline. Hover, drag, and scrub to
				reveal each layer—principles, pivots, and experiments.
			</p>
		</div>
		<InteractiveTimeline items={timelineBeats} />
	</div>
</PageSection>
</Reveal>

<Reveal type="slide" delay={0.2}>
<PageSection id="signature" tone="subtle">
	<div class="grid gap-10 lg:grid-cols-[1.15fr_minmax(0,1fr)] lg:items-start">
		<div class="space-y-6">
			<span class="eyebrow text-secondary/80">Signature moves</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">
				Plays we run to make a product feel inevitable.
			</h2>
			<p class="max-w-2xl text-base text-base-content/70 sm:text-lg">
				Each move blends concept, craft, and code so launches land with story and systems in sync.
			</p>
		</div>

		<div class="grid gap-4">
			{#each signatureMoves as move}
				<div class="surface-card flex flex-col gap-3">
					<h3 class="text-xl font-semibold">{move.title}</h3>
					<p class="text-sm text-base-content/70">{move.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
		{#each immersionSlices as slice}
			<div
				class="relative overflow-hidden rounded-2xl border border-base-200/80 bg-base-100/80 p-6 shadow-lg backdrop-blur"
				style={`background-image:${slice.accent};`}
			>
				<div class="absolute inset-0 bg-gradient-to-br from-white/85 via-white/55 to-transparent"></div>
				<div class="relative space-y-3">
					<span class="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
						{slice.badge}
					</span>
					<h3 class="text-lg font-semibold text-base-content">{slice.title}</h3>
					<p class="text-sm text-base-content/70">{slice.description}</p>
				</div>
			</div>
		{/each}
	</div>
</PageSection>
</Reveal>

<Reveal type="slide" delay={0.15}>
<PageSection id="capabilities">
	<div class="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-start">
		<div class="space-y-4">
			<span class="eyebrow text-primary/80">Capability toolkit</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Strategy to ship, covered end-to-end.</h2>
			<p class="max-w-2xl text-base text-base-content/70 sm:text-lg">
				Design language, technical delivery, and growth analytics live inside one studio lane. You get a
				portfolio-ready story and a production-ready build at once.
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-3">
			{#each capabilityToolkit as pillar}
				<div class="surface-card h-full space-y-3">
					<h3 class="text-lg font-semibold text-base-content">{pillar.title}</h3>
					<ul class="space-y-2 text-sm text-base-content/70">
						{#each pillar.items as item}
							<li class="flex items-start gap-2">
								<span class="mt-1 inline-flex h-1.5 w-4 rounded-full bg-primary/70"></span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-12 grid gap-4 lg:grid-cols-2">
		{#each serviceTracks as track}
			<div class="surface-panel h-full bg-base-100/80">
				<div class="flex flex-col gap-3">
					<p class="text-xs uppercase tracking-[0.3em] text-secondary/80">{track.title}</p>
					<h3 class="text-2xl font-semibold text-base-content">{track.description}</h3>
					<ul class="mt-2 grid gap-2 sm:grid-cols-2">
						{#each track.outcomes as outcome}
							<li class="rounded-lg border border-base-200/70 bg-base-100/80 px-3 py-2 text-sm text-base-content/70">
								{outcome}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</PageSection>
</Reveal>

<Reveal type="fade" delay={0.15}>
<PageSection id="stack" tone="contrast">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:items-start">
		<div class="space-y-4">
			<span class="eyebrow text-secondary/80">Stack & focus</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Built to ship across industries.</h2>
			<p class="max-w-2xl text-base text-base-content/70 sm:text-lg">
				Whether you are a founder, PM, recruiter, or creative partner, the stack is tuned for fast
				iteration, strong storytelling, and portfolio-grade polish.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each industryFocus as sector}
					<span class="rounded-full bg-base-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
						{sector.title}
					</span>
				{/each}
			</div>
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			{#each stackHighlights as stack}
				<div class="surface-card h-full">
					<h3 class="text-lg font-semibold text-base-content">{stack.name}</h3>
					<p class="mt-2 text-sm text-base-content/70">{stack.note}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
		<div class="space-y-4">
			<span class="eyebrow text-primary/80">Operating cadence</span>
			<div class="grid gap-3">
				{#each operatingCadence as cadence}
					<div class="rounded-2xl border border-base-200/80 bg-base-100/70 p-4 shadow-md backdrop-blur">
						<h3 class="text-base font-semibold text-base-content">{cadence.title}</h3>
						<p class="mt-1 text-sm text-base-content/70">{cadence.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="space-y-4">
			<span class="eyebrow text-secondary/80">Delivery beats</span>
			<div class="grid gap-3 sm:grid-cols-2">
				{#each deliveryBeats as beat}
					<div class="surface-card h-full bg-base-100/85">
						<h3 class="text-lg font-semibold text-base-content">{beat.title}</h3>
						<p class="mt-2 text-sm text-base-content/70">{beat.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</PageSection>
</Reveal>

<Reveal type="fade" delay={0.2}>
<PageSection id="signals" tone="subtle">
	<div class="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center">
		<div class="space-y-4">
			<span class="eyebrow text-primary/80">Live signals</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Proof points you can feel.</h2>
			<p class="max-w-2xl text-base text-base-content/70 sm:text-lg">
				Runs as portfolio-grade demos or production builds. Motion stays performant, accessibility stays
				baked in, and analytics are wired from the start.
			</p>
			<div class="signal-reel">
				<div class="reel-track">
					{#each liveSignals as signal, index}
						<div class={`reel-item ${index === liveSignalIndex ? 'active' : ''}`}>
							<span class="spark" aria-hidden="true"></span>
							<span>{signal}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each microFeatures as feature}
				<div class="micro-card">
					<div class="micro-glow" aria-hidden="true"></div>
					<div class="relative space-y-2">
						<p class="text-xs uppercase tracking-[0.28em] text-secondary/80">{feature.title}</p>
						<p class="text-sm text-base-content/70">{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</PageSection>
</Reveal>

<Reveal type="slide" delay={0.25}>
<PageSection id="collaboration">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_1fr] lg:items-start">
		<div class="space-y-4">
			<span class="eyebrow text-secondary/80">Collaboration modes</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Pick the lane that fits your goals.</h2>
			<p class="max-w-2xl text-base text-base-content/70 sm:text-lg">
				Embedded partner for product teams, launch studio for marketing pushes, or exploration lab for
				portfolio-ready experiments.
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			{#each collaborationModes as mode}
				<div class="surface-card h-full space-y-3">
					<div class="flex items-center justify-between gap-2">
						<h3 class="text-xl font-semibold text-base-content">{mode.title}</h3>
						<span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
							{mode.deliverables}
						</span>
					</div>
					<p class="text-sm text-base-content/70">{mode.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-12 grid gap-4 lg:grid-cols-2">
		{#each faqItems as item, index}
			<button
				type="button"
				class="faq-row text-left"
				on:click={() => (openFaq = openFaq === index ? -1 : index)}
				aria-expanded={openFaq === index}
			>
				<div class="flex items-center justify-between gap-3">
					<span class="text-base font-semibold text-base-content">{item.question}</span>
					<span class="faq-icon" aria-hidden="true">{openFaq === index ? '–' : '+'}</span>
				</div>
				{#if openFaq === index}
					<p class="faq-answer">{item.answer}</p>
				{/if}
			</button>
		{/each}
	</div>
</PageSection>
</Reveal>

<Reveal type="slide" delay={0.2}>
<PageSection id="featured-work">
	<div class="mx-auto max-w-3xl text-center space-y-4 mb-12">
		<span class="eyebrow">Featured Work</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">A selection of recent flagship builds.</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			From launch campaigns to product refactors, each project is engineered to perform and feel
			memorable.
		</p>
	</div>

	<ProjectCarousel projects={data.projects} />

	<div class="mt-12 text-center">
		<a href="/work" class="btn btn-primary btn-lg">View all work</a>
	</div>
</PageSection>
</Reveal>

<Reveal type="fade" delay={0.15}>
<PageSection id="lab" tone="contrast">
	<div class="space-y-4">
		<span class="eyebrow text-secondary/80">Playground / Tech lab</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Tweak parameters, watch the canvas morph.</h2>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			GLSL-powered sandbox for shader demos, particle fields, and audio-reactive visuals. Use it to show
			engineering rigor and creative range in one viewport.
		</p>
	</div>
	<LabPlayground />
</PageSection>
</Reveal>

<Reveal type="fade" delay={0.15}>
<PageSection id="writing" tone="subtle">
	<div class="space-y-3">
		<span class="eyebrow text-primary/80">Writing / Log</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Dynamic journal with glitch-backed cards.</h2>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			Even before content lands, the layout performs—hover to warp the noise, filter to reshuffle the
			grid, scroll to pin headlines. (Feeds real posts when ready.)
		</p>
	</div>
	<div class="grid gap-4 md:grid-cols-3 auto-rows-[200px] writing-grid">
		{#each liveSignals as signal, index}
			<div class="writing-card">
				<div class="noise" style={`--i:${index};`} aria-hidden="true"></div>
				<p class="text-sm uppercase tracking-[0.24em] text-secondary/80">Signal</p>
				<h3 class="text-xl font-semibold text-base-content">{signal}</h3>
				<p class="text-sm text-base-content/70">Hover to disrupt the grid. Replace with posts anytime.</p>
			</div>
		{/each}
	</div>
</PageSection>
</Reveal>

<Reveal type="slide" delay={0.2}>
<PageSection id="contact" tone="contrast" padding="compact">
	<div class="grid gap-6 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center">
		<div class="space-y-3">
			<span class="eyebrow text-secondary/80">Contact</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Input sparks motion. Submission swaps scenes.</h2>
			<p class="text-base text-base-content/70 sm:text-lg">
				Every field emits light; the submit animates the panel. Use this for recruiter outreach, project
				kickoffs, or lab collabs.
			</p>
		</div>
		<ReactiveContact />
	</div>
</PageSection>
</Reveal>

<Reveal delay={0.2}>
<PageSection id="actions" tone="contrast" padding="compact">
	<div class="surface-panel mx-auto max-w-5xl bg-base-100/80">
		<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
			<div class="space-y-2">
				<span class="eyebrow text-secondary/80">Start a move</span>
				<h2 class="text-2xl font-semibold text-base-content sm:text-3xl">
					Pick the next step—we’ll respond within a day.
				</h2>
				<p class="text-sm text-base-content/70 sm:text-base">
					Whether you need a chemistry call, a prototype sprint, or a deck to share internally, we
					have a fast path.
				</p>
			</div>

			<div class="grid w-full gap-3 sm:grid-cols-2 lg:w-auto">
				{#each quickActions as action}
					<a
						href={action.href}
						class={`action-tile ${action.style}`}
					>
						<p class="text-sm font-semibold">{action.title}</p>
						<p class="text-xs text-base-content/70">{action.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
</PageSection>
</Reveal>

<style>
	.hero-wrap {
		position: relative;
		min-height: 90vh;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.hero-overlay {
		position: relative;
		z-index: 1;
		max-width: 1200px;
		padding: 2rem;
	}

	.hero-text {
		display: grid;
		gap: 1rem;
		background: linear-gradient(135deg, rgba(6, 8, 16, 0.72), rgba(7, 7, 14, 0.9));
		border: 1px solid rgba(124, 247, 255, 0.18);
		border-radius: 1.2rem;
		padding: 1.6rem;
		box-shadow:
			0 30px 80px rgba(0, 0, 0, 0.45),
			inset 0 0 0 1px rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(10px);
	}

	.writing-grid {
		position: relative;
		perspective: 1200px;
	}

	.writing-card {
		position: relative;
		padding: 1rem;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(8, 10, 18, 0.9);
		overflow: hidden;
		transition:
			transform 220ms ease,
			border-color 220ms ease,
			box-shadow 220ms ease;
	}

	.writing-card:hover {
		transform: rotateX(4deg) rotateY(-4deg) translateY(-4px);
		border-color: rgba(124, 247, 255, 0.3);
		box-shadow:
			0 24px 64px rgba(0, 0, 0, 0.45),
			0 12px 32px rgba(124, 247, 255, 0.18);
	}

	.writing-card .noise {
		position: absolute;
		inset: -30%;
		background: repeating-linear-gradient(
				45deg,
				rgba(124, 247, 255, 0.15),
				rgba(124, 247, 255, 0.15) 2px,
				transparent 3px,
				transparent 6px
			),
			repeating-linear-gradient(
				-35deg,
				rgba(255, 70, 201, 0.14),
				rgba(255, 70, 201, 0.14) 2px,
				transparent 4px,
				transparent 7px
			);
		filter: blur(10px);
		opacity: 0.12;
		transform: rotate(calc(var(--i) * 5deg));
		transition: transform 240ms ease, opacity 240ms ease;
	}

	.writing-card:hover .noise {
		transform: scale(1.1) rotate(calc(var(--i) * -6deg));
		opacity: 0.18;
	}

    /* ... existing styles ... */
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

	.signal-reel {
		position: relative;
		overflow: hidden;
		border-radius: 1.5rem;
		border: 1px solid rgba(15, 23, 42, 0.08);
		background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(14, 165, 233, 0.08));
		box-shadow: 0 14px 36px -24px rgba(15, 23, 42, 0.5);
	}

	.reel-track {
		display: grid;
		grid-auto-rows: 1fr;
		padding: 1rem 1.2rem;
	}

	.reel-item {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 0.6rem;
		border-radius: 1rem;
		color: rgba(15, 23, 42, 0.65);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition:
			transform 260ms ease,
			color 260ms ease,
			background 260ms ease,
			box-shadow 260ms ease;
	}

	.reel-item.active {
		background: rgba(255, 255, 255, 0.9);
		color: rgba(15, 23, 42, 0.92);
		transform: translateX(4px);
		box-shadow: 0 12px 30px -20px rgba(15, 23, 42, 0.4);
	}

	.spark {
		width: 0.65rem;
		height: 0.65rem;
		border-radius: 999px;
		background: linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(14, 165, 233, 0.9));
		box-shadow:
			0 0 0 6px rgba(99, 102, 241, 0.15),
			0 0 0 12px rgba(14, 165, 233, 0.08);
		animation: pulse-spark 2.4s ease-in-out infinite;
	}

	@keyframes pulse-spark {
		0%,
		100% {
			transform: scale(1);
			box-shadow:
				0 0 0 6px rgba(99, 102, 241, 0.18),
				0 0 0 12px rgba(14, 165, 233, 0.12);
		}

		50% {
			transform: scale(1.08);
			box-shadow:
				0 0 0 9px rgba(99, 102, 241, 0.24),
				0 0 0 16px rgba(14, 165, 233, 0.18);
		}
	}

	.micro-card {
		position: relative;
		overflow: hidden;
		border-radius: 1.1rem;
		padding: 1rem;
		border: 1px solid rgba(15, 23, 42, 0.08);
		background: rgba(255, 255, 255, 0.86);
		box-shadow: 0 12px 30px -22px rgba(15, 23, 42, 0.4);
		transition:
			transform 200ms ease,
			box-shadow 200ms ease,
			border-color 200ms ease;
	}

	.micro-card:hover,
	.micro-card:focus-within {
		transform: translateY(-3px);
		border-color: rgba(99, 102, 241, 0.25);
		box-shadow: 0 16px 38px -22px rgba(15, 23, 42, 0.5);
	}

	.micro-glow {
		position: absolute;
		inset: -20% 5% 60% 5%;
		background: radial-gradient(circle at center, rgba(99, 102, 241, 0.2), transparent 55%);
		filter: blur(18px);
		opacity: 0.9;
	}

	.action-tile {
		display: block;
		padding: 0.9rem 1rem;
		border-radius: 1rem;
		border: 1px solid rgba(15, 23, 42, 0.08);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(226, 232, 240, 0.92));
		box-shadow: 0 12px 32px -24px rgba(15, 23, 42, 0.5);
		text-align: left;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease,
			border-color 180ms ease;
	}

	.action-tile.primary {
		background: linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(14, 165, 233, 0.16));
		border-color: rgba(99, 102, 241, 0.3);
	}

	.action-tile.secondary {
		background: linear-gradient(135deg, rgba(14, 165, 233, 0.14), rgba(56, 189, 248, 0.12));
		border-color: rgba(56, 189, 248, 0.24);
	}

	.action-tile.outline {
		background: rgba(255, 255, 255, 0.78);
		border-color: rgba(15, 23, 42, 0.16);
	}

	.action-tile:hover,
	.action-tile:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 16px 36px -22px rgba(15, 23, 42, 0.55);
		border-color: rgba(99, 102, 241, 0.35);
	}

	.faq-row {
		width: 100%;
		text-align: left;
		padding: 1rem 1.1rem;
		border-radius: 1rem;
		border: 1px solid rgba(15, 23, 42, 0.08);
		background: rgba(255, 255, 255, 0.82);
		box-shadow: 0 12px 32px -24px rgba(15, 23, 42, 0.3);
		transition:
			transform 160ms ease,
			box-shadow 160ms ease,
			border-color 160ms ease;
	}

	.faq-row:hover,
	.faq-row:focus-visible {
		transform: translateY(-2px);
		box-shadow: 0 16px 36px -22px rgba(15, 23, 42, 0.4);
		border-color: rgba(99, 102, 241, 0.28);
	}

	.faq-answer {
		margin-top: 0.5rem;
		color: rgba(15, 23, 42, 0.72);
		font-size: 0.95rem;
	}

	.faq-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 999px;
		background: rgba(99, 102, 241, 0.12);
		color: rgba(15, 23, 42, 0.8);
		font-weight: 700;
	}
</style>
