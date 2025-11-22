import { writable } from 'svelte/store';
import { appConfig, type ExperienceConfig } from '$config/app.config';

type ThemeMode = 'day' | 'night' | 'aurora';

interface ExperienceState {
	theme: ThemeMode;
	isCommandPaletteOpen: boolean;
	isAmbientAudioPlaying: boolean;
}

const defaultState: ExperienceState = {
	theme: 'day',
	isCommandPaletteOpen: false,
	isAmbientAudioPlaying: false
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
			}))
	};
}

export const experienceStore = createExperienceStore(appConfig.experience);
