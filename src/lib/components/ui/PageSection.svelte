<script lang="ts">
	type Tone = 'default' | 'subtle' | 'contrast';
	type Padding = 'default' | 'compact' | 'xl';

	export let id: string | undefined = undefined;
	export let tone: Tone = 'default';
	export let padding: Padding = 'default';

	const toneClasses: Record<Tone, string> = {
		default: 'bg-base-100 text-base-content',
		subtle: 'bg-base-200/50 text-base-content',
		contrast:
			'bg-base-200 text-base-content border-y border-base-content/5'
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
