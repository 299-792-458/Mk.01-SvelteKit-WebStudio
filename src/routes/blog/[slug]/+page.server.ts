import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/server/content';
import { buildSeo } from '$lib/utils/seo';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		throw error(404, `Could not find ${params.slug}`);
	}

	const { component, ...metadata } = post;
	void component;

	return {
		...metadata,
		seo: buildSeo({
			title: metadata.title,
			description:
				typeof metadata.description === 'string'
					? metadata.description
					: 'An insight from the Mk.01 studio journal.',
			path: `/blog/${params.slug}`,
			type: 'article',
			image: typeof metadata.heroImage === 'string' ? metadata.heroImage : null,
			tags: metadata.tags,
			publishedTime: metadata.date
		})
	};
};
