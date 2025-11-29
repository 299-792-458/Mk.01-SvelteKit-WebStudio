<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';

	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like fluid scroll
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			touchMultiplier: 2
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<slot />
