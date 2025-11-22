<script>
	import PageSection from '$lib/components/ui/PageSection.svelte';

	export let data;

	const { posts, pageNumber, totalPages, searchTerm } = data;

	const dateFormatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	function formatDate(value) {
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

		<form class="mt-4">
			<input
				type="search"
				name="search"
				placeholder="Search articles..."
				class="input input-bordered w-full max-w-xs"
				value={searchTerm}
			/>
		</form>
	</div>
</PageSection>

<PageSection id="all-posts">
	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each posts as post}
			<article class="surface-card flex h-full flex-col justify-between">
				<div class="space-y-3">
					<div class="flex justify-between">
						<a href={`/blog/category/${post.category?.toLowerCase()}`}>
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
						<a href={`/blog/${post.slug}`}>
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

				<a href={`/blog/${post.slug}`} class="link-cta mt-6">
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
				href={`/blog?page=${pageNumber - 1}${searchTerm ? `&search=${searchTerm}` : ''}`}
				class="btn"
				disabled={pageNumber <= 1}>«</a
			>
			<button class="btn">Page {pageNumber} of {totalPages}</button>
			<a
				href={`/blog?page=${pageNumber + 1}${searchTerm ? `&search=${searchTerm}` : ''}`}
				class="btn"
				disabled={pageNumber >= totalPages}>»</a
			>
		</div>
	</div>
</PageSection>
