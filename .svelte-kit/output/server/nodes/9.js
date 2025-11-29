

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/labs/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/labs/+page.ts";
export const imports = ["_app/immutable/nodes/9.BhSSdwhl.js","_app/immutable/chunks/BLdpEbjh.js","_app/immutable/chunks/Bs1MC0Rf.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/3U6Pcii3.js","_app/immutable/chunks/zhyhWt5z.js","_app/immutable/chunks/5oETQYrm.js","_app/immutable/chunks/BphrRuDN.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js","_app/immutable/chunks/IGctwN7D.js","_app/immutable/chunks/DB1uTKlw.js","_app/immutable/chunks/CrNrCoHn.js"];
export const stylesheets = ["_app/immutable/assets/9.B5cl4gIw.css"];
export const fonts = [];
