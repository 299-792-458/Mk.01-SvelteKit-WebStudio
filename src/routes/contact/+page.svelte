<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';

	const projectTypes = [
		'Product experience overhaul',
		'Cinematic launch website',
		'Design system + component library',
		'Labs collaboration'
	];
</script>

<PageSection id="contact-hero" tone="contrast" padding="xl">
	<div class="space-y-6 text-center">
		<span class="eyebrow text-secondary/80">Start a project</span>
		<h1 class="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			Let’s craft your next unforgettable experience.
		</h1>
		<p class="mx-auto max-w-2xl text-base text-base-content/70 sm:text-lg">
			Share a few details and we’ll orchestrate a kickoff session to shape scope, timeline, and
			success metrics.
		</p>
	</div>
</PageSection>

<PageSection id="contact-form">
	<div class="mx-auto max-w-3xl space-y-8">
		<form class="grid gap-6">
			<label class="form-control">
				<span class="label-text uppercase tracking-[0.28em] text-xs text-base-content/60">
					Name
				</span>
				<input type="text" placeholder="Your name" class="input input-bordered" required />
			</label>

			<label class="form-control">
				<span class="label-text uppercase tracking-[0.28em] text-xs text-base-content/60">
					Email
				</span>
				<input type="email" placeholder="you@company.com" class="input input-bordered" required />
			</label>

			<label class="form-control">
				<span class="label-text uppercase tracking-[0.28em] text-xs text-base-content/60">
					Project type
				</span>
				<select class="select select-bordered">
					{#each projectTypes as type}
						<option value={type}>{type}</option>
					{/each}
				</select>
			</label>

			<label class="form-control">
				<span class="label-text uppercase tracking-[0.28em] text-xs text-base-content/60">
					Project brief
				</span>
				<textarea
					class="textarea textarea-bordered min-h-[180px]"
					placeholder="Tell us about the opportunity…"
				/>
			</label>

			<button type="submit" class="btn btn-primary btn-lg">Send introduction</button>
		</form>

		<div class="rounded-2xl border border-base-200/70 bg-base-100/80 p-6 shadow-lg">
			<h2 class="text-lg font-semibold text-base-content">Prefer email?</h2>
			<p class="mt-2 text-sm text-base-content/70">
				Reach out directly via <a href="mailto:studio@mk1.dev" class="link">studio@mk1.dev</a> and we’ll
				reply within 24 hours.
			</p>
		</div>
	</div>
</PageSection>
