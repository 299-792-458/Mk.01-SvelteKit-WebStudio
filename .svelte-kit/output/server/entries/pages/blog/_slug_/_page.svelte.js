import { c as create_ssr_component, v as validate_component, b as add_attribute, d as escape, e as each, j as is_promise, f as noop, m as missing_component } from "../../../../chunks/ssr.js";
import { P as PageSection } from "../../../../chunks/PageSection.js";
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const tags = data.tags ?? [];
  const dateFormatter = new Intl.DateTimeFormat(
    "en",
    {
      year: "numeric",
      month: "long",
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
      id: "article-hero",
      tone: "contrast",
      padding: "compact"
    },
    {},
    {
      default: () => {
        return `<div class="space-y-6"><a href="/blog" class="link-cta" data-svelte-h="svelte-k25v8p"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
			Back to journal</a> <div class="space-y-3"><div class="flex gap-4"><span class="eyebrow text-secondary/80" data-svelte-h="svelte-xripey">Journal Entry</span> <a${add_attribute("href", `/blog/category/${data.category?.toLowerCase()}`, 0)}><span class="eyebrow text-accent/80">${escape(data.category)}</span></a></div> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">${escape(data.title)}</h1> ${data.description ? `<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">${escape(data.description)}</p>` : ``}</div> <div class="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-base-content/60"><span>${escape(formatDate(data.date))}</span> ${data.readingTime ? `<span>${escape(data.readingTime)} min read</span>` : ``} ${data.wordCount ? `<span>${escape(data.wordCount)} words</span>` : ``} ${tags.length ? `<ul class="flex flex-wrap gap-2 text-[0.65rem]">${each(tags, (tag) => {
          return `<li class="rounded-full bg-primary/10 px-3 py-1 text-primary/80">#${escape(tag)}</li>`;
        })}</ul>` : ``}</div></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "article-body" }, {}, {
    default: () => {
      return `${(function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ` <article class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary" data-svelte-h="svelte-t04089"><p>Loading...</p></article> `;
        }
        return (function(mod) {
          return ` <article class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary">${validate_component(mod.default || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article> `;
        })(__value);
      })(__variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/first-post.md": () => import("../../../../chunks/first-post.js"), "../../../posts/second-post.md": () => import("../../../../chunks/second-post.js") }), `../../../posts/${data.slug}.md`, 5))}`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "article-cta",
      tone: "subtle",
      padding: "compact"
    },
    {},
    {
      default: () => {
        return `<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center" data-svelte-h="svelte-1x405oi"><h2 class="text-2xl font-semibold sm:text-3xl">Continue the conversation?</h2> <p class="mt-3 text-sm text-base-content/70 sm:text-base">Send thoughts, questions, or collaboration ideas. We love hearing how these explorations
			resonate.</p> <div class="mt-6 flex flex-wrap justify-center gap-3"><a href="mailto:studio@mk1.dev" class="btn btn-primary btn-sm sm:btn-md">Email the studio</a> <a href="/#latest" class="btn btn-ghost btn-sm sm:btn-md">Browse more entries</a></div></div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
