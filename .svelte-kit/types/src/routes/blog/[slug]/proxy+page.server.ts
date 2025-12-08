// @ts-nocheck
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getAllPosts, getPostBySlug } from '$lib/server/content';
import { buildSeo } from '$lib/utils/seo';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		throw error(404, `Could not find ${params.slug}`);
	}

	const { component, ...metadata } = post;
	void component;

	const related = (await getAllPosts())
		.filter((entry) => entry.slug !== params.slug && entry.draft !== true)
		.map((entry) => {
			const categoryScore =
				entry.category && metadata.category && entry.category === metadata.category ? 2 : 0;
			const tagScore = metadata.tags?.length
				? entry.tags.filter((tag) => metadata.tags?.includes(tag)).length
				: 0;
			const score = categoryScore + tagScore;
			return { entry, score };
		})
		.filter((item) => item.score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, 3)
		.map((item) => item.entry);

	return {
		...metadata,
		related,
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
