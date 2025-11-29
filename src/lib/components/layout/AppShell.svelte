<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { get } from 'svelte/store';
	// import Navigation from '$components/composition/Navigation.svelte';
	// import GlobalNav from '$lib/components/layout/GlobalNav.svelte';
	import CommandPalette from '$components/composition/CommandPalette.svelte';
	import AmbientAudio from '$components/experience/AmbientAudio.svelte';
	import { experienceStore } from '$services/experience';
	import SiteFooter from './SiteFooter.svelte';

	type Theme = 'studio-light' | 'studio-dark' | 'studio-pro-dark';
	type ExperienceTheme = 'day' | 'night' | 'aurora';

	const isBrowser = typeof window !== 'undefined';

	const themeMap: Record<ExperienceTheme, Theme> = {
		day: 'studio-light',
		night: 'studio-dark',
		aurora: 'studio-pro-dark'
	};

	const reverseThemeMap: Record<Theme, ExperienceTheme> = {
		'studio-light': 'day',
		'studio-dark': 'night',
		'studio-pro-dark': 'aurora'
	};

	let hasMounted = false;

	function setDocumentTheme(value: Theme) {
		if (typeof document !== 'undefined') {
			document.documentElement.dataset.theme = value;
		}
	}

	onMount(() => {
		if (!isBrowser) return;

		const stored = window.localStorage.getItem('theme');

		if (stored === 'studio-light' || stored === 'studio-dark' || stored === 'studio-pro-dark') {
			experienceStore.setTheme(reverseThemeMap[stored]);
		} else if (stored === 'light') {
			experienceStore.setTheme('day');
		} else if (stored === 'dark') {
			experienceStore.setTheme('night');
		} else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
			experienceStore.setTheme('night');
		}

		hasMounted = true;

		const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
		if (!mediaQuery) return;

		const handlePreferenceChange = (event: MediaQueryListEvent) => {
			if (!hasMounted) return;

			const current = get(experienceStore);
			if (!current) return;

			if (stored) return;

			experienceStore.setTheme(event.matches ? 'night' : 'day');
		};

		mediaQuery.addEventListener('change', handlePreferenceChange);

		onDestroy(() => {
			mediaQuery.removeEventListener('change', handlePreferenceChange);
		});
	});

	$: currentExperience = $experienceStore;
	$: activeTheme = themeMap[currentExperience.theme] ?? 'studio-light';
	$: setDocumentTheme(activeTheme);

	$: if (hasMounted && isBrowser) {
		window.localStorage.setItem('theme', activeTheme);
	}
</script>

<div data-theme={activeTheme} class="min-h-screen bg-base-100 text-base-content transition-colors">
	<a href="#page-content" class="skip-link">Skip to content</a>
	<div class="flex min-h-screen flex-col">
		<!-- <GlobalNav /> -->

		<main id="page-content" tabindex="-1" class="flex-1 focus:outline-none">
			<slot />
		</main>

		<SiteFooter />
	</div>

	<CommandPalette />
	<AmbientAudio />
</div>
