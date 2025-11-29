import "clsx";
const metadata = {
  "title": "My First Blog Post",
  "date": "2025-10-10",
  "description": "This is the very first post on this brand new blog.",
  "tags": ["studio", "welcome"],
  "category": "Announcements",
  "author": "John Doe"
};
const { title, date, description, tags, category, author } = metadata;
function First_post_md($$renderer) {
  $$renderer.push(`<h2>Welcome!</h2> <p>This is the beginning of something great. Here, I’ll be sharing thoughts, ideas, and tutorials on web development.</p>`);
}
export {
  First_post_md as default,
  metadata
};
