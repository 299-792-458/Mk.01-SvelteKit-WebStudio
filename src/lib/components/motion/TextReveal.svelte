<script lang="ts">
	import { onMount } from 'svelte';

	export let text = '';
	export let type: 'word' | 'char' = 'word';
	export let delay = 0;
	export let duration = 0.8;
	export let stagger = 0.03;

	let element: HTMLElement;

	onMount(async () => {
		if (!element) return;
		const { animate, inView } = await import('motion');

		const targets = element.querySelectorAll('.reveal-unit');
		
		const stop = inView(
			element,
			() => {
				animate(
					targets,
					{ opacity: [0, 1], y: [20, 0], filter: ['blur(10px)', 'blur(0px)'] },
					{ 
						duration: duration, 
						delay: (i) => delay + i * stagger,
						easing: [0.16, 1, 0.3, 1]
					}
				);
			},
			{ amount: 0.2 }
		);

		return () => stop();
	});

	$: units = type === 'word' ? text.split(' ') : text.split('');
</script>

<span bind:this={element} class="inline-block">
	{#each units as unit, i}
		<span class="reveal-unit inline-block opacity-0 will-change-transform">
			{unit}{type === 'word' && i !== units.length - 1 ? '\u00A0' : ''}
		</span>
	{/each}
</span>
