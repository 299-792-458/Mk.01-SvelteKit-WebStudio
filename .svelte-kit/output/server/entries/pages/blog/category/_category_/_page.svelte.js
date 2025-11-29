import { e as ensure_array_like, a as attr, b as bind_props } from "../../../../../chunks/index.js";
import { X as escape_html } from "../../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const { posts, category } = data;
    const dateFormatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });
    function formatDate(value) {
      try {
        return dateFormatter.format(new Date(value));
      } catch {
        return value;
      }
    }
    $$renderer2.push(`<div class="container mx-auto px-4 py-8"><a href="/blog" class="text-blue-500 hover:underline">← Back to Blog</a> <h1 class="text-3xl font-bold my-4">Posts in category: ${escape_html(category)}</h1> <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
    const each_array = ensure_array_like(posts);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let post = each_array[$$index_1];
      $$renderer2.push(`<article class="surface-card flex h-full flex-col justify-between"><div class="space-y-3"><div class="flex justify-between"><span class="eyebrow text-accent/80">${escape_html(post.category)}</span></div> <div class="flex items-center gap-3 text-xs uppercase tracking-widest text-base-content/60"><span>${escape_html(formatDate(post.date))}</span> `);
      if (post.readingTime) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span>${escape_html(post.readingTime)} min read</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <h3 class="text-xl font-semibold text-base-content hover:text-primary"><a${attr("href", `/blog/${post.slug}`)}>${escape_html(post.title)}</a></h3> <p class="text-sm text-base-content/70">${escape_html(post.description)}</p></div> `);
      if (post.tags?.length) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<ul class="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-widest text-primary/70"><!--[-->`);
        const each_array_1 = ensure_array_like(post.tags.slice(0, 4));
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let tag = each_array_1[$$index];
          $$renderer2.push(`<li class="rounded-full bg-primary/10 px-3 py-1">#${escape_html(tag)}</li>`);
        }
        $$renderer2.push(`<!--]--></ul>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <a${attr("href", `/blog/${post.slug}`)} class="link-cta mt-6">Read article <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></article>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
