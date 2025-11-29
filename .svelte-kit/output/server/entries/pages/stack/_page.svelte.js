import { c as create_ssr_component, v as validate_component, e as each, f as escape } from "../../../chunks/ssr.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const layers = [
    {
      title: "Frontend",
      tools: ["SvelteKit", "TypeScript", "Tailwind CSS", "mdsvex", "Motion One", "GSAP"]
    },
    {
      title: "Rendering & visuals",
      tools: ["Three.js", "GLSL", "Spline", "Rive", "Lottie"]
    },
    {
      title: "Data & content",
      tools: ["Sanity", "Contentful", "GraphQL", "Supabase", "Contentlayer"]
    },
    {
      title: "Automation & ops",
      tools: ["Vercel", "Netlify", "Cloudflare", "GitHub Actions", "Playwright", "Percy"]
    }
  ];
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "stack-hero",
      tone: "contrast",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="space-y-6 text-center" data-svelte-h="svelte-f5i79u"><span class="eyebrow text-secondary/80">Studio stack</span> <h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Tools and platforms powering Mk.01 experiences.</h1> <p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">Every engagement selects the right combination of tools across strategy, design, motion, and
			engineering to deliver expressive yet performant products.</p></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "stack-grid" }, {}, {
    default: () => {
      return `<div class="grid gap-6 md:grid-cols-2">${each(layers, (layer) => {
        return `<div class="surface-card h-full"><h2 class="text-xl font-semibold text-base-content">${escape(layer.title)}</h2> <ul class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60">${each(layer.tools, (tool) => {
          return `<li class="rounded-full bg-base-200/60 px-3 py-1">${escape(tool)}</li>`;
        })}</ul> </div>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
