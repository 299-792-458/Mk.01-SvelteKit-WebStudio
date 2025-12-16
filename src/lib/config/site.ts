export const siteConfig = {
  name: "Mk.01 SvelteKit Studio",
  shortName: "Mk.01 Studio",
  description:
    "A world-class creative lab designing purposeful web experiences, launch systems, and immersive storytelling with SvelteKit.",
  url: {
    origin: "https://mk1.studio",
    basePath: "",
  },
  keywords: [
    "design studio",
    "sveltekit agency",
    "creative technology",
    "design systems",
    "digital storytelling",
  ],
  social: {
    twitter: "mk1studio",
    github: "mk1-lab",
    dribbble: "mk1studio",
    linkedin: "company/mk1-studio",
  },
  contactEmail: "studio@mk1.dev",
  language: "en",
  locale: "en_US",
};

export function absoluteUrl(path = "/") {
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url.origin}${siteConfig.url.basePath}${trimmed}`;
}
