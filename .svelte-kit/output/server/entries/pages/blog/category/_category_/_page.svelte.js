import { c as create_ssr_component, f as escape, e as each, d as add_attribute } from "../../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts, category } = data;
  const dateFormatter = new Intl.DateTimeFormat(
    "en",
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  );
  function formatDate(value) {
    try {
      return dateFormatter.format(new Date(value));
    } catch {
      return value;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="container mx-auto px-4 py-8"><a href="/blog" class="text-blue-500 hover:underline" data-svelte-h="svelte-1yjb23s">← Back to Blog</a> <h1 class="text-3xl font-bold my-4">Posts in category: ${escape(category)}</h1> <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">${each(posts, (post) => {
    return `<article class="surface-card flex h-full flex-col justify-between"><div class="space-y-3"><div class="flex justify-between"><span class="eyebrow text-accent/80">${escape(post.category)}</span></div> <div class="flex items-center gap-3 text-xs uppercase tracking-widest text-base-content/60"><span>${escape(formatDate(post.date))}</span> ${post.readingTime ? `<span>${escape(post.readingTime)} min read</span>` : ``}</div> <h3 class="text-xl font-semibold text-base-content hover:text-primary"><a${add_attribute("href", `/blog/${post.slug}`, 0)}>${escape(post.title)} </a></h3> <p class="text-sm text-base-content/70">${escape(post.description)}</p></div> ${post.tags?.length ? `<ul class="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-widest text-primary/70">${each(post.tags.slice(0, 4), (tag) => {
      return `<li class="rounded-full bg-primary/10 px-3 py-1">#${escape(tag)}</li>`;
    })} </ul>` : ``} <a${add_attribute("href", `/blog/${post.slug}`, 0)} class="link-cta mt-6">Read article
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a> </article>`;
  })}</div></div>`;
});
export {
  Page as default
};
