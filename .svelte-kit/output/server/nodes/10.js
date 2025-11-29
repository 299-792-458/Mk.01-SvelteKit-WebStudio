

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/labs/_slug_/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false
};
export const universal_id = "src/routes/labs/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/10.BdPZ4bOA.js","_app/immutable/chunks/Bo3HDKmY.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/BLdpEbjh.js","_app/immutable/chunks/0MgMqBYX.js","_app/immutable/chunks/ixkyb_BU.js","_app/immutable/chunks/B77zAZak.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/2Vj7RCXa.js","_app/immutable/chunks/5CTp3vFT.js"];
export const stylesheets = ["_app/immutable/assets/10.CDhq1t8s.css"];
export const fonts = [];
