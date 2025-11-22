export interface NavigationAction {
	label: string;
	href: string;
	description?: string;
	icon?: string;
	accent?: 'primary' | 'secondary' | 'contrast';
}

export interface NavigationGroup {
	title: string;
	items: NavigationAction[];
}

export interface CommandPaletteSection {
	title: string;
	actions: NavigationAction[];
}

export interface NavigationConfig {
	primary: NavigationGroup[];
	commandPalette: CommandPaletteSection[];
	footer: NavigationGroup[];
}

export const navigationConfig: NavigationConfig = {
	primary: [
		{
			title: 'Studio',
			items: [
				{ label: 'Experience', href: '/', description: 'Dive into the Mk.01 runway.' },
				{ label: 'Work', href: '/work', description: 'Featured case studies and builds.' },
				{ label: 'Labs', href: '/labs', description: 'Experimental prototypes & R&D.' }
			]
		},
		{
			title: 'Narratives',
			items: [
				{ label: 'Journal', href: '/blog', description: 'Essays, notes, and process breakdowns.' },
				{ label: 'About', href: '/about', description: 'Culture, team constellation, ethos.' },
				{ label: 'Contact', href: '/contact', description: 'Start a project or collaboration.' }
			]
		}
	],
	commandPalette: [
		{
			title: 'Navigate',
			actions: [
				{ label: 'Home', href: '/' },
				{ label: 'View work', href: '/work' },
				{ label: 'Open labs', href: '/labs' },
				{ label: 'Read journal', href: '/blog' },
				{ label: 'Meet the studio', href: '/about' },
				{ label: 'Contact us', href: '/contact', accent: 'primary' }
			]
		},
		{
			title: 'Quick Actions',
			actions: [
				{ label: 'Toggle theme', href: '#theme', icon: 'sun-moon' },
				{ label: 'Play ambient audio', href: '#audio', icon: 'waveform' },
				{ label: 'Download deck', href: '/deck.pdf', icon: 'download', accent: 'secondary' }
			]
		}
	],
	footer: [
		{
			title: 'Explore',
			items: [
				{ label: 'Capabilities', href: '/capabilities' },
				{ label: 'Stack', href: '/stack' },
				{ label: 'Open Source', href: '/open-source' }
			]
		},
		{
			title: 'Legal',
			items: [
				{ label: 'Privacy', href: '/privacy' },
				{ label: 'Terms', href: '/terms' },
				{ label: 'Imprint', href: '/imprint' }
			]
		}
	]
};
