import { g as element, b as bind_props, f as slot, c as attr_class } from "./index.js";
import { V as fallback } from "./context.js";
function Surface($$renderer, $$props) {
  let variant = fallback($$props["variant"], "card");
  let padding = fallback($$props["padding"], "md");
  let as = fallback($$props["as"], "div");
  const variantClasses = {
    card: "surface-card",
    panel: "surface-panel",
    glass: "surface-glass"
  };
  const paddingMap = { sm: "p-4 sm:p-5", md: "p-6 sm:p-8", lg: "p-8 sm:p-10" };
  element(
    $$renderer,
    as,
    () => {
      $$renderer.push(`${attr_class(`${variantClasses[variant]} ${paddingMap[padding]}`)}`);
    },
    () => {
      $$renderer.push(`<!--[-->`);
      slot($$renderer, $$props, "default", {});
      $$renderer.push(`<!--]-->`);
    }
  );
  bind_props($$props, { variant, padding, as });
}
export {
  Surface as S
};
