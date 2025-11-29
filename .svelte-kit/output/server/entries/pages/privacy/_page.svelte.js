import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "privacy-policy",
      tone: "contrast",
      padding: "compact"
    },
    {},
    {
      default: () => {
        return `<div class="space-y-6" data-svelte-h="svelte-i298x4"><h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Privacy Policy</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">This is a placeholder for the privacy policy.</p></div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
