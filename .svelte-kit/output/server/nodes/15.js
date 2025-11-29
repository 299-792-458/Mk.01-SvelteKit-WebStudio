import * as server from '../entries/pages/work/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.DvqaouTM.js","_app/immutable/chunks/ixkyb_BU.js","_app/immutable/chunks/B77zAZak.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/2Vj7RCXa.js"];
export const stylesheets = ["_app/immutable/assets/15.De1cwOL7.css"];
export const fonts = [];
