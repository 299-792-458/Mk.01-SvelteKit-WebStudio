import { a as getAllPosts } from "../../../../../chunks/content.js";
import { error } from "@sveltejs/kit";
async function load({ params }) {
  const { category } = params;
  const posts = (await getAllPosts()).filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );
  if (!posts.length) {
    throw error(404, `No posts found in category: ${category}`);
  }
  return {
    posts,
    category
  };
}
export {
  load
};
