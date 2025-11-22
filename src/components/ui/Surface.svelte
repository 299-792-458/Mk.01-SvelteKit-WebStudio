<script lang="ts">
	type SurfaceElement = 'div' | 'section' | 'article' | 'aside';

	export let variant: 'card' | 'panel' | 'glass' = 'card';
	export let padding: 'sm' | 'md' | 'lg' = 'md';
	export let as: SurfaceElement = 'div';

	const variantClasses: Record<typeof variant, string> = {
		card: 'surface-card',
		panel: 'surface-panel',
		glass: 'surface-glass'
	};

	const paddingMap: Record<typeof padding, string> = {
		sm: 'p-4 sm:p-5',
		md: 'p-6 sm:p-8',
		lg: 'p-8 sm:p-10'
	};
</script>

<svelte:element this={as} class={`${variantClasses[variant]} ${paddingMap[padding]}`}>
	<slot />
</svelte:element>
