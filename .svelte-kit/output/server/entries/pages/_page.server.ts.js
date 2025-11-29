import { a as appConfig } from "../../chunks/app.config.js";
import { s as sampleProjects } from "../../chunks/index2.js";
import { g as getRecentPosts } from "../../chunks/content.js";
import { b as buildSeo } from "../../chunks/seo.js";
async function loadLandingExperience() {
  const showcases = [
    {
      title: "Neon Metropolis",
      slug: "neon-metropolis",
      summary: "Immersive launch experience blending WebGL, spatial audio, and narrative UI.",
      image: "/images/work/neon-metropolis-cover.jpg",
      accent: "linear-gradient(135deg, rgba(47,93,255,0.85), rgba(255,107,203,0.85))"
    },
    {
      title: "Atlas Labs",
      slug: "atlas-labs",
      summary: "Modular design system powering rapid experimentation for a global innovation team.",
      image: "/images/work/atlas-labs-cover.jpg"
    },
    {
      title: "Flowstate",
      slug: "flowstate",
      summary: "Mindful productivity suite with biometric feedback and adaptive motion cues.",
      image: "/images/work/flowstate-cover.jpg"
    }
  ];
  return {
    identity: appConfig.identity,
    metrics: appConfig.metrics,
    showcases
  };
}
const load = async () => {
  const [landing, posts] = await Promise.all([loadLandingExperience(), getRecentPosts(3)]);
  return {
    identity: landing.identity,
    metrics: landing.metrics,
    showcases: landing.showcases,
    projects: sampleProjects.slice(0, 6),
    posts,
    seo: buildSeo({
      title: appConfig.identity.tagline,
      description: appConfig.identity.description,
      path: "/"
    })
  };
};
export {
  load
};
