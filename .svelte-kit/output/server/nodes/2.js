import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.wHIj5sM4.js","_app/immutable/chunks/y6xqYb4z.js","_app/immutable/chunks/DlOZeHIp.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/wCBG9LZY.js","_app/immutable/chunks/C1jHKAAE.js"];
export const stylesheets = ["_app/immutable/assets/2.DlwmGmF4.css"];
export const fonts = [];
