export type Locale = 'en' | 'ko';

export interface StudioIdentity {
	name: string;
	tagline: string;
	description: string;
	primaryLocale: Locale;
	locales: Locale[];
	contactEmail: string;
	socials: {
		label: string;
		url: string;
		handle?: string;
	}[];
}

export interface StudioMetrics {
	experimentsShipped: string;
	activeCollaborators: string;
	averageSprintLength: string;
	responseTime: string;
}

export interface ExperienceConfig {
	enableAmbientAudio: boolean;
	enableSmoothScroll: boolean;
	defaultTheme: 'day' | 'night' | 'system';
}

export interface AppConfig {
	identity: StudioIdentity;
	metrics: StudioMetrics;
	experience: ExperienceConfig;
}

export const appConfig: AppConfig = {
	identity: {
		name: 'Mk.01 SvelteKit Studio',
		tagline: 'Universal web experiences that launch, convert, and linger in memory.',
		description:
			'Mk.01 is a strategy-led design engineering studio crafting digital flagships, campaign landers, and speculative labs. We fuse narrative, performance, and inclusive craft to ship experiences people remember.',
		primaryLocale: 'en',
		locales: ['en', 'ko'],
		contactEmail: 'studio@mk1.dev',
		socials: [
			{ label: 'GitHub', url: 'https://github.com/your-handle', handle: '@mk1-studio' },
			{ label: 'Dribbble', url: 'https://dribbble.com/your-handle' },
			{ label: 'Behance', url: 'https://behance.net/your-handle' },
			{ label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' }
		]
	},
	metrics: {
		experimentsShipped: '48+',
		activeCollaborators: '17',
		averageSprintLength: '2 weeks',
		responseTime: '<24h'
	},
	experience: {
		enableAmbientAudio: true,
		enableSmoothScroll: true,
		defaultTheme: 'system'
	}
};
