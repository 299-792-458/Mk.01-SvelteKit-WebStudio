import type { PageLoad } from './$types';

import { buildSeo } from '$lib/utils/seo';

export const load: PageLoad = () => {
	return {
		seo: buildSeo({
			title: 'Mk.01 Studio Stack',
			description:
				'The technology stack Mk.01 Studio uses to deliver high-performance, cinematic web experiences.',
			path: '/stack'
		})
	};
};
