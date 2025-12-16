import type { PageLoad } from "./$types";

import { buildSeo } from "$lib/utils/seo";

export const load: PageLoad = () => {
  return {
    seo: buildSeo({
      title: "Capabilities – Strategy, Design, Engineering",
      description:
        "Explore Mk.01 Studio capabilities spanning discovery, design systems, WebGL engineering, and launch orchestration.",
      path: "/capabilities",
    }),
  };
};
