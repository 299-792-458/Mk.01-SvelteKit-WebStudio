<script lang="ts">
	type StackElement = 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav' | 'ul' | 'ol';

	export let as: StackElement = 'div';
	export let gap: string = 'var(--space-md, 1rem)';
	export let align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
	export let justify: 'start' | 'center' | 'end' | 'between' = 'start';

	const justifyMap: Record<typeof justify, string> = {
		start: 'flex-start',
		center: 'center',
		end: 'flex-end',
		between: 'space-between'
	};
</script>

<svelte:element
	this={as}
	class="stack"
	style={`--stack-gap: ${gap}; align-items: ${align}; justify-content: ${justifyMap[justify]};`}
>
	<slot />
</svelte:element>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: var(--stack-gap);
	}
</style>
