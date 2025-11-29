import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Surface = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "card" } = $$props;
  let { padding = "md" } = $$props;
  let { as = "div" } = $$props;
  const variantClasses = {
    card: "surface-card",
    panel: "surface-panel",
    glass: "surface-glass"
  };
  const paddingMap = {
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10"
  };
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  return `${((tag) => {
    return tag ? `<${as}${add_attribute("class", `${variantClasses[variant]} ${paddingMap[padding]}`, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
export {
  Surface as S,
  is_void as i
};
