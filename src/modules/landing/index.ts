import { appConfig } from "$config/app.config";

export interface LandingShowcase {
  title: string;
  slug: string;
  summary: string;
  image: string;
  accent?: string;
}

export interface LandingLoadData {
  identity: typeof appConfig.identity;
  metrics: typeof appConfig.metrics;
  showcases: LandingShowcase[];
}

export async function loadLandingExperience(): Promise<LandingLoadData> {
  // Placeholder: in future this will pull from content services.
  const showcases: LandingShowcase[] = [
    {
      title: "Neon Metropolis",
      slug: "neon-metropolis",
      summary:
        "Immersive launch experience blending WebGL, spatial audio, and narrative UI.",
      image: "/images/work/neon-metropolis-cover.jpg",
      accent:
        "linear-gradient(135deg, rgba(47,93,255,0.85), rgba(255,107,203,0.85))",
    },
    {
      title: "Atlas Labs",
      slug: "atlas-labs",
      summary:
        "Modular design system powering rapid experimentation for a global innovation team.",
      image: "/images/work/atlas-labs-cover.jpg",
    },
    {
      title: "Flowstate",
      slug: "flowstate",
      summary:
        "Mindful productivity suite with biometric feedback and adaptive motion cues.",
      image: "/images/work/flowstate-cover.jpg",
    },
  ];

  return {
    identity: appConfig.identity,
    metrics: appConfig.metrics,
    showcases,
  };
}
