import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Exploring SvelteKit and daisyUI",
  "date": "2025-10-11",
  "description": "A look into the powerful combination of SvelteKit and daisyUI for rapid web development.",
  "tags": ["sveltekit", "tailwind", "workflows"],
  "category": "Process",
  "author": "Jane Smith"
};
const { title, date, description, tags, category, author } = metadata;
const Second_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1gcywnl">Powerful Tools</h2> <p data-svelte-h="svelte-1y8euzg">SvelteKit provides a fantastic framework for building web applications, and when you combine it with the utility of Tailwind CSS and the beauty of daisyUI components, you can build beautiful websites incredibly fast.</p> <p data-svelte-h="svelte-umcfwz">Here’s an example of a daisyUI button:</p> <button class="btn btn-primary" data-svelte-h="svelte-kcah8">Primary Button</button>`;
});
export {
  Second_post as default,
  metadata
};
