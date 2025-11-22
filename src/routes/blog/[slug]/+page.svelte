<script>
	import PageSection from '$lib/components/ui/PageSection.svelte';

	export let data;

	const tags = data.tags ?? [];

	const dateFormatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
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

<PageSection id="article-hero" tone="contrast" padding="compact">
	<div class="space-y-6">
		<a href="/blog" class="link-cta">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 rotate-180"
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
			Back to journal
		</a>
		<div class="space-y-3">
			<div class="flex gap-4">
				<span class="eyebrow text-secondary/80">Journal Entry</span>
				<a href={`/blog/category/${data.category?.toLowerCase()}`}>
					<span class="eyebrow text-accent/80">{data.category}</span>
				</a>
			</div>
			<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{data.title}</h1>
			{#if data.description}
				<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">{data.description}</p>
			{/if}
		</div>
		<div
			class="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-base-content/60"
		>
			<span>{formatDate(data.date)}</span>
			{#if data.readingTime}
				<span>{data.readingTime} min read</span>
			{/if}
			{#if data.wordCount}
				<span>{data.wordCount} words</span>
			{/if}
			{#if tags.length}
				<ul class="flex flex-wrap gap-2 text-[0.65rem]">
					{#each tags as tag}
						<li class="rounded-full bg-primary/10 px-3 py-1 text-primary/80">#{tag}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</PageSection>

<PageSection id="article-body">
	{#await import(`../../../posts/${data.slug}.md`)}
		<article
			class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary"
		>
			<p>Loading...</p>
		</article>
	{:then mod}
		<article
			class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary"
		>
			<svelte:component this={mod.default} />
		</article>
	{:catch error}
		<article
			class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary"
		>
			<p>Error: {error.message}</p>
		</article>
	{/await}
</PageSection>

<PageSection id="article-cta" tone="subtle" padding="compact">
	<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center">
		<h2 class="text-2xl font-semibold sm:text-3xl">Continue the conversation?</h2>
		<p class="mt-3 text-sm text-base-content/70 sm:text-base">
			Send thoughts, questions, or collaboration ideas. We love hearing how these explorations
			resonate.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3">
			<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-sm sm:btn-md">Email the studio</a>
			<a href="/#latest" class="btn btn-ghost btn-sm sm:btn-md">Browse more entries</a>
		</div>
	</div>
</PageSection>
