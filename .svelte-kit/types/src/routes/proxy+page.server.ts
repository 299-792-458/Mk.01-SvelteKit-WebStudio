// @ts-nocheck
import type { PageServerLoad } from "./$types";

import { appConfig } from "$config/app.config";
import { loadLandingExperience } from "$modules/landing";
import { sampleProjects } from "$modules/work";
import { getRecentPosts } from "$lib/server/content";
import { buildSeo } from "$lib/utils/seo";

export const load = async () => {
  const [landing, posts] = await Promise.all([
    loadLandingExperience(),
    getRecentPosts(3),
  ]);

  return {
    identity: landing.identity,
    metrics: landing.metrics,
    showcases: landing.showcases,
    projects: sampleProjects.slice(0, 6),
    posts,
    seo: buildSeo({
      title: appConfig.identity.tagline,
      description: appConfig.identity.description,
      path: "/",
    }),
  };
};
;null as any as PageServerLoad;