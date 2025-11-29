

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.GYpwUna6.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/3U6Pcii3.js","_app/immutable/chunks/5oETQYrm.js","_app/immutable/chunks/BphrRuDN.js","_app/immutable/chunks/CrNrCoHn.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js","_app/immutable/chunks/IGctwN7D.js","_app/immutable/chunks/zhyhWt5z.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/DGPWSF_O.js","_app/immutable/chunks/Cd8JsXtf.js","_app/immutable/chunks/Dm0tW47e.js","_app/immutable/chunks/OLnwdVOP.js","_app/immutable/chunks/C4dIo0Ib.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/Bs1MC0Rf.js"];
export const stylesheets = ["_app/immutable/assets/0.WRh9wA_o.css"];
export const fonts = [];
