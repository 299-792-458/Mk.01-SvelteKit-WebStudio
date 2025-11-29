import { b as buildSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: buildSeo({
      title: "Capabilities – Strategy, Design, Engineering",
      description: "Explore Mk.01 Studio capabilities spanning discovery, design systems, WebGL engineering, and launch orchestration.",
      path: "/capabilities"
    })
  };
};
export {
  load
};
