import { b as bind_props, e as ensure_array_like, a as attr } from "../../../../chunks/index.js";
import { P as PageSection } from "../../../../chunks/PageSection.js";
import { S as Surface } from "../../../../chunks/Surface.js";
import { Y as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const experiment = data.experiment;
    const relatedProject = data.relatedProject;
    PageSection($$renderer2, {
      id: "experiment-hero",
      tone: "contrast",
      padding: "xl",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end"><div class="space-y-5"><span class="eyebrow text-secondary/80">Lab experiment</span> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">${escape_html(experiment.title)}</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">${escape_html(experiment.summary)}</p> <ul class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60"><!--[-->`);
        const each_array = ensure_array_like(experiment.tech);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let tech = each_array[$$index];
          $$renderer3.push(`<li class="rounded-full bg-base-100/60 px-4 py-2 text-[0.7rem]">${escape_html(tech)}</li>`);
        }
        $$renderer3.push(`<!--]--></ul> <div class="flex flex-wrap gap-3">`);
        if (experiment.links.demo) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<a${attr("href", experiment.links.demo)} target="_blank" rel="noreferrer" class="btn btn-primary btn-lg">Launch demo</a>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (experiment.links.source) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<a${attr("href", experiment.links.source)} target="_blank" rel="noreferrer" class="btn btn-outline btn-lg">View source</a>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div> <div class="media svelte-18rck0n"><div class="glow svelte-18rck0n"></div> <img${attr("src", experiment.thumbnail)}${attr("alt", experiment.title)} loading="lazy" class="svelte-18rck0n"/></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "experiment-detail",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">`);
        Surface($$renderer3, {
          variant: "panel",
          padding: "md",
          as: "article",
          children: ($$renderer4) => {
            $$renderer4.push(`<h2 class="text-2xl font-semibold text-base-content">Concept</h2> <p class="mt-3 text-base text-base-content/70">${escape_html(experiment.highlight)}</p> <section class="mt-6 space-y-4"><h3 class="text-lg font-semibold text-base-content">What we explored</h3> <ul class="grid gap-3 text-sm text-base-content/70"><li>Motion language experiments blending sound, scroll, and pointer data.</li> <li>Performance profiling for shader-heavy experiences across mobile and desktop.</li> <li>Framework for wrapping prototypes into production-ready SvelteKit modules.</li></ul></section> <section class="mt-6 space-y-4"><h3 class="text-lg font-semibold text-base-content">What’s next</h3> <ul class="grid gap-3 text-sm text-base-content/70"><li>Ship a component pack turning the best patterns into reusable primitives.</li> <li>Host an open studio session to share process notes and code breakdowns.</li> <li>Integrate the learnings into upcoming product launches and case studies.</li></ul></section>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Surface($$renderer3, {
          variant: "glass",
          padding: "md",
          as: "aside",
          children: ($$renderer4) => {
            $$renderer4.push(`<h2 class="text-lg font-semibold text-base-content">Related work</h2> `);
            if (relatedProject) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="mt-4 space-y-3"><div class="rounded-xl overflow-hidden"><img${attr("src", relatedProject.coverImage ?? "/images/work/neon-metropolis-cover.jpg")}${attr("alt", relatedProject.title)} class="aspect-video w-full object-cover"/></div> <h3 class="text-xl font-semibold text-base-content">${escape_html(relatedProject.title)}</h3> <ul class="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-base-content/60"><!--[-->`);
              const each_array_1 = ensure_array_like(relatedProject.tags);
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let tag = each_array_1[$$index_1];
                $$renderer4.push(`<li class="rounded-full bg-base-100/70 px-3 py-1">#${escape_html(tag)}</li>`);
              }
              $$renderer4.push(`<!--]--></ul> <a${attr("href", `/work/${relatedProject.slug}`)} class="link-cta mt-4 inline-flex">View case study</a></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<p class="mt-4 text-sm text-base-content/70">More details coming soon.</p>`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
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
