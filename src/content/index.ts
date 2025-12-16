import type { WorkProject } from "$modules/work";

const projectModules = import.meta.glob<{ default: ProjectContent }>(
  "./projects/*.json",
  {
    eager: true,
  },
);
const experimentModules = import.meta.glob<{ default: ExperimentContent }>(
  "./experiments/*.json",
  {
    eager: true,
  },
);

export interface ProjectContent extends WorkProject {
  hero: {
    headline: string;
    subheadline: string;
    video?: string;
  };
  kpis?: { label: string; value: string; description?: string }[];
  outcomes: string[];
  services?: string[];
  chapters: {
    id: string;
    title: string;
    description: string;
  }[];
  timeline?: {
    title: string;
    timeframe?: string;
    summary: string;
    metric?: string;
  }[];
}

export function loadProject(slug: string): ProjectContent | null {
  const match = Object.entries(projectModules).find(([key]) =>
    key.includes(`${slug}.json`),
  );

  if (!match) {
    console.warn(`No project content found for ${slug}`);
    return null;
  }

  const [, module] = match;
  return module.default;
}

export interface ExperimentContent {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  status: "prototype" | "production" | "archived";
  links: {
    demo?: string;
    source?: string;
  };
}

export function loadExperiments(): ExperimentContent[] {
  return Object.values(experimentModules).map((module) => module.default);
}

export function getExperiment(slug: string): ExperimentContent | null {
  const entry = Object.entries(experimentModules).find(([key]) =>
    key.includes(`${slug}.json`),
  );
  if (!entry) {
    console.warn(`No experiment content found for ${slug}`);
    return null;
  }
  const [, module] = entry;
  return module.default;
}
