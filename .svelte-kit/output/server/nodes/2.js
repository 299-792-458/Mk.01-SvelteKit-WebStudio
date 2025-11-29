import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DC8jxEg-.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/zhyhWt5z.js","_app/immutable/chunks/3U6Pcii3.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js","_app/immutable/chunks/IGctwN7D.js","_app/immutable/chunks/Cd8JsXtf.js","_app/immutable/chunks/Dm0tW47e.js","_app/immutable/chunks/CrNrCoHn.js","_app/immutable/chunks/OD9XGXKR.js","_app/immutable/chunks/BphrRuDN.js","_app/immutable/chunks/DB1uTKlw.js","_app/immutable/chunks/DGPWSF_O.js"];
export const stylesheets = ["_app/immutable/assets/2.DIuAngbF.css"];
export const fonts = [];
