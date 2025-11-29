

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/open-source/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false
};
export const universal_id = "src/routes/open-source/+page.ts";
export const imports = ["_app/immutable/nodes/11.2_yOEVr9.js","_app/immutable/chunks/0MgMqBYX.js","_app/immutable/chunks/ixkyb_BU.js","_app/immutable/chunks/B77zAZak.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/2Vj7RCXa.js"];
export const stylesheets = [];
export const fonts = [];
