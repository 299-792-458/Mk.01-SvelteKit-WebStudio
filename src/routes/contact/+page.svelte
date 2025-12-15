<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import ScrambleText from '$lib/components/motion/ScrambleText.svelte';
	import { tilt } from '$lib/components/motion/tilt';

	const projectTypes = [
		'Product experience overhaul',
		'Cinematic launch website',
		'Design system + component library',
		'Labs collaboration'
	];
</script>

<PageSection id="contact-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center max-w-4xl mx-auto">
		<span class="eyebrow text-secondary/80">Start a project</span>
		<h1 class="text-5xl font-bold tracking-tight sm:text-7xl leading-[0.9]">
			<ScrambleText text="Craft your next experience." speed={40} />
		</h1>
		<p class="text-lg text-base-content/70 sm:text-xl leading-relaxed max-w-2xl mx-auto">
			Share a few details and we’ll orchestrate a kickoff session to shape scope, timeline, and
			success metrics.
		</p>
	</div>
</PageSection>

<PageSection id="contact-form">
	<div class="mx-auto max-w-2xl space-y-12">
		<form class="space-y-8 p-8 md:p-12 rounded-3xl border border-base-content/10 bg-base-100/40 backdrop-blur-md relative overflow-hidden" use:tilt={{ max: 2, scale: 1.005 }}>
			<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
			
			<div class="grid gap-8 relative z-10">
				<div class="grid gap-6 md:grid-cols-2">
					<label class="form-control w-full">
						<span class="label-text text-xs font-bold uppercase tracking-widest text-base-content/50 mb-2">Name</span>
						<input type="text" placeholder="Your name" class="input input-lg input-bordered w-full bg-base-200/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_rgba(0,255,249,0.3)] transition-all" required />
					</label>

					<label class="form-control w-full">
						<span class="label-text text-xs font-bold uppercase tracking-widest text-base-content/50 mb-2">Email</span>
						<input type="email" placeholder="you@company.com" class="input input-lg input-bordered w-full bg-base-200/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_rgba(0,255,249,0.3)] transition-all" required />
					</label>
				</div>

				<label class="form-control w-full">
					<span class="label-text text-xs font-bold uppercase tracking-widest text-base-content/50 mb-2">Project type</span>
					<select class="select select-lg select-bordered w-full bg-base-200/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_rgba(0,255,249,0.3)] transition-all">
						{#each projectTypes as type}
							<option value={type}>{type}</option>
						{/each}
					</select>
				</label>

				<label class="form-control w-full">
					<span class="label-text text-xs font-bold uppercase tracking-widest text-base-content/50 mb-2">Brief</span>
					<textarea
						class="textarea textarea-bordered textarea-lg w-full min-h-[200px] bg-base-200/50 focus:border-primary/50 focus:shadow-[0_0_20px_-5px_rgba(0,255,249,0.3)] transition-all"
						placeholder="Tell us about the opportunity…"
					></textarea>
				</label>
			</div>

			<button type="submit" class="btn btn-primary btn-lg w-full relative z-10 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
				Send Transmission
			</button>
		</form>

		<div class="text-center space-y-2">
			<h2 class="text-sm font-bold uppercase tracking-widest text-base-content/50">Direct Channel</h2>
			<a href="mailto:studio@mk1.dev" class="text-xl md:text-2xl font-bold text-base-content hover:text-primary transition-colors link link-hover">
				studio@mk1.dev
			</a>
		</div>
	</div>
</PageSection>