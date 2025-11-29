import "clsx";
const metadata = {
  "title": "Exploring SvelteKit and daisyUI",
  "date": "2025-10-11",
  "description": "A look into the powerful combination of SvelteKit and daisyUI for rapid web development.",
  "tags": ["sveltekit", "tailwind", "workflows"],
  "category": "Process",
  "author": "Jane Smith"
};
const { title, date, description, tags, category, author } = metadata;
function Second_post_md($$renderer) {
  $$renderer.push(`<h2>Powerful Tools</h2> <p>SvelteKit provides a fantastic framework for building web applications, and when you combine it with the utility of Tailwind CSS and the beauty of daisyUI components, you can build beautiful websites incredibly fast.</p> <p>Here’s an example of a daisyUI button:</p> <button class="btn btn-primary">Primary Button</button>`);
}
export {
  Second_post_md as default,
  metadata
};
