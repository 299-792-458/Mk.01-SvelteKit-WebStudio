<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';

	export let type: 'fade' | 'slide' | 'blur' | 'scale' = 'fade';
	export let delay = 0;
	export let duration = 0.8;
	export let threshold = 0.2;
	export let once = true;

	let element: HTMLElement;

	onMount(() => {
		if (!element) return;

		const options = {
			delay,
			duration,
			easing: [0.16, 1, 0.3, 1] as const // Apple-like ease-out-expo
		};

		let animation: any;

		if (type === 'fade') {
			animation = { opacity: [0, 1], y: [20, 0] };
		} else if (type === 'slide') {
			animation = { x: [-20, 0], opacity: [0, 1] };
		} else if (type === 'blur') {
			animation = { opacity: [0, 1], filter: ['blur(10px)', 'blur(0px)'], scale: [0.95, 1] };
		} else if (type === 'scale') {
			animation = { scale: [0.8, 1], opacity: [0, 1] };
		}

		const stop = inView(
			element,
			({ target }) => {
				animate(target, animation, options);
				if (!once) return (leaveInfo) => animate(target, { opacity: 0 }, { duration: 0.3 });
			},
			{ amount: threshold }
		);

		return () => stop();
	});
</script>

<div bind:this={element} class="will-change-transform">
	<slot />
</div>
