import { l as loadProject } from "../../../chunks/index4.js";
import { l as labExperiments } from "../../../chunks/index3.js";
import { s as sampleProjects } from "../../../chunks/index2.js";
import { b as buildSeo } from "../../../chunks/seo.js";
const load = () => {
  const enrichedProjects = sampleProjects.map((project) => ({
    ...project,
    content: loadProject(project.slug)
  }));
  return {
    projects: enrichedProjects,
    labs: labExperiments.slice(0, 3),
    seo: buildSeo({
      title: "Mk.01 Work – Case studies and launch systems",
      description: "Case studies from Mk.01 Studio featuring product UX, immersive storytelling, and system-level launches.",
      path: "/work"
    })
  };
};
export {
  load
};
