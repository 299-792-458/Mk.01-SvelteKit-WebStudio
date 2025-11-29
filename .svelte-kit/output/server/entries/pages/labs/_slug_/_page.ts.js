import { error } from "@sveltejs/kit";
import { g as getExperiment, l as loadProject } from "../../../../chunks/index4.js";
import { l as labExperiments } from "../../../../chunks/index3.js";
import { b as buildSeo } from "../../../../chunks/seo.js";
const load = ({ params }) => {
  const experimentMeta = labExperiments.find((item) => item.slug === params.slug);
  const experimentContent = getExperiment(params.slug);
  if (!experimentMeta || !experimentContent) {
    throw error(404, `Experiment ${params.slug} not found`);
  }
  const relatedProject = loadProject("neon-metropolis");
  return {
    experiment: { ...experimentMeta, content: experimentContent },
    relatedProject,
    seo: buildSeo({
      title: `${experimentMeta.title} – Mk.01 Labs`,
      description: experimentMeta.summary,
      path: `/labs/${experimentMeta.slug}`,
      image: experimentMeta.thumbnail,
      type: "article"
    })
  };
};
export {
  load
};
