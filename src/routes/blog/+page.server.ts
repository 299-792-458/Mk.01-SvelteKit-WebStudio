export const prerender = false;

import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/server/content';
import { buildSeo } from '$lib/utils/seo';

const PAGE_SIZE = 6;

export const load: PageServerLoad = async ({ url }) => {
	const pageNumber = Number.parseInt(url.searchParams.get('page') ?? '1', 10);
	const searchTerm = url.searchParams.get('search')?.toLowerCase() ?? '';
	let allPosts = await getAllPosts();

	if (searchTerm.length > 0) {
		allPosts = allPosts.filter((post) => {
			const haystack = `${post.title} ${post.description ?? ''} ${post.category ?? ''}`.toLowerCase();
			return haystack.includes(searchTerm);
		});
	}

	const totalPages = Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE));
	const safePageNumber = Number.isNaN(pageNumber) || pageNumber < 1 ? 1 : Math.min(pageNumber, totalPages);
	const posts = allPosts.slice((safePageNumber - 1) * PAGE_SIZE, safePageNumber * PAGE_SIZE);

	return {
		posts,
		pageNumber: safePageNumber,
		totalPages,
		searchTerm,
		seo: buildSeo({
			title: 'Journal — insights, experiments, and studio process',
			description:
				'Read the latest writing from Mk.01: design systems strategy, product storytelling, and explorations from the studio lab.',
			path: '/blog'
		})
	};
};
