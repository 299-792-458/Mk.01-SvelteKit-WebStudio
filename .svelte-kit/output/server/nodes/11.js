

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/open-source/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/open-source/+page.ts";
export const imports = ["_app/immutable/nodes/11.HKlYhHs8.js","_app/immutable/chunks/Bs1MC0Rf.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/3U6Pcii3.js","_app/immutable/chunks/zhyhWt5z.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js","_app/immutable/chunks/DB1uTKlw.js","_app/immutable/chunks/CrNrCoHn.js"];
export const stylesheets = [];
export const fonts = [];
