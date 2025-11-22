import type { PageLoad } from './$types';

import { error } from '@sveltejs/kit';

import { getExperiment, loadProject } from '$content';
import { labExperiments } from '$modules/labs';
import { buildSeo } from '$lib/utils/seo';

export const load: PageLoad = ({ params }) => {
	const experimentMeta = labExperiments.find((item) => item.slug === params.slug);
	const experimentContent = getExperiment(params.slug);

	if (!experimentMeta || !experimentContent) {
		throw error(404, `Experiment ${params.slug} not found`);
	}

	const relatedProject = loadProject('neon-metropolis');

	return {
		experiment: { ...experimentMeta, content: experimentContent },
		relatedProject,
		seo: buildSeo({
			title: `${experimentMeta.title} – Mk.01 Labs`,
			description: experimentMeta.summary,
			path: `/labs/${experimentMeta.slug}`,
			image: experimentMeta.thumbnail,
			type: 'article'
		})
	};
};
