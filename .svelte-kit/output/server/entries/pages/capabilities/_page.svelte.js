import { c as create_ssr_component, v as validate_component, e as each, d as escape } from "../../../chunks/ssr.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "capabilities-hero",
      tone: "contrast",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="space-y-6 text-center" data-svelte-h="svelte-rq8q20"><span class="eyebrow text-secondary/80">Capabilities</span> <h1 class="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">A full-stack studio blending strategy, design, motion, and engineering.</h1> <p class="mx-auto max-w-3xl text-base text-base-content/70 sm:text-lg">Our engagements flex to your stage: discovery sprints, product redesigns, launch campaigns,
			and experimentation programs.</p></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "capability-grid" }, {}, {
    default: () => {
      return `<div class="grid gap-6 md:grid-cols-2">${each(capabilitySets, (set) => {
        return `<div class="surface-card h-full"><h2 class="text-xl font-semibold text-base-content">${escape(set.title)}</h2> <ul class="mt-4 space-y-2 text-sm text-base-content/70">${each(set.items, (item) => {
          return `<li class="flex items-start gap-2"><span class="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-primary/60"></span> <span>${escape(item)}</span> </li>`;
        })}</ul> </div>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
