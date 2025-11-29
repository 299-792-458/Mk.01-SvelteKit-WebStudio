import * as server from '../entries/pages/work/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.B7JNhGkQ.js","_app/immutable/chunks/DjYzWUq-.js","_app/immutable/chunks/Cek28Tn4.js","_app/immutable/chunks/DiElNFOA.js","_app/immutable/chunks/zhyhWt5z.js","_app/immutable/chunks/3U6Pcii3.js","_app/immutable/chunks/5oETQYrm.js","_app/immutable/chunks/BphrRuDN.js","_app/immutable/chunks/CYjss8gg.js","_app/immutable/chunks/D_FzAnfC.js","_app/immutable/chunks/IGctwN7D.js","_app/immutable/chunks/DB1uTKlw.js","_app/immutable/chunks/CrNrCoHn.js"];
export const stylesheets = ["_app/immutable/assets/15.qfY7FW42.css"];
export const fonts = [];
