import * as server from '../entries/pages/work/_slug_/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.D-jM3vyq.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/3U6Pcii3.js","_app/immutable/chunks/zhyhWt5z.js","_app/immutable/chunks/5oETQYrm.js","_app/immutable/chunks/BphrRuDN.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js","_app/immutable/chunks/DB1uTKlw.js","_app/immutable/chunks/CrNrCoHn.js","_app/immutable/chunks/OD9XGXKR.js"];
export const stylesheets = ["_app/immutable/assets/16.HGNDnG2L.css"];
export const fonts = [];
