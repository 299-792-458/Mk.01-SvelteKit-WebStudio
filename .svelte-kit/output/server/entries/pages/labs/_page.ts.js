import { l as labExperiments } from "../../../chunks/index3.js";
import { b as buildSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    experiments: labExperiments,
    seo: buildSeo({
      title: "Mk.01 Labs – Experimental prototypes & creative R&D",
      description: "Dive into Mk.01 Labs for WebGL playgrounds, AI-assisted tools, and speculative prototypes pushing the modern web.",
      path: "/labs"
    })
  };
};
export {
  load
};
