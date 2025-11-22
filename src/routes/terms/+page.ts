import { buildSeo } from '$lib/utils/seo';

export function load() {
	return {
		seo: buildSeo({
			title: 'Terms of Service',
			description: 'Terms of service for Mk.01 Studio.',
			path: '/terms'
		})
	};
}
