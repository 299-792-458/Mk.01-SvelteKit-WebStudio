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
	import '../styles/home.css';
	import '../styles/home-extended.css';

	import type { PageData } from './$types';

	export let data: PageData;

	const identity = data.identity ?? appConfig.identity;
	const metrics = data.metrics ?? appConfig.metrics;
	let liveSignalIndex = 0;
	let liveSignalTimer: ReturnType<typeof setInterval> | null = null;

	const heroModes = [
		{
			badge: 'Portfolio',
			title: 'Flagship portfolio OS',
			description: 'Case study sequences, interactive timelines, and a hiring-friendly surface that feels alive.'
		},
		{
			badge: 'Launch',
			title: 'Campaign theater',
			description: 'Programmatic hero states, choreographed scroll, and cinematic CTA hand-offs for launches.'
		},
		{
			badge: 'Product',
			title: 'Product-grade demo',
			description: 'Live-feel walkthroughs, analytics wiring, and accessibility baked in so it is ready to ship.'
		},
		{
			badge: 'Lab',
			title: 'Future lab',
			description: 'Shader playgrounds, prototypes, and speculative decks to show creative and technical range.'
		}
	];

	const heroMetrics = [
		{
			label: 'Experiments shipped',
			value: metrics.experimentsShipped,
			note: 'Launches, refactors, and lab drops that made it to people.'
		},
		{
			label: 'Partners plugged in',
			value: metrics.activeCollaborators,
			note: 'Teams across timezones and industries without friction.'
		},
		{
			label: 'Sprint rhythm',
			value: metrics.averageSprintLength,
			note: 'Strategy → prototype → ship on a predictable tempo.'
		},
		{
			label: 'Response window',
			value: metrics.responseTime,
			note: 'Direct line to the builder—no layers or lag.'
		}
	];

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

	const personaViews = [
		{
			name: 'Founder / PM',
			summary: 'Sees roadmap impact, delivery cadence, and go-to-market readiness.',
			points: [
				'Launch narratives mapped to OKRs',
				'Feature tours with analytics wiring',
				'Experiments and rollout plans'
			],
			signal: 'Time-to-first-preview: 3d'
		},
		{
			name: 'Recruiter / Hiring',
			summary: 'Evaluates depth: systems, accessibility, and production habits.',
			points: ['WCAG + perf gates in CI', 'Design-token → code parity', 'Audit trail and handoff docs'],
			signal: 'Vit. p95 above target'
		},
		{
			name: 'Creative / Brand',
			summary: 'Cares about spectacle without sacrificing clarity or inclusivity.',
			points: ['Shader-backed hero states', 'Motion-safe choreography', 'Localized storytelling paths'],
			signal: 'Motion budget locked'
		}
	];

	const allyBadges = [
		'Apple-grade polish',
		'Google-scale resilience',
		'Stripe-like clarity',
		'Figma-ready tokens',
		'Cloudflare edge',
		'Netlify instant previews',
		'Playwright visual sweeps',
		'Analytics wired',
		'Security headers'
	];

	const perfHud = [
		{ label: 'LCP p75', value: '1.9s', note: 'Streaming hero + preconnect' },
		{ label: 'CLS p75', value: '0.02', note: 'Reserved media & fonts' },
		{ label: 'TTI p75', value: '1.2s', note: 'Islands + lazy hydration' },
		{ label: 'Uptime', value: '99.98%', note: 'Edge + static fallbacks' }
	];

	const scrollMoments = [
		{
			title: 'Scroll-synced cinematics',
			description:
				'Pinned canvases with parallax strata, shader-driven overlays, and text that syncs to scroll progress.',
			metric: '90fps',
			note: 'GPU-budgeted motion on M-series and Intel alike.'
		},
		{
			title: 'Interaction-grade product demo',
			description: 'Live input capture, state replay, and keyboard-safe focus choreography.',
			metric: '0.2s',
			note: 'Input-to-feedback latency on demo flows.'
		},
		{
			title: 'Edge-streamed media',
			description: 'Adaptive streams, prefetch on intent, and intelligent idle tasks.',
			metric: '25ms',
			note: 'Hops to the closest POP using edge routing.'
		},
		{
			title: 'Resilient analytics',
			description: 'Client + server events with replays, consent-aware pipelines, and anti-adblock fallbacks.',
			metric: '4 nines',
			note: 'Uptime for telemetry collection.'
		},
		{
			title: 'Enterprise-proofing',
			description: 'a11y sweeps, i18n stubs, and perf budgets enforced before sign-off.',
			metric: 'WCAG 2.1',
			note: 'AA+ targets baked into CI gates.'
		}
	];

	const systemsProof = [
		{
			title: 'Motion budgeter',
			description: 'Frame-timing guardrails inspired by Apple HIG and Google M3 motion curves.',
			tag: 'FPS aware'
		},
		{
			title: 'Design tokens → code',
			description: 'Source of truth flows to Tailwind/daisyUI plus native apps through openfmt exports.',
			tag: 'Multi-platform'
		},
		{
			title: 'Edge + ISR ready',
			description: 'Netlify/Cloudflare adapters with streaming SSR and static fallbacks.',
			tag: 'Hybrid deploys'
		},
		{
			title: 'Observability baked in',
			description: 'Tracing hooks, Web Vitals logging, and privacy-safe analytics shipping by default.',
			tag: 'Telemetry'
		},
		{
			title: 'Security posture',
			description: 'CSP, strict headers, dependency audits, and secrets hygiene from day one.',
			tag: 'Enterprise'
		},
		{
			title: 'Localization spine',
			description: 'Locale routing, RTL rehearsals, and copy pipelines ready for translators.',
			tag: 'Global-first'
		}
	];

	const modeDeck = [
		{
			name: 'Launch',
			title: 'Campaign OS',
			description: 'Programmable hero states, CTA hand-offs, and instrumented experiments.',
			bullets: ['Edge-streamed hero', 'A/B scaffolding', 'Narrative chapters'],
			metric: 'Preview in 48h'
		},
		{
			name: 'Product',
			title: 'Product-grade UX',
			description: 'Interaction-safe flows with analytics, auth hooks, and motion constraints.',
			bullets: ['Accessibility rehearsed', 'Latency budgeted', 'Design tokens mapped'],
			metric: 'p75 TTI 1.2s'
		},
		{
			name: 'Lab',
			title: 'Speculative R&D',
			description: 'Shader-backed canvases, WebGL stingers, and concept decks ready to share.',
			bullets: ['Shader playgrounds', 'Realtime inputs', 'Story beats'],
			metric: 'Prototype in 1w'
		}
	];

	const integrationLogos = [
		'Cloudflare edge',
		'Netlify previews',
		'SvelteKit + Vite',
		'Playwright visual sweeps',
		'Contentlayer',
		'Tailwind + daisyUI',
		'Lenis smooth',
		'CSP + SRI',
		'Analytics wired'
	];

	const pipelineStages = [
		{
			title: 'Design tokens → code',
			description: 'Source of truth flows to Tailwind/daisyUI and native exports.',
			status: 'synced'
		},
		{
			title: 'CI quality gates',
			description: 'Lighthouse, a11y, i18n, and visual diff sweeps on every PR.',
			status: 'running'
		},
		{
			title: 'Edge deploy',
			description: 'Streaming SSR + static fallbacks on Cloudflare/Netlify.',
			status: 'green'
		},
		{
			title: 'Observability',
			description: 'Web Vitals, tracing hooks, and consent-aware analytics.',
			status: 'recording'
		}
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

	const spectraLoops = [
		{
			title: 'Helix scroll',
			summary: 'Pinned depth layers, parallax strata, and bloom-safe highlights.',
			metric: '1:1 scroll'
		},
		{
			title: 'Chroma cascade',
			summary: 'Chromatic beams stitched to scroll progress with easing governors.',
			metric: '90fps cap'
		},
		{
			title: 'Iso-grid deck',
			summary: 'Isometric tiles rotating on hover with GPU-friendly shadows.',
			metric: 'GPU safe'
		},
		{
			title: 'Signal synth',
			summary: 'Audio-reactive bars paired with content reveals and focus guards.',
			metric: 'Input ready'
		}
	];

	const burstStats = [
		{ label: 'Threads', value: '128', note: 'Web workers + OffscreenCanvas for motion safety.' },
		{ label: 'Shaders', value: '12', note: 'Pre-baked GLSL stingers with graceful fallbacks.' },
		{ label: 'Locales', value: '12+', note: 'RTL rehearsed, ICU-safe number/date output.' },
		{ label: 'Vitals', value: '98p', note: 'LCP/CLS/TTI guarded in CI and preview builds.' }
	];

	const toggleBank = [
		{ label: 'Reduced motion safe', status: 'on' },
		{ label: 'Edge prefetch', status: 'on' },
		{ label: 'Shader fallback', status: 'on' },
		{ label: 'Analytics guard', status: 'off' },
		{ label: 'Locale routing', status: 'on' },
		{ label: 'Focus choreography', status: 'on' }
	];

	let toggles = toggleBank.map((toggle) => ({ ...toggle }));
	let activeLoop = 0;
	let loopTimer: ReturnType<typeof setInterval> | null = null;
	const cinematicCues = [
		{
			title: 'Scroll-synced theater',
			description: 'Pinned hero, parallax strata, CTA hand-off, and orchestration lights.',
			metric: 'scroll 1:1'
		},
		{
			title: 'Product flight deck',
			description: 'Input-capture overlay, keyboard choreography, focus-safe transitions.',
			metric: 'latency 0.2s'
		},
		{
			title: 'Shader story beat',
			description: 'GLSL vignette, audio-reactive overlay, beam-mapped copy reveals.',
			metric: 'frames 90'
		},
		{
			title: 'Compliance runway',
			description: 'CSP, SRI, a11y rehearsals, and locale toggles without page reload.',
			metric: 'AA+ locked'
		}
	];

	const kineticRails = [
		{ label: 'Motion budget', progress: 0.86 },
		{ label: 'Edge prefetch', progress: 0.74 },
		{ label: 'Accessibility', progress: 0.94 },
		{ label: 'Localization', progress: 0.78 },
		{ label: 'Observability', progress: 0.88 }
	];

	const ribbonStats = [
		{ title: 'Scroll sync', value: '12 scenes', note: 'Pinned timelines and sequencers.' },
		{ title: 'GPU budget', value: '90fps', note: 'Adaptive easing + fallback shaders.' },
		{ title: 'Edge ready', value: '25ms hop', note: 'Prefetch on intent, streaming hero.' },
		{ title: 'Compliance', value: 'AA+ / CSP', note: 'Security headers and WCAG baked in.' }
	];

	const holoTracks = [
		{
			title: 'Parallax deck',
			summary: 'Layered cards with depth hover, shadow morph, and gradient masks.',
			badge: 'Depth+'
		},
		{
			title: 'Shader tiles',
			summary: 'GLSL-inspired tiles with shimmer passes and scanlines on scroll.',
			badge: 'GLSL'
		},
		{
			title: 'Iso stack',
			summary: 'Isometric cubes rotating gently with focus-safe motion caps.',
			badge: 'Iso'
		}
	];

	const arcadeStats = [
		{ label: 'Visual sweeps', value: '24', note: 'Playwright visual diff suites.' },
		{ label: 'Unit gates', value: '180+', note: 'CI-protected behaviors.' },
		{ label: 'Perf budgets', value: '5', note: 'LCP / CLS / TTI / TBT / FID' },
		{ label: 'Locales rehearsed', value: '12+', note: 'RTL + ICU formatting' }
	];

	let activeHolo = 0;
	let holoTimer: ReturnType<typeof setInterval> | null = null;
	let activeCue = 0;
	let cueTimer: ReturnType<typeof setInterval> | null = null;

	const controlPrograms = [
		{
			title: 'Cinematic launch rig',
			status: 'running',
			description: 'Scroll-synced hero, CTA glow hand-off, and edge-prefetched media.',
			badges: ['Pinned canvas', 'Scroll sync', 'Edge prefetch']
		},
		{
			title: 'Product lab runtime',
			status: 'arming',
			description: 'Input capture, keyboard choreography, and replayable demo states.',
			badges: ['Keyboard map', 'Replay buffer', 'a11y traps']
		},
		{
			title: 'Storyworld theater',
			status: 'recording',
			description: 'Chaptered scrollytelling with shader overlays and voiceover stems.',
			badges: ['GLSL overlay', 'Narrative beats', 'Audio stems']
		},
		{
			title: 'Telemetry spine',
			status: 'green',
			description: 'Vitals logging, consent-aware analytics, and privacy-safe replays.',
			badges: ['Vitals stream', 'Consent-aware', 'Replay buffer']
		}
	];

	const triggerGrid = [
		{
			title: 'Motion governor',
			note: 'Budgeted to 90fps with adaptive easing curves.',
			metric: 'fps 90'
		},
		{
			title: 'Edge prefetch',
			note: 'Intent-based prefetching across hero & carousel.',
			metric: '25ms hop'
		},
		{
			title: 'Accessibility guard',
			note: 'Focus choreography, reduced motion modes, and traps.',
			metric: 'WCAG AA+'
		},
		{
			title: 'Shader safe mode',
			note: 'Auto-fallback to gradients when GPU budget dips.',
			metric: 'GPU adaptive'
		},
		{
			title: 'Localization spine',
			note: 'Locale routing with RTL rehearsals baked in.',
			metric: '12 locales'
		},
		{
			title: 'Compliance pass',
			note: 'Security headers, CSP, and SRI rehearsed in CI.',
			metric: 'CSP locked'
		}
	];

	let activeProgram = 0;
	let programTimer: ReturnType<typeof setInterval> | null = null;
	let scrollStepRefs: (HTMLElement | null)[] = [];
let activeScrollStep = 0;
let activePersona = 0;
let activeMode = 0;
let activePipeline = 0;
let pipelineTimer: ReturnType<typeof setInterval> | null = null;
let scrollObserver: IntersectionObserver | null = null;

	const registerScrollStep = (node: HTMLElement, index: number) => {
		scrollStepRefs[index] = node;
		scrollObserver?.observe(node);

		return {
			destroy() {
				scrollObserver?.unobserve(node);
				scrollStepRefs[index] = null;
			}
		};
	};

	onMount(() => {
		liveSignalTimer = setInterval(() => {
			liveSignalIndex = (liveSignalIndex + 1) % liveSignals.length;
		}, 3200);

		pipelineTimer = setInterval(() => {
			activePipeline = (activePipeline + 1) % pipelineStages.length;
		}, 2600);

		programTimer = setInterval(() => {
			activeProgram = (activeProgram + 1) % controlPrograms.length;
		}, 3000);

		loopTimer = setInterval(() => {
			activeLoop = (activeLoop + 1) % spectraLoops.length;
		}, 2600);

		cueTimer = setInterval(() => {
			activeCue = (activeCue + 1) % cinematicCues.length;
		}, 3000);

		holoTimer = setInterval(() => {
			activeHolo = (activeHolo + 1) % holoTracks.length;
		}, 2800);

		if (typeof window !== 'undefined') {
			scrollObserver = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const index = Number(entry.target.getAttribute('data-index'));
							if (!Number.isNaN(index)) {
								activeScrollStep = index;
							}
						}
					});
				},
				{
					rootMargin: '-20% 0px -40% 0px',
					threshold: 0.32
				}
			);
			scrollStepRefs.forEach((ref) => ref && scrollObserver?.observe(ref));
		}

		return () => {
			if (liveSignalTimer !== null) {
				clearInterval(liveSignalTimer);
				liveSignalTimer = null;
			}
			if (pipelineTimer !== null) {
				clearInterval(pipelineTimer);
				pipelineTimer = null;
			}
			if (programTimer !== null) {
				clearInterval(programTimer);
				programTimer = null;
			}
			if (loopTimer !== null) {
				clearInterval(loopTimer);
				loopTimer = null;
			}
			if (cueTimer !== null) {
				clearInterval(cueTimer);
				cueTimer = null;
			}
			if (holoTimer !== null) {
				clearInterval(holoTimer);
				holoTimer = null;
			}
			scrollObserver?.disconnect();
		};
	});

	const toggleSwitch = (index: number) => {
		toggles = toggles.map((toggle, i) =>
			i === index ? { ...toggle, status: toggle.status === 'on' ? 'off' : 'on' } : toggle
		);
	};

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
	<div class="hero-beams" aria-hidden="true">
		<span class="beam beam-1"></span>
		<span class="beam beam-2"></span>
		<span class="beam beam-3"></span>
		<span class="beam beam-4"></span>
		<span class="beam beam-5"></span>
	</div>
	<div class="hero-overlay">
		<Reveal type="fade" delay={0.12}>
			<div class="hero-grid">
				<div class="hero-main">
					<p class="eyebrow text-cyan-100/80">Mk.01 / Universal surface</p>
					<h1 class="hero-title">
						One flagship site for hiring, launches, and live products.
					</h1>
					<p class="hero-sub">
						Cinematic hero systems, product-grade UX, and lab-caliber experiments—shipped from a
						single codebase that sells the story and proves the skill.
					</p>
					<div class="hero-actions">
						<a class="btn btn-primary btn-lg" href="#featured-work">Play the reel</a>
						<a class="btn btn-ghost btn-lg hero-ghost" href="#contact">Book a slot</a>
					</div>
					<div class="cred-row">
						{#each credibility as proof}
							<span class="cred-pill">{proof}</span>
						{/each}
					</div>
				</div>
				<div class="hero-panel">
					<div class="panel-head">
						<div>
							<p class="eyebrow text-secondary/80">Universal mode</p>
							<h3>Portfolio, campaign, product—without switching stacks.</h3>
							<p class="panel-sub">
								Same build powers case studies, launch beats, and in-flight product demos. Story-led,
								performance-checked, ready to go live.
							</p>
						</div>
						<div class="panel-chip">
							<span>Currently shipping</span>
							<strong>{metrics.experimentsShipped}</strong>
						</div>
					</div>
					<div class="mode-grid">
						{#each heroModes as mode}
							<div class="mode-card">
								<div class="mode-top">
									<span class="mode-badge">{mode.badge}</span>
									<span aria-hidden="true">↗</span>
								</div>
								<h4>{mode.title}</h4>
								<p>{mode.description}</p>
							</div>
						{/each}
					</div>
					<div class="metric-rail">
						{#each heroMetrics as metric}
							<div class="metric-chip">
								<p class="metric-label">{metric.label}</p>
								<p class="metric-value">{metric.value}</p>
								<p class="metric-note">{metric.note}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</Reveal>
	</div>
</div>

<Reveal type="slide" delay={0.18}>
	<div class="sequencer-head">
		<div>
			<span class="eyebrow text-secondary/80">Experience engine</span>
			<h2>Launch energy with product discipline.</h2>
			<p>
				Hero sequences, stats, and storytelling beats orchestrated in one pass. Built to swap between
				portfolio mode, campaign mode, and product mode without touching Figma first.
			</p>
		</div>
		<div class="sequencer-meta">
			<p class="sequencer-chip">Adaptive layouts</p>
			<p class="sequencer-chip">Motion safe defaults</p>
			<p class="sequencer-chip">Analytics ready</p>
		</div>
	</div>
</Reveal>

<Reveal type="fade" delay={0.1}>
	<PageSection id="kinetic" tone="contrast">
		<div class="scroll-lab">
			<div
				class="scroll-viewport"
				style={`--progress:${scrollMoments.length > 1 ? activeScrollStep / (scrollMoments.length - 1) : 0};`}
			>
				<div class="scroll-core">
					<p class="eyebrow text-secondary/80">Scroll lab</p>
					<h3>Big-tech caliber motion systems.</h3>
					<p class="scroll-copy">
						Pinned 3D layers, shader overlays, and scroll-synced text that respect performance budgets.
						Built for Apple-grade smoothness and Google-scale resilience.
					</p>
					<div class="scroll-meter">
						<div class="meter-track">
							<div class="meter-fill"></div>
						</div>
						<span>Scene {activeScrollStep + 1} / {scrollMoments.length}</span>
					</div>
					<div class="scroll-badges">
						<span>GPU budgeted</span>
						<span>Motion-safe</span>
						<span>Edge streamed</span>
					</div>
				</div>
				<div class="scroll-holo" aria-hidden="true">
					<div class="holo-grid"></div>
					<div class="holo-orb orb-1"></div>
					<div class="holo-orb orb-2"></div>
					<div class="holo-orb orb-3"></div>
				</div>
			</div>
			<div class="scroll-steps">
				{#each scrollMoments as moment, index}
					<article
						class={`scroll-step ${activeScrollStep === index ? 'active' : ''}`}
						data-index={index}
						use:registerScrollStep={index}
					>
						<div class="step-head">
							<span class="step-index">{String(index + 1).padStart(2, '0')}</span>
							<div class="step-metric">
								<p class="metric-value">{moment.metric}</p>
								<p class="metric-note">{moment.note}</p>
							</div>
						</div>
						<h4>{moment.title}</h4>
						<p>{moment.description}</p>
					</article>
				{/each}
			</div>
		</div>
	</PageSection>
</Reveal>

<Reveal type="fade" delay={0.12}>
	<PageSection id="allies" tone="subtle">
		<div class="ally-head">
			<div>
				<span class="eyebrow text-primary/80">Allies & standards</span>
				<h2 class="text-3xl font-semibold sm:text-4xl">Benchmarked against big-tech bar.</h2>
				<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
					Crafted to feel at home in Apple keynotes, Google developer events, or enterprise RFPs. Every
					surface is built with compliance, performance, and storytelling in mind.
				</p>
			</div>
			<div class="ally-strip" aria-hidden="true">
				<div class="ally-track">
					{#each allyBadges as badge}
						<span>{badge}</span>
					{/each}
					{#each allyBadges as badge}
						<span>{badge}</span>
					{/each}
				</div>
			</div>
		</div>
	</PageSection>
</Reveal>

<Reveal type="slide" delay={0.14}>
	<PageSection id="control-room" tone="contrast">
		<div class="control-room">
			<div class="control-intro">
				<div>
					<span class="eyebrow text-secondary/80">Control room</span>
					<h2 class="text-3xl font-semibold sm:text-4xl">Spin up launch, product, or lab rigs.</h2>
					<p class="text-base text-base-content/70 sm:text-lg">
						A cinematic operator panel that shows off orchestration: motion governance, shader fallbacks,
						and instrumentation toggles animate as you switch modes.
					</p>
				</div>
				<div class="control-badges">
					<span>GPU-aware</span>
					<span>Edge-streamed</span>
					<span>a11y rehearsed</span>
					<span>Locale-ready</span>
				</div>
			</div>

			<div class="control-grid">
				<div class="program-stack">
					{#each controlPrograms as program, index}
						<button
							type="button"
							class={`program-card ${activeProgram === index ? 'active' : ''}`}
							on:click={() => (activeProgram = index)}
							aria-pressed={activeProgram === index}
						>
							<div class="program-top">
								<p class="program-title">{program.title}</p>
								<span class={`program-status status-${program.status}`}>{program.status}</span>
							</div>
							<p class="program-copy">{program.description}</p>
							<div class="program-badges">
								{#each program.badges as badge}
									<span>{badge}</span>
								{/each}
							</div>
						</button>
					{/each}
				</div>

				<div class="program-detail">
					<div class="detail-grid">
						<div class="detail-head">
							<p class="eyebrow text-secondary/80">Live rig</p>
							<h3>{controlPrograms[activeProgram].title}</h3>
							<p class="detail-copy">{controlPrograms[activeProgram].description}</p>
						</div>
						<div class="detail-visual" aria-hidden="true">
							<div class="detail-orb orb-a"></div>
							<div class="detail-orb orb-b"></div>
							<div class="detail-gridlines"></div>
							<div class="detail-scanline"></div>
							<div class="detail-pulse"></div>
						</div>
					</div>

					<div class="trigger-grid">
						{#each triggerGrid as trigger}
							<div class="trigger-card">
								<div class="trigger-top">
									<p class="trigger-metric">{trigger.metric}</p>
									<span class="trigger-dot" aria-hidden="true"></span>
								</div>
								<h4>{trigger.title}</h4>
								<p>{trigger.note}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</PageSection>
</Reveal>

<Reveal type="fade" delay={0.18}>
	<PageSection id="spectra-lab" tone="subtle">
		<div class="spectra-lab">
			<div class="spectra-head">
				<div>
					<span class="eyebrow text-primary/80">Spectra lab</span>
					<h2 class="text-3xl font-semibold sm:text-4xl">Kinetic systems on standby.</h2>
					<p class="text-base text-base-content/70 sm:text-lg">
						A gallery of motion rigs, fallback logic, and telemetry hooks. Tap a loop to see the deck
						respond with animated beams, scanlines, and vitals bursts.
					</p>
				</div>
				<div class="spectra-pulse" aria-hidden="true">
					<div class="pulse-ring"></div>
					<div class="pulse-ring pulse-2"></div>
					<div class="pulse-core"></div>
				</div>
			</div>

			<div class="spectra-grid">
				<div class="loop-stack">
					{#each spectraLoops as loop, index}
						<button
							type="button"
							class={`loop-card ${activeLoop === index ? 'active' : ''}`}
							on:click={() => (activeLoop = index)}
							aria-pressed={activeLoop === index}
						>
							<div class="loop-top">
								<p class="loop-title">{loop.title}</p>
								<span class="loop-metric">{loop.metric}</span>
							</div>
							<p class="loop-copy">{loop.summary}</p>
							<span class="loop-glow" aria-hidden="true"></span>
						</button>
					{/each}
				</div>

				<div class="loop-visual">
					<div class="visual-grid">
						<div class="visual-planes"></div>
						<div class="visual-beam beam-a"></div>
						<div class="visual-beam beam-b"></div>
						<div class="visual-orb orb-1"></div>
						<div class="visual-orb orb-2"></div>
						<div class="visual-orb orb-3"></div>
						<div class="visual-scan"></div>
					</div>
					<div class="burst-grid">
						{#each burstStats as stat}
							<div class="burst-card">
								<p class="burst-label">{stat.label}</p>
								<p class="burst-value">{stat.value}</p>
								<p class="burst-note">{stat.note}</p>
							</div>
						{/each}
					</div>
				</div>

				<div class="toggle-bank">
					{#each toggles as toggle, index}
						<button
							type="button"
							class={`toggle-chip ${toggle.status === 'on' ? 'on' : 'off'}`}
							on:click={() => toggleSwitch(index)}
							aria-pressed={toggle.status === 'on'}
						>
							<span class="toggle-dot" aria-hidden="true"></span>
							<span class="toggle-label">{toggle.label}</span>
							<span class="toggle-state">{toggle.status}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</PageSection>
</Reveal>

<Reveal type="slide" delay={0.22}>
	<PageSection id="action-theater" tone="contrast">
		<div class="action-theater">
			<div class="action-head">
				<div>
					<span class="eyebrow text-secondary/80">Action theater</span>
					<h2 class="text-3xl font-semibold sm:text-4xl">Cinematic cues with telemetry baked in.</h2>
					<p class="text-base text-base-content/70 sm:text-lg">
						Tap through cues to see motion governance, shader fallbacks, and compliance signals animate
						in the same view—mix of choreography and production rigor.
					</p>
				</div>
				<div class="action-badges">
					<span>Scroll-synced</span>
					<span>GPU budgeted</span>
					<span>a11y rehearsed</span>
				</div>
			</div>

			<div class="action-grid">
				<div class="cue-stack">
					{#each cinematicCues as cue, index}
						<button
							type="button"
							class={`cue-card ${activeCue === index ? 'active' : ''}`}
							on:click={() => (activeCue = index)}
							aria-pressed={activeCue === index}
						>
							<div class="cue-top">
								<p class="cue-title">{cue.title}</p>
								<span class="cue-metric">{cue.metric}</span>
							</div>
							<p class="cue-copy">{cue.description}</p>
							<span class="cue-glow" aria-hidden="true"></span>
						</button>
					{/each}
				</div>

				<div class="action-visual">
					<div class="visual-stage">
						<div class="stage-gridlines"></div>
						<div class="stage-orb orb-left"></div>
						<div class="stage-orb orb-right"></div>
						<div class="stage-beam beam-1"></div>
						<div class="stage-beam beam-2"></div>
						<div class="stage-scan"></div>
						<div class="stage-cta">
							<p class="eyebrow text-secondary/80">Live cue</p>
							<h3>{cinematicCues[activeCue].title}</h3>
							<p>{cinematicCues[activeCue].description}</p>
						</div>
					</div>
					<div class="rail-grid">
						{#each kineticRails as rail}
							<div class="rail-card">
								<div class="rail-top">
									<p>{rail.label}</p>
									<span>{Math.round(rail.progress * 100)}%</span>
								</div>
								<div class="rail-track">
									<div class="rail-fill" style={`--progress:${rail.progress};`}></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="ribbon-strip" aria-hidden="true">
				<div class="ribbon-track">
					{#each ribbonStats as stat}
						<div class="ribbon-card">
							<p class="ribbon-label">{stat.title}</p>
							<p class="ribbon-value">{stat.value}</p>
							<p class="ribbon-note">{stat.note}</p>
						</div>
					{/each}
					{#each ribbonStats as stat}
						<div class="ribbon-card">
							<p class="ribbon-label">{stat.title}</p>
							<p class="ribbon-value">{stat.value}</p>
							<p class="ribbon-note">{stat.note}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</PageSection>
</Reveal>

<Reveal type="fade" delay={0.22}>
	<PageSection id="holo-vault" tone="subtle">
		<div class="holo-vault">
			<div class="holo-head">
				<div>
					<span class="eyebrow text-primary/80">Holo vault</span>
					<h2 class="text-3xl font-semibold sm:text-4xl">Hyper-stylized cards with depth-play.</h2>
					<p class="text-base text-base-content/70 sm:text-lg">
						Swap tracks to watch layered cards rotate, glow, and pulse with hover parallax. Built to
						show cinematic instincts with GPU-safe fallbacks.
					</p>
				</div>
				<div class="holo-badges">
					<span>Parallax</span>
					<span>Scanlines</span>
					<span>Gradient masks</span>
				</div>
			</div>

			<div class="holo-grid">
				<div class="holo-stack">
					{#each holoTracks as holo, index}
						<button
							type="button"
							class={`holo-card ${activeHolo === index ? 'active' : ''}`}
							on:click={() => (activeHolo = index)}
							aria-pressed={activeHolo === index}
						>
							<div class="holo-top">
								<p class="holo-title">{holo.title}</p>
								<span class="holo-badge">{holo.badge}</span>
							</div>
							<p class="holo-copy">{holo.summary}</p>
							<span class="holo-glow" aria-hidden="true"></span>
						</button>
					{/each}
				</div>

				<div class="holo-visual">
					<div class="holo-plane plane-a"></div>
					<div class="holo-plane plane-b"></div>
					<div class="holo-plane plane-c"></div>
					<div class="holo-scan"></div>
					<div class="holo-orb orb-1"></div>
					<div class="holo-orb orb-2"></div>
					<div class="holo-orb orb-3"></div>
					<div class="holo-caption">
						<p class="eyebrow text-secondary/80">Active track</p>
						<h3>{holoTracks[activeHolo].title}</h3>
						<p>{holoTracks[activeHolo].summary}</p>
					</div>
				</div>
			</div>
		</div>
	</PageSection>
</Reveal>

<Reveal type="slide" delay={0.24}>
	<PageSection id="arcade" tone="contrast">
		<div class="arcade">
			<div class="arcade-head">
				<div>
					<span class="eyebrow text-secondary/80">Telemetry arcade</span>
					<h2 class="text-3xl font-semibold sm:text-4xl">Launch metrics rendered like a game HUD.</h2>
					<p class="text-base text-base-content/70 sm:text-lg">
						Bursts, gauges, and ribbons animate to prove the build is more than visuals—CI runs, perf
						budgets, locale rehearsals, and visual diff sweeps all glow here.
					</p>
				</div>
				<div class="arcade-pill">Live</div>
			</div>

			<div class="arcade-grid">
				<div class="arcade-gauges">
					{#each arcadeStats as stat}
						<div class="gauge-card">
							<div class="gauge-top">
								<p class="gauge-label">{stat.label}</p>
								<span class="gauge-dot" aria-hidden="true"></span>
							</div>
							<h3 class="gauge-value">{stat.value}</h3>
							<p class="gauge-note">{stat.note}</p>
							<div class="gauge-track">
								<div class="gauge-fill" style={`--progress:${Math.min(1, (stat.value.match(/\\d+/)?.[0] ?? 80) / 120)};`}></div>
							</div>
						</div>
					{/each}
				</div>

				<div class="arcade-panel">
					<div class="panel-gridlines"></div>
					<div class="panel-beam beam-1"></div>
					<div class="panel-beam beam-2"></div>
					<div class="panel-orb orb-a"></div>
					<div class="panel-orb orb-b"></div>
					<div class="panel-scan"></div>
					<div class="panel-meta">
						<p class="eyebrow text-secondary/80">Auto orchestration</p>
						<h3>Visual sweeps, perf budgets, and locale rehearsals.</h3>
						<p>Every launch uses the same guardrails: motion caps, edge prefetch, a11y traps, and CI gates.</p>
						<div class="panel-chips">
							<span>Visual diff</span>
							<span>Perf guard</span>
							<span>Locale rehearsed</span>
							<span>Edge ready</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</PageSection>
</Reveal>

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
			<div class="credibility-rail">
				{#each credibility as proof}
					<span class="cred-chip">{proof}</span>
				{/each}
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

<Reveal type="slide" delay={0.18}>
<PageSection id="systems" tone="contrast">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
		<div class="space-y-4">
			<span class="eyebrow text-secondary/80">Systems proof</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Engineered to pass enterprise sniff tests.</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Motion tuned like Apple, resilience baked like Google. Edge-first delivery, observability hooks,
				and compliance guardrails so the spectacle is as durable as it is cinematic.
			</p>
			<div class="grid gap-3 sm:grid-cols-3">
				<div class="sys-stat">
					<p class="stat-label">Web Vitals</p>
					<p class="stat-value">98th percentile</p>
					<p class="stat-note">Core metrics rehearsed in CI.</p>
				</div>
				<div class="sys-stat">
					<p class="stat-label">Locales ready</p>
					<p class="stat-value">12+</p>
					<p class="stat-note">RTL & CLDR rehearsed.</p>
				</div>
				<div class="sys-stat">
					<p class="stat-label">Security</p>
					<p class="stat-value">CSP + SRI</p>
					<p class="stat-note">Strict headers & audits.</p>
				</div>
			</div>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each systemsProof as system}
				<div class="system-card">
					<div class="system-top">
						<span class="system-tag">{system.tag}</span>
						<span class="glint" aria-hidden="true"></span>
					</div>
					<h3>{system.title}</h3>
					<p>{system.description}</p>
				</div>
			{/each}
		</div>
	</div>
</PageSection>
</Reveal>

<Reveal type="fade" delay={0.18}>
<PageSection id="pipeline" tone="contrast" padding="compact">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
		<div class="space-y-3">
			<span class="eyebrow text-primary/80">Launch pipeline</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">From tokens to telemetry without friction.</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				CI gates, edge deploys, and observability are rehearsed. Scroll the stages—active steps glow as the
				loop runs.
			</p>
			<div class="pipeline-meter">
				<div class="pipeline-track">
					<div class="pipeline-fill" style={`--progress:${(activePipeline + 1) / pipelineStages.length};`}></div>
				</div>
				<span class="pipeline-note">Stage {activePipeline + 1}/{pipelineStages.length}</span>
			</div>
			<div class="pipeline-chips">
				<span>CI budgets</span>
				<span>Edge + ISR</span>
				<span>Observability</span>
				<span>Compliance</span>
			</div>
		</div>

		<div class="pipeline-rail">
			{#each pipelineStages as stage, index}
				<div class={`pipeline-step ${activePipeline === index ? 'active' : ''}`}>
					<div class="step-left">
						<span class="step-dot" aria-hidden="true"></span>
						<div>
							<h4>{stage.title}</h4>
							<p>{stage.description}</p>
						</div>
					</div>
					<span class="stage-status">{stage.status}</span>
				</div>
			{/each}
		</div>
	</div>
</PageSection>
</Reveal>

<Reveal type="slide" delay={0.25}>
<PageSection id="modes" tone="subtle">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
		<div class="space-y-4">
			<span class="eyebrow text-primary/80">Mode deck</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">One build. Three operating modes.</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Switch between launch, product, and lab without swapping stacks. Modes share the same component
				spine, analytics wiring, and accessibility guardrails.
			</p>
			<div class="mode-switcher">
				{#each modeDeck as mode, index}
					<button
						type="button"
						class={`mode-tab ${activeMode === index ? 'active' : ''}`}
						on:click={() => (activeMode = index)}
					>
						{mode.name}
					</button>
				{/each}
			</div>
			<div class="integration-rail" aria-hidden="true">
				<div class="integration-track">
					{#each integrationLogos as logo}
						<span>{logo}</span>
					{/each}
					{#each integrationLogos as logo}
						<span>{logo}</span>
					{/each}
				</div>
			</div>
		</div>

		<div class="mode-card">
			<div class="mode-meta">
				<p class="eyebrow text-secondary/80">{modeDeck[activeMode].metric}</p>
				<h3>{modeDeck[activeMode].title}</h3>
				<p class="text-base text-base-content/70">{modeDeck[activeMode].description}</p>
			</div>
			<ul class="mode-list">
				{#each modeDeck[activeMode].bullets as bullet}
					<li>
						<span aria-hidden="true">●</span>
						<p>{bullet}</p>
					</li>
				{/each}
			</ul>
			<div class="mode-footer">
				<p>Reusable spine</p>
				<p>Motion budgeted</p>
				<p>Edge deploy</p>
			</div>
		</div>
	</div>
</PageSection>
</Reveal>

<Reveal type="slide" delay={0.28}>
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

<Reveal type="fade" delay={0.22}>
<PageSection id="mission" tone="subtle">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
		<div class="space-y-3">
			<span class="eyebrow text-primary/80">Mission control</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">Switch viewpoints without losing the plot.</h2>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Whether a founder, recruiter, or creative director visits, the page adapts. Toggle personas to
				see the proof points that matter to each.
			</p>
			<div class="persona-tabs">
				{#each personaViews as view, index}
					<button
						type="button"
						class={`persona-tab ${activePersona === index ? 'active' : ''}`}
						on:click={() => (activePersona = index)}
					>
						<span>{view.name}</span>
					</button>
				{/each}
			</div>

			<div class="persona-card">
				<div class="persona-top">
					<p class="eyebrow text-secondary/80">{personaViews[activePersona].signal}</p>
					<h3>{personaViews[activePersona].name}</h3>
					<p class="text-base text-base-content/70">{personaViews[activePersona].summary}</p>
				</div>
				<ul class="persona-list">
					{#each personaViews[activePersona].points as point}
						<li>
							<span aria-hidden="true">◆</span>
							<p>{point}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="hud">
			<div class="hud-header">
				<p class="eyebrow text-secondary/80">Performance HUD</p>
				<p class="hud-note">Benchmarks pulled from lab runs and production playbooks.</p>
			</div>
			<div class="hud-grid">
				{#each perfHud as stat}
					<div class="hud-tile">
						<p class="hud-label">{stat.label}</p>
						<p class="hud-value">{stat.value}</p>
						<p class="hud-sub">{stat.note}</p>
					</div>
				{/each}
			</div>
		</div>
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
