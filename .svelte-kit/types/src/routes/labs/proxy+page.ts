// @ts-nocheck
import type { PageLoad } from './$types';

import { labExperiments } from '$modules/labs';
import { buildSeo } from '$lib/utils/seo';

export const load = () => {
	return {
		experiments: labExperiments,
		seo: buildSeo({
			title: 'Mk.01 Labs – Experimental prototypes & creative R&D',
			description:
				'Dive into Mk.01 Labs for WebGL playgrounds, AI-assisted tools, and speculative prototypes pushing the modern web.',
			path: '/labs'
		})
	};
};
;null as any as PageLoad;