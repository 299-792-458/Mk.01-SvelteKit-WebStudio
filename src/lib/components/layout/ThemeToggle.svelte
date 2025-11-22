<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	type Theme = 'studio-light' | 'studio-dark' | 'studio-pro-dark';

	export let theme: Theme = 'studio-light';

	const dispatch = createEventDispatcher<{ toggle: Theme }>();

	const themes: Theme[] = ['studio-light', 'studio-dark', 'studio-pro-dark'];

	function toggleTheme() {
		const currentIndex = themes.indexOf(theme);
		const nextIndex = (currentIndex + 1) % themes.length;
		const nextTheme = themes[nextIndex];
		dispatch('toggle', nextTheme);
	}
</script>

<button
	type="button"
	class="btn btn-ghost btn-circle btn-sm"
	on:click={toggleTheme}
	aria-label="Toggle color theme"
	aria-live="polite"
>
	<span class="sr-only">Toggle theme</span>
	{#if theme === 'studio-light'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-primary"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-4 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 9a1 1 0 100 2H3a1 1 0 110-2h1zm13 0a1 1 0 110 2h-1a1 1 0 110-2h1zM5.636 5.636a1 1 0 011.414 0L8.05 6.636a1 1 0 11-1.414 1.414L5.636 7.05a1 1 0 010-1.414zm9.9 9.9a1 1 0 011.414 1.414l-.999.999a1 1 0 11-1.414-1.414l.999-.999zM5.636 14.364a1 1 0 010 1.414l-.999.999a1 1 0 11-1.414-1.414l.999-.999a1 1 0 011.414 0zM15.95 5.636a1 1 0 010 1.414L14.95 8.05a1 1 0 11-1.414-1.414l.999-.999a1 1 0 011.414 0z"
			/>
		</svg>
	{:else if theme === 'studio-dark'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-secondary"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-accent"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				fill-rule="evenodd"
				d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm6 0a1 1 0 011 1v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V6h-1a1 1 0 010-2h1V3a1 1 0 011-1zM3.293 7.293a1 1 0 011.414 0L6 8.586l1.293-1.293a1 1 0 111.414 1.414L7.414 10l1.293 1.293a1 1 0 01-1.414 1.414L6 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L4.586 10 3.293 8.707a1 1 0 010-1.414zM15 2a1 1 0 011 1v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V6h-1a1 1 0 010-2h1V3a1 1 0 011-1zm-5 10a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
</button>
