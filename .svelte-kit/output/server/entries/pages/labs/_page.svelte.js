import { b as bind_props, e as ensure_array_like, a as attr, c as attr_class } from "../../../chunks/index.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
import { Y as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const experiments = data.experiments ?? [];
    const statusBadge = {
      prototype: { label: "Prototype", tone: "badge-secondary" },
      production: { label: "In production", tone: "badge-primary" },
      archived: { label: "Archived", tone: "badge-ghost" }
    };
    PageSection($$renderer2, {
      id: "labs-hero",
      tone: "contrast",
      padding: "xl",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-6 text-center"><span class="eyebrow text-secondary/80">Mk.01 Labs</span> <h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Explorations that bend light, sound, and data into living web experiences.</h1> <p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg svelte-7hut91">The Labs are our playground for prototyping radical ideas. Some ship into production, others
			become open-source seeds, all of them teach us how to build bolder products.</p> <div class="flex flex-wrap justify-center gap-3"><a href="/work" class="btn btn-outline btn-lg">See launched work</a> <a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Collaborate on R&amp;D</a></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "labs-grid",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-8 lg:grid-cols-3"><!--[-->`);
        const each_array = ensure_array_like(experiments);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let experiment = each_array[$$index_1];
          $$renderer3.push(`<article class="lab-card svelte-7hut91"><div class="media svelte-7hut91"><div class="glow svelte-7hut91"></div> <img${attr("src", experiment.thumbnail)}${attr("alt", experiment.title)} loading="lazy" class="svelte-7hut91"/></div> <div class="body svelte-7hut91"><span${attr_class(`badge ${statusBadge[experiment.status].tone}`, "svelte-7hut91")}>${escape_html(statusBadge[experiment.status].label)}</span> <h2 class="svelte-7hut91">${escape_html(experiment.title)}</h2> <p class="svelte-7hut91">${escape_html(experiment.summary)}</p> <ul class="tech svelte-7hut91"><!--[-->`);
          const each_array_1 = ensure_array_like(experiment.tech);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let tech = each_array_1[$$index];
            $$renderer3.push(`<li class="svelte-7hut91">${escape_html(tech)}</li>`);
          }
          $$renderer3.push(`<!--]--></ul> <p class="highlight svelte-7hut91"><span class="svelte-7hut91">Highlight</span> ${escape_html(experiment.highlight)}</p> <div class="cta-group svelte-7hut91"><a${attr("href", `/labs/${experiment.slug}`)} class="btn btn-sm btn-outline">Read case</a> `);
          if (experiment.links.demo) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<a${attr("href", experiment.links.demo)} class="btn btn-sm btn-ghost" target="_blank" rel="noreferrer">Launch demo</a>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<span class="btn btn-sm btn-ghost btn-disabled">Demo brewing</span>`);
          }
          $$renderer3.push(`<!--]--></div></div></article>`);
        }
        $$renderer3.push(`<!--]--></div>`);
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
