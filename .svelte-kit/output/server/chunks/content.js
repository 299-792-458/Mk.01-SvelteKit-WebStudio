const AVERAGE_READING_SPEED = 200;
const markdownModules = /* @__PURE__ */ Object.assign({ "/src/posts/first-post.md": () => import("./first-post.js"), "/src/posts/second-post.md": () => import("./second-post.js") });
const mdxModules = /* @__PURE__ */ Object.assign({ "/src/content/articles/design-systems.mdx": () => import("./design-systems.js"), "/src/content/articles/expressive-motion.mdx": () => import("./expressive-motion.js"), "/src/content/articles/launch-playbook.mdx": () => import("./launch-playbook.js") });
function normalizeDate(value) {
  if (typeof value !== "string") {
    return null;
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed.toISOString();
}
function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function deriveReadingStats(html) {
  const text = stripHtml(html);
  const words = text.length > 0 ? text.split(" ").length : 0;
  const minutes = Math.max(1, Math.round(words / AVERAGE_READING_SPEED));
  return {
    words,
    minutes
  };
}
async function resolveModules(modules, extension) {
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const mod = await resolver();
      const { metadata, default: component } = mod;
      const slug = path.split("/").pop()?.replace(extension, "") ?? "";
      const rendered = renderContent(mod);
      const { minutes, words } = deriveReadingStats(rendered.html ?? "");
      const isoDate = metadata?.date ? normalizeDate(metadata.date) : null;
      const typedMetadata = metadata;
      return {
        ...typedMetadata,
        slug,
        date: isoDate ?? typedMetadata.date ?? "",
        readingTime: typeof typedMetadata.readingTime === "number" ? typedMetadata.readingTime : minutes,
        wordCount: typeof typedMetadata.wordCount === "number" ? typedMetadata.wordCount : words,
        tags: Array.isArray(typedMetadata.tags) ? typedMetadata.tags : [],
        category: typedMetadata.category ?? "Uncategorized",
        author: typedMetadata.author ?? "Mk.01 Studio"
      };
    })
  );
  return posts;
}
async function getAllPosts() {
  const [markdownPosts, mdxPosts] = await Promise.all([
    resolveModules(markdownModules, ".md"),
    resolveModules(mdxModules, ".mdx")
  ]);
  const posts = [...markdownPosts, ...mdxPosts];
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
async function getRecentPosts(limit = 3) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.draft !== true).slice(0, limit);
}
async function getPostBySlug(slug) {
  const resolver = markdownModules[`/src/posts/${slug}.md`] ?? mdxModules[`/src/content/articles/${slug}.mdx`];
  if (!resolver) {
    return null;
  }
  const mod = await resolver();
  const { metadata, default: component } = mod;
  const rendered = renderContent(mod);
  const { minutes, words } = deriveReadingStats(rendered.html ?? "");
  const isoDate = metadata?.date ? normalizeDate(metadata.date) : null;
  const typedMetadata = metadata;
  return {
    ...typedMetadata,
    slug,
    component,
    date: isoDate ?? typedMetadata.date ?? "",
    readingTime: typeof typedMetadata.readingTime === "number" ? typedMetadata.readingTime : minutes,
    wordCount: typeof typedMetadata.wordCount === "number" ? typedMetadata.wordCount : words,
    tags: Array.isArray(typedMetadata.tags) ? typedMetadata.tags : [],
    category: typedMetadata.category ?? "Uncategorized",
    author: typedMetadata.author ?? "Mk.01 Studio"
  };
}
function renderContent(mod) {
  const renderFn = typeof mod.render === "function" ? mod.render : typeof mod.default === "object" && mod.default && "render" in mod.default ? mod.default.render : void 0;
  return renderFn ? renderFn() : { html: "" };
}
export {
  getAllPosts as a,
  getPostBySlug as b,
  getRecentPosts as g
};
