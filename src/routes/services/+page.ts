import type { PageLoad } from './$types';

import { buildSeo } from '$lib/utils/seo';

export const load: PageLoad = () => {
	return {
		seo: buildSeo({
			title: 'Services – Engagement models and delivery rituals',
			description:
				'Deep-dive into Mk.01 service lines: discovery sprints, product design, WebGL engineering, launch orchestration, and retainers.',
			path: '/services'
		})
	};
};
