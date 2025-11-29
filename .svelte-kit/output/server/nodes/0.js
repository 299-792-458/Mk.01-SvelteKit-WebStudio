

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C559EOHh.js","_app/immutable/chunks/ixkyb_BU.js","_app/immutable/chunks/B77zAZak.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/JWFtgswn.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/Bo3HDKmY.js","_app/immutable/chunks/DWzyXtEP.js","_app/immutable/chunks/Dk3cAoLM.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/0MgMqBYX.js"];
export const stylesheets = ["_app/immutable/assets/0.Bgvj7ZCK.css"];
export const fonts = [];
