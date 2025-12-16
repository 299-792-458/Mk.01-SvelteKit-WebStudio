import type { PageLoad } from "./$types";

import { buildSeo } from "$lib/utils/seo";

export const load: PageLoad = () => {
  return {
    seo: buildSeo({
      title: "Open Source – Mk.01 Studio",
      description:
        "Discover Mk.01 Studio open-source projects for motion design, WebGL, and content tooling.",
      path: "/open-source",
    }),
  };
};
