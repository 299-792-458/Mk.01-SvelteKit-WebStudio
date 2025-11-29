import { e as ensure_array_like, a as attr } from "../../../chunks/index.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
import { Y as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const repositories = [
    {
      name: "mk1-motion-kit",
      description: "Motion presets, scroll choreography, and utilities for Svelte projects.",
      stars: "1.2k",
      url: "https://github.com/your-handle/mk1-motion-kit",
      tags: ["Svelte", "Motion", "Open Source"]
    },
    {
      name: "aurora-shaders",
      description: "GLSL shader collection powering atmospheric hero sections and background loops.",
      stars: "870",
      url: "https://github.com/your-handle/aurora-shaders",
      tags: ["GLSL", "WebGL", "Visuals"]
    },
    {
      name: "mk1-content-studio",
      description: "MDX-first authoring experience integrating with SvelteKit + Contentlayer.",
      stars: "640",
      url: "https://github.com/your-handle/mk1-content-studio",
      tags: ["Content", "MDX", "SvelteKit"]
    }
  ];
  PageSection($$renderer, {
    id: "oss-hero",
    tone: "contrast",
    padding: "xl",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6 text-center"><span class="eyebrow text-secondary/80">Open source</span> <h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Sharing tools and learnings with the community.</h1> <p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">Mk.01 believes in teaching through building. Explore the libraries, starters, and experiments
			we maintain for the creative web community.</p></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "oss-repositories",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(repositories);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let repo = each_array[$$index_1];
        $$renderer2.push(`<a${attr("href", repo.url)} target="_blank" rel="noreferrer" class="surface-card h-full"><h2 class="text-xl font-semibold text-base-content">${escape_html(repo.name)}</h2> <p class="mt-2 text-sm text-base-content/70">${escape_html(repo.description)}</p> <div class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"><!--[-->`);
        const each_array_1 = ensure_array_like(repo.tags);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let tag = each_array_1[$$index];
          $$renderer2.push(`<span class="rounded-full bg-base-200/80 px-3 py-1">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div> <span class="link-cta mt-4 inline-flex">View on GitHub · ⭐ ${escape_html(repo.stars)}</span></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
