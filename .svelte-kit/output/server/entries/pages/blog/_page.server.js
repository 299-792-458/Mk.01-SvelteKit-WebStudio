import { a as getAllPosts } from "../../../chunks/content.js";
import { b as buildSeo } from "../../../chunks/seo.js";
const prerender = false;
async function load({ url }) {
  const pageNumber = parseInt(url.searchParams.get("page") ?? "1");
  const searchTerm = url.searchParams.get("search") ?? "";
  const pageSize = 6;
  let allPosts = await getAllPosts();
  if (searchTerm) {
    allPosts = allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description.toLowerCase().includes(searchTerm.toLowerCase()) || post.category.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  const totalPages = Math.ceil(allPosts.length / pageSize);
  const posts = allPosts.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return {
    posts,
    pageNumber,
    totalPages,
    searchTerm,
    seo: buildSeo({
      title: "Journal — insights, experiments, and studio process",
      description: "Read the latest writing from Mk.01: design systems strategy, product storytelling, and explorations from the studio lab.",
      path: "/blog"
    })
  };
}
export {
  load,
  prerender
};
