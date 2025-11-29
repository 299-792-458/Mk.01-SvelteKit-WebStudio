import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, f as escape } from "../../../chunks/ssr.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts, pageNumber, totalPages, searchTerm } = data;
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
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "journal-hero",
      tone: "contrast",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="space-y-6"><span class="eyebrow text-secondary/80" data-svelte-h="svelte-11ushim">Journal</span> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" data-svelte-h="svelte-10ol7x7">Inside the Mk.01 studio.</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg" data-svelte-h="svelte-1qu84nf">Notes on design systems, web experiences, experiments, and the lessons learned while building
			in public. Grab a coffee and explore the process.</p> <form class="mt-4"><input type="search" name="search" placeholder="Search articles..." class="input input-bordered w-full max-w-xs"${add_attribute("value", searchTerm, 0)}></form></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "all-posts" }, {}, {
    default: () => {
      return `<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">${each(posts, (post) => {
        return `<article class="surface-card flex h-full flex-col justify-between"><div class="space-y-3"><div class="flex justify-between"><a${add_attribute("href", `/blog/category/${post.category?.toLowerCase()}`, 0)}><span class="eyebrow text-accent/80">${escape(post.category)}</span> </a></div> <div class="flex items-center gap-3 text-xs uppercase tracking-widest text-base-content/60"><span>${escape(formatDate(post.date))}</span> ${post.readingTime ? `<span>${escape(post.readingTime)} min read</span>` : ``}</div> <h3 class="text-xl font-semibold text-base-content hover:text-primary"><a${add_attribute("href", `/blog/${post.slug}`, 0)}>${escape(post.title)} </a></h3> <p class="text-sm text-base-content/70">${escape(post.description)}</p></div> ${post.tags?.length ? `<ul class="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-widest text-primary/70">${each(post.tags.slice(0, 4), (tag) => {
          return `<li class="rounded-full bg-primary/10 px-3 py-1">#${escape(tag)}</li>`;
        })} </ul>` : ``} <a${add_attribute("href", `/blog/${post.slug}`, 0)} class="link-cta mt-6">Read article
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a> </article>`;
      })}</div> ${posts.length === 0 ? `<div class="text-center" data-svelte-h="svelte-1im3etn"><h2 class="text-2xl font-semibold">No posts found</h2> <p class="mt-2 text-base-content/70">Try a different search term.</p></div>` : ``} <div class="mt-8 flex justify-center"><div class="btn-group"><a${add_attribute("href", `/blog?page=${pageNumber - 1}${searchTerm ? `&search=${searchTerm}` : ""}`, 0)} class="btn" ${pageNumber <= 1 ? "disabled" : ""}>«</a> <button class="btn">Page ${escape(pageNumber)} of ${escape(totalPages)}</button> <a${add_attribute("href", `/blog?page=${pageNumber + 1}${searchTerm ? `&search=${searchTerm}` : ""}`, 0)} class="btn" ${pageNumber >= totalPages ? "disabled" : ""}>»</a></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
