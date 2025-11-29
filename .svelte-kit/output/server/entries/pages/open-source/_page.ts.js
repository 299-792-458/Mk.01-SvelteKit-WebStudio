import { b as buildSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: buildSeo({
      title: "Open Source – Mk.01 Studio",
      description: "Discover Mk.01 Studio open-source projects for motion design, WebGL, and content tooling.",
      path: "/open-source"
    })
  };
};
export {
  load
};
