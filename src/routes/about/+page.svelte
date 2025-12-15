<script lang="ts">
	import TeamConstellation from '$components/experience/TeamConstellation.svelte';
	import Timeline from '$components/experience/Timeline.svelte';
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import { studioTimeline, team } from '$modules/about';
	import { tilt } from '$lib/components/motion/tilt';
	import ScrambleText from '$lib/components/motion/ScrambleText.svelte';

	const values = [
		{
			title: 'Clarity over noise',
			description:
				'Every engagement starts with strategy sprints that align goals, audiences, and measures of success before pencils touch pixels.'
		},
		{
			title: 'Play with purpose',
			description:
				'Exploration fuels the work. WebGL, AI, and immersive storytelling become tools to reveal opportunity—not distractions.'
		},
		{
			title: 'Radical inclusivity',
			description:
				'Accessibility, localization, performance, and governance live in the definition of done. Beauty and responsibility coexist.'
		}
	];

	const rituals = [
		{
			title: 'Discovery immersion',
			detail:
				'Stakeholder interviews, ecosystem mapping, and live sketching to establish a shared product vocabulary.'
		},
		{
			title: 'Narrative choreography',
			detail:
				'Story-driven flows that connect concept, copy, and motion so every interaction feels intentional.'
		},
		{
			title: 'Launch orchestration',
			detail:
				'Playbook for go-live: documentation, design tokens, QA suites, and motion specs ready for handoff.'
		}
	];
</script>

<PageSection id="about-hero" tone="contrast" padding="xl">
	<div class="grid gap-12 lg:grid-cols-[1.35fr_minmax(0,1fr)] lg:items-end">
		<div class="space-y-6">
			<span class="eyebrow text-secondary/80">About Mk.01</span>
			<h1 class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[0.9]">
				<ScrambleText text="Seoul-born, globally distributed." speed={40} />
			</h1>
			<p class="max-w-2xl text-lg text-base-content/70 sm:text-xl leading-relaxed">
				Founded by Korea’s #3 ranked creative technologist, Mk.01 blends narrative design, motion
				systems, and engineering discipline to launch experiences that feel cinematic and ship with
				rigor.
			</p>
			<div class="flex flex-wrap gap-3 pt-4">
				<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Start a conversation</a>
				<a href="/stack" class="btn btn-outline btn-lg">View the stack</a>
			</div>
		</div>

		<div class="space-y-6 p-8 rounded-3xl border border-base-content/10 bg-base-100/50 backdrop-blur-md" use:tilt={{ max: 5, scale: 1.01 }}>
			<h2 class="text-xs uppercase tracking-[0.3em] font-bold text-base-content/60">Studio DNA</h2>
			<ul class="space-y-4 text-base text-base-content/80">
				<li class="flex items-start gap-4">
					<span class="mt-2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px] shadow-primary"></span>
					<span>Distributed team across Seoul, Busan, Tokyo, and global collaborators.</span>
				</li>
				<li class="flex items-start gap-4">
					<span class="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px] shadow-secondary"></span>
					<span>Launch runway playbook covering pre-visualization, motion specs, and QA rituals.</span>
				</li>
				<li class="flex items-start gap-4">
					<span class="mt-2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px] shadow-accent"></span>
					<span>Labs program shipping open-source experiments and R&D prototypes quarterly.</span>
				</li>
			</ul>
		</div>
	</div>
</PageSection>

<PageSection id="values">
	<div class="grid gap-12 lg:grid-cols-[0.5fr_1fr] items-start">
		<div class="space-y-4 sticky top-32">
			<span class="eyebrow text-primary/80">Practice values</span>
			<h2 class="text-4xl font-bold leading-tight">Principles that anchor every build.</h2>
			<p class="text-base text-base-content/70">
				We pursue expressive experiences without sacrificing performance, accessibility, or long-term
				maintainability.
			</p>
		</div>

		<div class="grid gap-6">
			{#each values as value}
				<div class="p-8 rounded-2xl border border-base-content/10 bg-base-100/80 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-base-100" use:tilt={{ max: 3, scale: 1.01 }}>
					<h3 class="text-2xl font-bold mb-3 text-base-content">{value.title}</h3>
					<p class="text-base text-base-content/70 leading-relaxed">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</PageSection>

<PageSection id="team" tone="subtle">
	<div class="space-y-12">
		<div class="text-center max-w-3xl mx-auto space-y-4">
			<span class="eyebrow text-secondary/80">Team constellation</span>
			<h2 class="text-4xl font-bold sm:text-5xl">
				A collective of strategists, artists, and engineers.
			</h2>
		</div>
		<TeamConstellation members={team} />
	</div>
</PageSection>

<PageSection id="rituals">
	<div class="grid gap-16 lg:grid-cols-2 items-center">
		<div class="space-y-6">
			<span class="eyebrow text-primary/80">Studio rituals</span>
			<h2 class="text-4xl font-bold sm:text-5xl leading-[1.1]">
				Designing momentum from first call to launch day.
			</h2>
			<p class="text-lg text-base-content/70 leading-relaxed">
				Collaboration cadences are engineered to keep vision, craft, and execution in harmony. From
				early discovery to the final deploy, every ritual is choreographed for clarity and magic.
			</p>
		</div>
		<div class="grid gap-4">
			{#each rituals as ritual, i}
				<div
					class="p-6 rounded-2xl border border-base-content/10 bg-base-100/60 backdrop-blur-md relative overflow-hidden group"
					use:tilt={{ max: 4, scale: 1.02 }}
				>
					<div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<h3 class="text-xl font-bold text-base-content mb-2 flex items-center gap-3">
						<span class="text-xs font-mono text-base-content/40">0{i+1}</span>
						{ritual.title}
					</h3>
					<p class="text-sm text-base-content/70">{ritual.detail}</p>
				</div>
			{/each}
		</div>
	</div>
</PageSection>

<PageSection id="timeline" tone="contrast">
	<div class="grid lg:grid-cols-[1fr_2fr] gap-12">
		<div class="space-y-6 sticky top-32 h-fit">
			<span class="eyebrow text-secondary/80">Trajectory</span>
			<h2 class="text-4xl font-bold sm:text-5xl">
				From solo experiments to a studio powering global launches.
			</h2>
		</div>
		<Timeline items={studioTimeline} />
	</div>
</PageSection>

<PageSection id="collaboration-pitch" tone="contrast" padding="compact">
	<div class="p-12 md:p-20 rounded-[2.5rem] border border-base-content/10 bg-gradient-to-br from-base-100/90 to-base-200/90 backdrop-blur-xl text-center relative overflow-hidden">
		<div class="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
		<div class="relative z-10 space-y-8 max-w-3xl mx-auto">
			<h2 class="text-4xl md:text-6xl font-bold tracking-tight">Let’s co-create your next chapter.</h2>
			<p class="text-lg md:text-xl text-base-content/70">
				Whether you need an embedded product squad, a cinematic launch experience, or R&D explorations, Mk.01 is ready to collaborate.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg px-8">Share your brief</a>
				<a href="/labs" class="btn btn-ghost btn-lg">Tour the labs</a>
			</div>
		</div>
	</div>
</PageSection>