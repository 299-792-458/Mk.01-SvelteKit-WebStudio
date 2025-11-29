

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/privacy/+page.ts";
export const imports = ["_app/immutable/nodes/12.0KG2wyHX.js","_app/immutable/chunks/Bs1MC0Rf.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/DB1uTKlw.js","_app/immutable/chunks/CrNrCoHn.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js"];
export const stylesheets = [];
export const fonts = [];
