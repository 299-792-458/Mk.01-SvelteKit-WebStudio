import { b as bind_props, a as attr, e as ensure_array_like, k as await_block } from "../../../../chunks/index.js";
import { P as PageSection } from "../../../../chunks/PageSection.js";
import { Y as escape_html } from "../../../../chunks/context.js";
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const tags = data.tags ?? [];
    const dateFormatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" });
    function formatDate(value) {
      try {
        return dateFormatter.format(new Date(value));
      } catch {
        return value;
      }
    }
    PageSection($$renderer2, {
      id: "article-hero",
      tone: "contrast",
      padding: "compact",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-6"><a href="/blog" class="link-cta"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> Back to journal</a> <div class="space-y-3"><div class="flex gap-4"><span class="eyebrow text-secondary/80">Journal Entry</span> <a${attr("href", `/blog/category/${data.category?.toLowerCase()}`)}><span class="eyebrow text-accent/80">${escape_html(data.category)}</span></a></div> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">${escape_html(data.title)}</h1> `);
        if (data.description) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">${escape_html(data.description)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-base-content/60"><span>${escape_html(formatDate(data.date))}</span> `);
        if (data.readingTime) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<span>${escape_html(data.readingTime)} min read</span>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (data.wordCount) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<span>${escape_html(data.wordCount)} words</span>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (tags.length) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<ul class="flex flex-wrap gap-2 text-[0.65rem]"><!--[-->`);
          const each_array = ensure_array_like(tags);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let tag = each_array[$$index];
            $$renderer3.push(`<li class="rounded-full bg-primary/10 px-3 py-1 text-primary/80">#${escape_html(tag)}</li>`);
          }
          $$renderer3.push(`<!--]--></ul>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "article-body",
      children: ($$renderer3) => {
        await_block(
          $$renderer3,
          __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/first-post.md": () => import("../../../../chunks/first-post.js"), "../../../posts/second-post.md": () => import("../../../../chunks/second-post.js") }), `../../../posts/${data.slug}.md`, 5),
          () => {
            $$renderer3.push(`<article class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary"><p>Loading...</p></article>`);
          },
          (mod) => {
            $$renderer3.push(`<article class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary"><!---->`);
            mod.default?.($$renderer3, {});
            $$renderer3.push(`<!----></article>`);
          }
        );
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "article-cta",
      tone: "subtle",
      padding: "compact",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center"><h2 class="text-2xl font-semibold sm:text-3xl">Continue the conversation?</h2> <p class="mt-3 text-sm text-base-content/70 sm:text-base">Send thoughts, questions, or collaboration ideas. We love hearing how these explorations
			resonate.</p> <div class="mt-6 flex flex-wrap justify-center gap-3"><a href="mailto:studio@mk1.dev" class="btn btn-primary btn-sm sm:btn-md">Email the studio</a> <a href="/#latest" class="btn btn-ghost btn-sm sm:btn-md">Browse more entries</a></div></div>`);
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
