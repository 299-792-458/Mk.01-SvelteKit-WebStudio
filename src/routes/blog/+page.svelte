<script lang="ts">
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { posts, pageNumber, totalPages, searchTerm, categories, tags, categoryFilter, tagFilter } = data;
	let search = searchTerm;
	let selectedCategory = categoryFilter;
	let selectedTag = tagFilter;

	const dateFormatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	function formatDate(value: string | number | Date) {
		try {
			return dateFormatter.format(new Date(value));
		} catch {
			return value;
		}
	}
</script>

<PageSection id="journal-hero" tone="contrast" padding="xl">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Journal</span>
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			Inside the Mk.01 studio.
		</h1>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			Notes on design systems, web experiences, experiments, and the lessons learned while building
			in public. Grab a coffee and explore the process.
		</p>

		<form class="mt-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_180px_180px_auto]" method="get">
			<input
				type="search"
				name="search"
				placeholder="Search articles..."
				class="input input-bordered w-full max-w-xs"
				bind:value={search}
			/>
			<label class="flex flex-col gap-2 text-sm text-base-content/70">
				<span class="font-medium text-base-content">Category</span>
				<select name="category" class="select select-bordered" bind:value={selectedCategory}>
					<option value="">All categories</option>
					{#each categories as category}
						<option value={category.toLowerCase()}>{category}</option>
					{/each}
				</select>
			</label>
			<label class="flex flex-col gap-2 text-sm text-base-content/70">
				<span class="font-medium text-base-content">Tag</span>
				<select name="tag" class="select select-bordered" bind:value={selectedTag}>
					<option value="">All tags</option>
					{#each tags as tag}
						<option value={tag.toLowerCase()}>{tag}</option>
					{/each}
				</select>
			</label>
			<div class="flex items-end gap-2">
				<button class="btn btn-primary" type="submit">Apply</button>
				<a href="/blog" class="btn btn-ghost">Reset</a>
			</div>
		</form>

		{#if tags.length}
			<div class="mt-4 flex flex-wrap gap-2 text-xs">
				{#each tags.slice(0, 12) as tag}
					<a
						href={`/blog?tag=${encodeURIComponent(tag.toLowerCase())}${searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''}${categoryFilter ? `&category=${encodeURIComponent(categoryFilter)}` : ''}`}
						class={`badge badge-outline ${tag.toLowerCase() === tagFilter ? 'badge-primary' : ''}`}
						sveltekit:prefetch
					>
						#{tag}
					</a>
				{/each}
				{#if tags.length > 12}
					<span class="text-[0.7rem] uppercase tracking-[0.22em] text-base-content/50">
						+{tags.length - 12} more tags
					</span>
				{/if}
			</div>
		{/if}
	</div>
</PageSection>

<PageSection id="all-posts">
	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each posts as post}
			<article class="surface-card flex h-full flex-col justify-between">
				<div class="space-y-3">
					<div class="flex justify-between">
						<a href={`/blog/category/${post.category?.toLowerCase()}`} sveltekit:prefetch>
							<span class="eyebrow text-accent/80">{post.category}</span>
						</a>
					</div>
					<div
						class="flex items-center gap-3 text-xs uppercase tracking-widest text-base-content/60"
					>
						<span>{formatDate(post.date)}</span>
						{#if post.readingTime}
							<span>{post.readingTime} min read</span>
						{/if}
					</div>
					<h3 class="text-xl font-semibold text-base-content hover:text-primary">
						<a href={`/blog/${post.slug}`} sveltekit:prefetch>
							{post.title}
						</a>
					</h3>
					<p class="text-sm text-base-content/70">{post.description}</p>
				</div>

				{#if post.tags?.length}
					<ul
						class="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-widest text-primary/70"
					>
						{#each post.tags.slice(0, 4) as tag}
							<li class="rounded-full bg-primary/10 px-3 py-1">#{tag}</li>
						{/each}
					</ul>
				{/if}

				<a href={`/blog/${post.slug}`} class="link-cta mt-6" sveltekit:prefetch>
					Read article
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</article>
		{/each}
	</div>

	{#if posts.length === 0}
		<div class="text-center">
			<h2 class="text-2xl font-semibold">No posts found</h2>
			<p class="mt-2 text-base-content/70">Try a different search term.</p>
		</div>
	{/if}

	<div class="mt-8 flex justify-center">
		<div class="btn-group">
			<a
				href={`/blog?page=${pageNumber - 1}${searchTerm ? `&search=${searchTerm}` : ''}${categoryFilter ? `&category=${categoryFilter}` : ''}${tagFilter ? `&tag=${tagFilter}` : ''}`}
				class="btn"
				disabled={pageNumber <= 1}>«</a
			>
			<button class="btn">Page {pageNumber} of {totalPages}</button>
			<a
				href={`/blog?page=${pageNumber + 1}${searchTerm ? `&search=${searchTerm}` : ''}${categoryFilter ? `&category=${categoryFilter}` : ''}${tagFilter ? `&tag=${tagFilter}` : ''}`}
				class="btn"
				disabled={pageNumber >= totalPages}>»</a
			>
		</div>
	</div>
</PageSection>
