// @ts-nocheck
export const prerender = false;

import type { PageServerLoad } from "./$types";
import { getAllPosts } from "$lib/server/content";
import { buildSeo } from "$lib/utils/seo";

const PAGE_SIZE = 6;

export const load = async ({ url }: Parameters<PageServerLoad>[0]) => {
  const pageNumber = Number.parseInt(url.searchParams.get("page") ?? "1", 10);
  const searchTerm = url.searchParams.get("search")?.toLowerCase() ?? "";
  const categoryFilter =
    url.searchParams.get("category")?.toLowerCase().trim() ?? "";
  const tagFilter = url.searchParams.get("tag")?.toLowerCase().trim() ?? "";

  const allPosts = (await getAllPosts()).filter((post) => post.draft !== true);

  const categories = Array.from(
    new Set(
      allPosts.map((post) => post.category ?? "Uncategorized").filter(Boolean),
    ),
  ).sort((a, b) => a.localeCompare(b));
  const tags = Array.from(
    new Set(
      allPosts
        .flatMap((post) => post.tags ?? [])
        .map((tag) => tag.trim())
        .filter(Boolean),
    ),
  ).sort((a, b) => a.localeCompare(b));

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      searchTerm.length === 0
        ? true
        : `${post.title} ${post.description ?? ""} ${post.category ?? ""}`
            .toLowerCase()
            .includes(searchTerm);

    const matchesCategory =
      categoryFilter.length === 0
        ? true
        : (post.category ?? "").toLowerCase() === categoryFilter;

    const matchesTag =
      tagFilter.length === 0
        ? true
        : (post.tags ?? []).some((tag) => tag.toLowerCase() === tagFilter);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const safePageNumber =
    Number.isNaN(pageNumber) || pageNumber < 1
      ? 1
      : Math.min(pageNumber, totalPages);
  const posts = filteredPosts.slice(
    (safePageNumber - 1) * PAGE_SIZE,
    safePageNumber * PAGE_SIZE,
  );

  return {
    posts,
    pageNumber: safePageNumber,
    totalPages,
    searchTerm,
    categoryFilter,
    tagFilter,
    categories,
    tags,
    seo: buildSeo({
      title: "Journal — insights, experiments, and studio process",
      description:
        "Read the latest writing from Mk.01: design systems strategy, product storytelling, and explorations from the studio lab.",
      path: "/blog",
    }),
  };
};
