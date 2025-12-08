<script lang="ts">
	import TeamConstellation from '$components/experience/TeamConstellation.svelte';
	import Timeline from '$components/experience/Timeline.svelte';
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import { studioTimeline, team } from '$modules/about';

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
			<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
				A Seoul-born studio crafting immersive product stories and fearless web experiments.
			</h1>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Founded by Korea’s #3 ranked creative technologist, Mk.01 blends narrative design, motion
				systems, and engineering discipline to launch experiences that feel cinematic and ship with
				rigor.
			</p>
			<div class="flex flex-wrap gap-3">
				<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Start a conversation</a>
				<a href="/stack" class="btn btn-outline btn-lg">View the stack</a>
			</div>
		</div>

				<div class="surface-panel space-y-4 bg-base-100/80">
				<h2 class="text-lg font-semibold text-base-content">Studio DNA</h2>
				<ul class="space-y-3 text-sm text-base-content/70">
					<li class="flex items-start gap-3">
						<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span>
						<span>Distributed team across Seoul, Busan, Tokyo, and global collaborators.</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span>
						<span
							>Launch runway playbook covering pre-visualization, motion specs, and QA rituals.</span
						>
					</li>
					<li class="flex items-start gap-3">
						<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span>
						<span>Labs program shipping open-source experiments and R&D prototypes quarterly.</span>
					</li>
				</ul>
			</div>
		</div>
</PageSection>

<PageSection id="values">
	<div class="mx-auto max-w-3xl text-center space-y-4">
		<span class="eyebrow text-primary/80">Practice values</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Principles that anchor every build.</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			We pursue expressive experiences without sacrificing performance, accessibility, or long-term
			maintainability.
		</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		{#each values as value}
			<div class="surface-card h-full text-left">
				<h3 class="text-xl font-semibold">{value.title}</h3>
				<p class="mt-3 text-sm text-base-content/70">{value.description}</p>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection id="team" tone="subtle">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Team constellation</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">
			A collective of strategists, artists, and engineers.
		</h2>
	</div>

	<TeamConstellation members={team} />
</PageSection>

<PageSection id="rituals">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
		<div class="space-y-4">
			<span class="eyebrow text-primary/80">Studio rituals</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">
				Designing momentum from first call to launch day.
			</h2>
			<p class="text-base text-base-content/70 sm:text-lg">
				Collaboration cadences are engineered to keep vision, craft, and execution in harmony. From
				early discovery to the final deploy, every ritual is choreographed for clarity and magic.
			</p>
		</div>
		<div class="space-y-4">
			{#each rituals as ritual}
				<div
					class="rounded-2xl border border-base-200/70 bg-base-100/70 p-6 shadow-lg backdrop-blur"
				>
					<h3 class="text-lg font-semibold text-base-content">{ritual.title}</h3>
					<p class="mt-2 text-sm text-base-content/70">{ritual.detail}</p>
				</div>
			{/each}
		</div>
	</div>
</PageSection>

<PageSection id="timeline" tone="contrast">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Trajectory</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">
			From solo experiments to a studio powering global launches.
		</h2>
	</div>

	<Timeline items={studioTimeline} />
</PageSection>

<PageSection id="collaboration-pitch" tone="contrast" padding="compact">
	<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center">
		<h2 class="text-3xl font-semibold sm:text-4xl">Let’s co-create your next chapter.</h2>
		<p class="mt-4 text-base text-base-content/70 sm:text-lg">
			Whether you need an embedded product squad, a cinematic launch experience, or R&D
			explorations, Mk.01 is ready to collaborate.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3">
			<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Share your brief</a>
			<a href="/labs" class="btn btn-ghost btn-lg">Tour the labs</a>
		</div>
	</div>
</PageSection>
