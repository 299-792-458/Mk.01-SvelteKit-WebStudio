import { writable } from 'svelte/store';
import { appConfig, type ExperienceConfig } from '$config/app.config';

type ThemeMode = 'day' | 'night' | 'aurora';

interface ExperienceState {
	theme: ThemeMode;
	isCommandPaletteOpen: boolean;
	isAmbientAudioPlaying: boolean;
	isPerformanceMode: boolean; // Added for performance control
}

const defaultState: ExperienceState = {
	theme: 'day',
	isCommandPaletteOpen: false,
	isAmbientAudioPlaying: false,
	isPerformanceMode: false // Default to full effects
};

function createExperienceStore(config: ExperienceConfig) {
	const state = writable<ExperienceState>({
		...defaultState,
		theme: config.defaultTheme === 'system' ? 'day' : config.defaultTheme
	});

	return {
		subscribe: state.subscribe,
		setTheme: (value: ThemeMode) =>
			state.update((current) => ({
				...current,
				theme: value
			})),
		toggleTheme: () =>
			state.update((current) => ({
				...current,
				theme: current.theme === 'day' ? 'night' : current.theme === 'night' ? 'aurora' : 'day'
			})),
		openCommandPalette: () =>
			state.update((current) => ({
				...current,
				isCommandPaletteOpen: true
			})),
		closeCommandPalette: () =>
			state.update((current) => ({
				...current,
				isCommandPaletteOpen: false
			})),
		toggleAmbientAudio: () =>
			state.update((current) => ({
				...current,
				isAmbientAudioPlaying: !current.isAmbientAudioPlaying
			})),
		togglePerformanceMode: () =>
			state.update((current) => ({
				...current,
				isPerformanceMode: !current.isPerformanceMode
			}))
	};
}

export const experienceStore = createExperienceStore(appConfig.experience);
