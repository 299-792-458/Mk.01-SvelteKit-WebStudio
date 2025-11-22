export interface WorkProject {
	slug: string;
	title: string;
	coverImage: string;
	summary: string;
	year: string;
	tags: string[];
	industry: string;
	accent?: string;
}

export const sampleProjects: WorkProject[] = [
	{
		slug: 'neon-metropolis',
		title: 'Neon Metropolis Launchverse',
		coverImage: '/images/work/neon-metropolis-cover.jpg',
		summary: 'WebGL-driven product reveal with procedurally animated cityscapes.',
		year: '2024',
		tags: ['WebGL', 'Motion', 'Product Launch'],
		industry: 'Entertainment'
	},
	{
		slug: 'atlas-labs',
		title: 'Atlas Labs System',
		coverImage: '/images/work/atlas-labs-cover.jpg',
		summary: 'Design-engineering system enabling 10x faster R&D release cadence.',
		year: '2023',
		tags: ['Design System', 'Tooling', 'Accessibility'],
		industry: 'Enterprise'
	},
	{
		slug: 'flowstate',
		title: 'Flowstate Mindful Productivity',
		coverImage: '/images/work/flowstate-cover.jpg',
		summary: 'Adaptive motion language integrated with biometric feedback loops.',
		year: '2024',
		tags: ['Product Design', 'Mobile', 'Animation'],
		industry: 'Health & Wellness'
	}
];
