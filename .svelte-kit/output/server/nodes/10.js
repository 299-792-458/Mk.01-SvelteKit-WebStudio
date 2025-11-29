

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/labs/_slug_/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/labs/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/10.eWxEOHLL.js","_app/immutable/chunks/C4dIo0Ib.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/BLdpEbjh.js","_app/immutable/chunks/Bs1MC0Rf.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/3U6Pcii3.js","_app/immutable/chunks/zhyhWt5z.js","_app/immutable/chunks/5oETQYrm.js","_app/immutable/chunks/BphrRuDN.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js","_app/immutable/chunks/IGctwN7D.js","_app/immutable/chunks/DB1uTKlw.js","_app/immutable/chunks/CrNrCoHn.js","_app/immutable/chunks/OD9XGXKR.js"];
export const stylesheets = ["_app/immutable/assets/10.CHw8jJPj.css"];
export const fonts = [];
