

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/labs/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false
};
export const universal_id = "src/routes/labs/+page.ts";
export const imports = ["_app/immutable/nodes/9.BzZEnE2U.js","_app/immutable/chunks/BLdpEbjh.js","_app/immutable/chunks/0MgMqBYX.js","_app/immutable/chunks/ixkyb_BU.js","_app/immutable/chunks/B77zAZak.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/2Vj7RCXa.js"];
export const stylesheets = ["_app/immutable/assets/9.JrsNaftL.css"];
export const fonts = [];
