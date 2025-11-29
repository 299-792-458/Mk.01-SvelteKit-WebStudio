const siteConfig = {
  name: "Mk.01 SvelteKit Studio",
  shortName: "Mk.01 Studio",
  description: "A world-class creative lab designing purposeful web experiences, launch systems, and immersive storytelling with SvelteKit.",
  url: {
    origin: "https://mk1.studio",
    basePath: ""
  },
  keywords: [
    "design studio",
    "sveltekit agency",
    "creative technology",
    "design systems",
    "digital storytelling"
  ],
  social: {
    twitter: "mk1studio"
  },
  locale: "en_US"
};
function absoluteUrl(path = "/") {
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url.origin}${siteConfig.url.basePath}${trimmed}`;
}
function resolveImageUrl(image) {
  if (!image) return null;
  if (image.startsWith("http")) return image;
  return absoluteUrl(image);
}
function buildSeo(options = {}) {
  const {
    title,
    description = siteConfig.description,
    path = "/",
    image,
    noindex = false,
    type = "website",
    tags = [],
    publishedTime,
    modifiedTime,
    locale = siteConfig.locale
  } = options;
  const pageTitle = title ? `${title} · ${siteConfig.shortName}` : siteConfig.name;
  const canonical = absoluteUrl(path);
  const robots = noindex ? "noindex, nofollow" : "index, follow";
  const ogImage = resolveImageUrl(image);
  const openGraphType = type === "article" ? "article" : "website";
  const meta = [{ name: "keywords", content: siteConfig.keywords.join(", ") }];
  const openGraph = [
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: openGraphType },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:locale", content: locale }
  ];
  if (ogImage) {
    openGraph.push({ property: "og:image", content: ogImage });
  }
  if (openGraphType === "article") {
    if (publishedTime) {
      openGraph.push({ property: "article:published_time", content: publishedTime });
    }
    if (modifiedTime) {
      openGraph.push({ property: "article:modified_time", content: modifiedTime });
    }
    if (tags.length) {
      tags.slice(0, 6).forEach((tag) => {
        openGraph.push({ property: "article:tag", content: tag });
      });
    }
  }
  const twitter = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: description }
  ];
  {
    twitter.push({ name: "twitter:site", content: `@${siteConfig.social.twitter}` });
    twitter.push({ name: "twitter:creator", content: `@${siteConfig.social.twitter}` });
  }
  if (ogImage) {
    twitter.push({ name: "twitter:image", content: ogImage });
  }
  let jsonLd = null;
  if (type === "article") {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description,
      image: ogImage ?? void 0,
      datePublished: publishedTime ?? void 0,
      dateModified: modifiedTime ?? publishedTime ?? void 0,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url.origin
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: ogImage ?? absoluteUrl("/favicon.png")
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonical
      },
      keywords: tags.join(", ")
    };
  } else {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      description,
      url: canonical
    };
  }
  return {
    title: pageTitle,
    description,
    canonical,
    robots,
    meta,
    openGraph,
    twitter,
    jsonLd
  };
}
export {
  buildSeo as b,
  siteConfig as s
};
