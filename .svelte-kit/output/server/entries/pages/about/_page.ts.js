import { b as buildSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: buildSeo({
      title: "About the Mk.01 studio",
      description: "Meet Mk.01, a design-engineering lab crafting launch systems, design systems, and experimental web experiences for global teams.",
      path: "/about"
    })
  };
};
export {
  load
};
