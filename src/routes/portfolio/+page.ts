import type { PageLoad } from './$types';

import { sampleProjects } from '$modules/work';
import { buildSeo } from '$lib/utils/seo';

export const load: PageLoad = () => {
	return {
		projects: sampleProjects,
		seo: buildSeo({
			title: 'Portfolio – Cinematic case studies and experience library',
			description:
				'Browse the Mk.01 portfolio: WebGL launches, design systems, product storytelling, and immersive web experiences.',
			path: '/portfolio'
		})
	};
};
