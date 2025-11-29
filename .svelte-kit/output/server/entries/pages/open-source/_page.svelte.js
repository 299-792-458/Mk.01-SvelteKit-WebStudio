import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, f as escape } from "../../../chunks/ssr.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "oss-hero",
      tone: "contrast",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="space-y-6 text-center" data-svelte-h="svelte-1i2ya1s"><span class="eyebrow text-secondary/80">Open source</span> <h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Sharing tools and learnings with the community.</h1> <p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">Mk.01 believes in teaching through building. Explore the libraries, starters, and experiments
			we maintain for the creative web community.</p></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "oss-repositories" }, {}, {
    default: () => {
      return `<div class="grid gap-6 md:grid-cols-3">${each(repositories, (repo) => {
        return `<a${add_attribute("href", repo.url, 0)} target="_blank" rel="noreferrer" class="surface-card h-full"><h2 class="text-xl font-semibold text-base-content">${escape(repo.name)}</h2> <p class="mt-2 text-sm text-base-content/70">${escape(repo.description)}</p> <div class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60">${each(repo.tags, (tag) => {
          return `<span class="rounded-full bg-base-200/80 px-3 py-1">${escape(tag)}</span>`;
        })}</div> <span class="link-cta mt-4 inline-flex">View on GitHub · ⭐ ${escape(repo.stars)}</span> </a>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
