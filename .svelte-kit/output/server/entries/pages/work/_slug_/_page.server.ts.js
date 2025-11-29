import { error } from "@sveltejs/kit";
import { l as loadProject } from "../../../../chunks/index4.js";
import { s as sampleProjects } from "../../../../chunks/index2.js";
import { b as buildSeo } from "../../../../chunks/seo.js";
const load = ({ params }) => {
  const project = sampleProjects.find((item) => item.slug === params.slug);
  const content = loadProject(params.slug);
  if (!project || !content) {
    throw error(404, `Project not found: ${params.slug}`);
  }
  const related = sampleProjects.filter((item) => item.slug !== project.slug).slice(0, 2);
  return {
    project: { ...project, content },
    related,
    seo: buildSeo({
      title: `${project.title} – Mk.01 Case Study`,
      description: project.summary,
      path: `/work/${project.slug}`,
      image: project.coverImage,
      type: "article",
      tags: project.tags
    })
  };
};
export {
  load
};
