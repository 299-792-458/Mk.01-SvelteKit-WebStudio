<script lang="ts">
	type Tone = 'default' | 'subtle' | 'contrast';
	type Padding = 'default' | 'compact' | 'xl';

	export let id: string | undefined = undefined;
	export let tone: Tone = 'default';
	export let padding: Padding = 'default';

	const toneClasses: Record<Tone, string> = {
		default: 'bg-base-100 text-base-content',
		subtle: 'bg-base-200/40 text-base-content dark:bg-base-200/20',
		contrast:
			'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 dark:from-primary/10 dark:via-base-200/10 dark:to-secondary/10'
	};

	const paddingClasses: Record<Padding, string> = {
		default: 'py-16 sm:py-20 lg:py-24',
		compact: 'py-10 sm:py-12 lg:py-16',
		xl: 'py-20 sm:py-24 lg:py-32'
	};

	$: sectionClasses = `${paddingClasses[padding]} ${toneClasses[tone]}`;
</script>

<section {id} class={`transition-colors text-base-content ${sectionClasses}`}>
	<div class="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
		<slot />
	</div>
</section>
