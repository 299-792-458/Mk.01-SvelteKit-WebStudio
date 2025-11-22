import type { PageServerLoad } from './$types';

import { loadProject } from '$content';
import { labExperiments } from '$modules/labs';
import { sampleProjects } from '$modules/work';
import { buildSeo } from '$lib/utils/seo';

export const load: PageServerLoad = () => {
	const enrichedProjects = sampleProjects.map((project) => ({
		...project,
		content: loadProject(project.slug)
	}));

	return {
		projects: enrichedProjects,
		labs: labExperiments.slice(0, 3),
		seo: buildSeo({
			title: 'Mk.01 Work – Case studies and launch systems',
			description:
				'Case studies from Mk.01 Studio featuring product UX, immersive storytelling, and system-level launches.',
			path: '/work'
		})
	};
};
