import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "My First Blog Post",
  "date": "2025-10-10",
  "description": "This is the very first post on this brand new blog.",
  "tags": ["studio", "welcome"],
  "category": "Announcements",
  "author": "John Doe"
};
const { title, date, description, tags, category, author } = metadata;
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-dvn8bp">Welcome!</h2> <p data-svelte-h="svelte-1jjwfpn">This is the beginning of something great. Here, I’ll be sharing thoughts, ideas, and tutorials on web development.</p>`;
});
export {
  First_post as default,
  metadata
};
