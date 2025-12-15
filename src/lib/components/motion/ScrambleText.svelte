<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string;
	export let active = false;
	export let speed = 30; // ms per char update
	
	let display = text;
	let interval: ReturnType<typeof setInterval>;
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

	function scramble() {
		let iterations = 0;
		clearInterval(interval);

		interval = setInterval(() => {
			display = text
				.split('')
				.map((char, index) => {
					if (index < iterations) {
						return text[index];
					}
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join('');

			if (iterations >= text.length) {
				clearInterval(interval);
			}

			iterations += 1 / 3;
		}, speed);
	}

	$: if (active) scramble();

	// Auto-scramble on mount if no external trigger
	onMount(() => {
		if (!active) scramble();
	});
</script>

<span 
	class="scramble-text inline-block font-mono" 
	on:mouseenter={scramble}
	role="none"
>
	{display}
</span>

<style>
	.scramble-text {
		cursor: default;
	}
</style>
