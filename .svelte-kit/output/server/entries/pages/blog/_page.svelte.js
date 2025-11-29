import { b as bind_props, a as attr, e as ensure_array_like } from "../../../chunks/index.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
import { X as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const { posts, pageNumber, totalPages, searchTerm } = data;
    const dateFormatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });
    function formatDate(value) {
      try {
        return dateFormatter.format(new Date(value));
      } catch {
        return value;
      }
    }
    PageSection($$renderer2, {
      id: "journal-hero",
      tone: "contrast",
      padding: "xl",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-6"><span class="eyebrow text-secondary/80">Journal</span> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Inside the Mk.01 studio.</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">Notes on design systems, web experiences, experiments, and the lessons learned while building
			in public. Grab a coffee and explore the process.</p> <form class="mt-4"><input type="search" name="search" placeholder="Search articles..." class="input input-bordered w-full max-w-xs"${attr("value", searchTerm)}/></form></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "all-posts",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        const each_array = ensure_array_like(posts);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let post = each_array[$$index_1];
          $$renderer3.push(`<article class="surface-card flex h-full flex-col justify-between"><div class="space-y-3"><div class="flex justify-between"><a${attr("href", `/blog/category/${post.category?.toLowerCase()}`)}><span class="eyebrow text-accent/80">${escape_html(post.category)}</span></a></div> <div class="flex items-center gap-3 text-xs uppercase tracking-widest text-base-content/60"><span>${escape_html(formatDate(post.date))}</span> `);
          if (post.readingTime) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span>${escape_html(post.readingTime)} min read</span>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <h3 class="text-xl font-semibold text-base-content hover:text-primary"><a${attr("href", `/blog/${post.slug}`)}>${escape_html(post.title)}</a></h3> <p class="text-sm text-base-content/70">${escape_html(post.description)}</p></div> `);
          if (post.tags?.length) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<ul class="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-widest text-primary/70"><!--[-->`);
            const each_array_1 = ensure_array_like(post.tags.slice(0, 4));
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let tag = each_array_1[$$index];
              $$renderer3.push(`<li class="rounded-full bg-primary/10 px-3 py-1">#${escape_html(tag)}</li>`);
            }
            $$renderer3.push(`<!--]--></ul>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <a${attr("href", `/blog/${post.slug}`)} class="link-cta mt-6">Read article <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></article>`);
        }
        $$renderer3.push(`<!--]--></div> `);
        if (posts.length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="text-center"><h2 class="text-2xl font-semibold">No posts found</h2> <p class="mt-2 text-base-content/70">Try a different search term.</p></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <div class="mt-8 flex justify-center"><div class="btn-group"><a${attr("href", `/blog?page=${pageNumber - 1}${searchTerm ? `&search=${searchTerm}` : ""}`)} class="btn"${attr("disabled", pageNumber <= 1, true)}>«</a> <button class="btn">Page ${escape_html(pageNumber)} of ${escape_html(totalPages)}</button> <a${attr("href", `/blog?page=${pageNumber + 1}${searchTerm ? `&search=${searchTerm}` : ""}`)} class="btn"${attr("disabled", pageNumber >= totalPages, true)}>»</a></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
