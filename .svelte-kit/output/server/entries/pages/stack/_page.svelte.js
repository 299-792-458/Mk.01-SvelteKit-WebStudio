import { e as ensure_array_like } from "../../../chunks/index.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
import { Y as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const layers = [
    {
      title: "Frontend",
      tools: [
        "SvelteKit",
        "TypeScript",
        "Tailwind CSS",
        "mdsvex",
        "Motion One",
        "GSAP"
      ]
    },
    {
      title: "Rendering & visuals",
      tools: ["Three.js", "GLSL", "Spline", "Rive", "Lottie"]
    },
    {
      title: "Data & content",
      tools: [
        "Sanity",
        "Contentful",
        "GraphQL",
        "Supabase",
        "Contentlayer"
      ]
    },
    {
      title: "Automation & ops",
      tools: [
        "Vercel",
        "Netlify",
        "Cloudflare",
        "GitHub Actions",
        "Playwright",
        "Percy"
      ]
    }
  ];
  PageSection($$renderer, {
    id: "stack-hero",
    tone: "contrast",
    padding: "xl",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6 text-center"><span class="eyebrow text-secondary/80">Studio stack</span> <h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Tools and platforms powering Mk.01 experiences.</h1> <p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">Every engagement selects the right combination of tools across strategy, design, motion, and
			engineering to deliver expressive yet performant products.</p></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "stack-grid",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-6 md:grid-cols-2"><!--[-->`);
      const each_array = ensure_array_like(layers);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let layer = each_array[$$index_1];
        $$renderer2.push(`<div class="surface-card h-full"><h2 class="text-xl font-semibold text-base-content">${escape_html(layer.title)}</h2> <ul class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"><!--[-->`);
        const each_array_1 = ensure_array_like(layer.tools);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let tool = each_array_1[$$index];
          $$renderer2.push(`<li class="rounded-full bg-base-200/60 px-3 py-1">${escape_html(tool)}</li>`);
        }
        $$renderer2.push(`<!--]--></ul></div>`);
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
