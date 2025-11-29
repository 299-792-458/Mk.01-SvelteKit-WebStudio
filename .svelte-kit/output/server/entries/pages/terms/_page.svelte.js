import "clsx";
import { P as PageSection } from "../../../chunks/PageSection.js";
function _page($$renderer) {
  PageSection($$renderer, {
    id: "terms-of-service",
    tone: "contrast",
    padding: "compact",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Terms of Service</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">This is a placeholder for the terms of service.</p></div>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
