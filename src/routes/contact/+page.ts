import type { PageLoad } from './$types';

import { buildSeo } from '$lib/utils/seo';

export const load: PageLoad = () => {
	return {
		seo: buildSeo({
			title: 'Contact Mk.01 Studio',
			description:
				'Share your project vision and collaborate with Mk.01 Studio on experiential web design and development.',
			path: '/contact'
		})
	};
};
