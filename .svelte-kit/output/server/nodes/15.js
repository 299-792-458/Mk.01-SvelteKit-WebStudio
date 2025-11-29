import * as server from '../entries/pages/work/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.C2wga2Q3.js","_app/immutable/chunks/y6xqYb4z.js","_app/immutable/chunks/DlOZeHIp.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/C1jHKAAE.js"];
export const stylesheets = ["_app/immutable/assets/15.De1cwOL7.css"];
export const fonts = [];
