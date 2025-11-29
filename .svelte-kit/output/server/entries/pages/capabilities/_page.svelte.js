import { e as ensure_array_like } from "../../../chunks/index.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
import { X as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const capabilitySets = [
    {
      title: "Strategy & positioning",
      items: [
        "Vision workshops",
        "Narrative mapping",
        "Content architecture",
        "Measurement plans"
      ]
    },
    {
      title: "Experience design",
      items: [
        "Interaction design",
        "Design systems",
        "Accessibility audits",
        "Design tokens"
      ]
    },
    {
      title: "Engineering",
      items: [
        "SvelteKit builds",
        "WebGL & shaders",
        "Edge deployments",
        "Automation suites"
      ]
    },
    {
      title: "Launch & growth",
      items: [
        "Launch playbooks",
        "Motion specs",
        "Knowledge bases",
        "Enablement sessions"
      ]
    }
  ];
  PageSection($$renderer, {
    id: "capabilities-hero",
    tone: "contrast",
    padding: "xl",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6 text-center"><span class="eyebrow text-secondary/80">Capabilities</span> <h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">A full-stack studio blending strategy, design, motion, and engineering.</h1> <p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">Our engagements flex to your stage: discovery sprints, product redesigns, launch campaigns,
			and experimentation programs.</p></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "capability-grid",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-6 md:grid-cols-2"><!--[-->`);
      const each_array = ensure_array_like(capabilitySets);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let set = each_array[$$index_1];
        $$renderer2.push(`<div class="surface-card h-full"><h2 class="text-xl font-semibold text-base-content">${escape_html(set.title)}</h2> <ul class="mt-4 space-y-2 text-sm text-base-content/70"><!--[-->`);
        const each_array_1 = ensure_array_like(set.items);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let item = each_array_1[$$index];
          $$renderer2.push(`<li class="flex items-start gap-2"><span class="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-primary/60"></span> <span>${escape_html(item)}</span></li>`);
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
