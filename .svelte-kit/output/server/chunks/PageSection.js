import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const PageSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionClasses;
  let { id = void 0 } = $$props;
  let { tone = "default" } = $$props;
  let { padding = "default" } = $$props;
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
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.tone === void 0 && $$bindings.tone && tone !== void 0) $$bindings.tone(tone);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  sectionClasses = `${paddingClasses[padding]} ${toneClasses[tone]}`;
  return `<section${add_attribute("id", id, 0)}${add_attribute("class", `transition-colors ${sectionClasses}`, 0)}><div class="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">${slots.default ? slots.default({}) : ``}</div></section>`;
});
export {
  PageSection as P
};
