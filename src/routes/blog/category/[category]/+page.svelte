<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { posts, category } = data;

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

<div class="container mx-auto px-4 py-8">
	<a href="/blog" class="text-blue-500 hover:underline">&larr; Back to Blog</a>
	<h1 class="text-3xl font-bold my-4">Posts in category: {category}</h1>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each posts as post}
			<article class="surface-card flex h-full flex-col justify-between">
				<div class="space-y-3">
					<div class="flex justify-between">
						<span class="eyebrow text-accent/80">{post.category}</span>
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
</div>
