import { a as attr, c as attr_class, f as slot, b as bind_props } from "./index.js";
import { W as fallback } from "./context.js";
function PageSection($$renderer, $$props) {
  let sectionClasses;
  let id = fallback($$props["id"], void 0);
  let tone = fallback($$props["tone"], "default");
  let padding = fallback($$props["padding"], "default");
  const toneClasses = {
    default: "bg-base-100",
    subtle: "bg-base-200/40 dark:bg-base-200/20",
    contrast: "bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 dark:from-primary/10 dark:via-base-200/10 dark:to-secondary/10"
  };
  const paddingClasses = {
    default: "py-16 sm:py-20 lg:py-24",
    compact: "py-10 sm:py-12 lg:py-16",
    xl: "py-20 sm:py-24 lg:py-32"
  };
  sectionClasses = `${paddingClasses[padding]} ${toneClasses[tone]}`;
  $$renderer.push(`<section${attr("id", id)}${attr_class(`transition-colors ${sectionClasses}`)}><div class="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></section>`);
  bind_props($$props, { id, tone, padding });
}
export {
  PageSection as P
};
