import * as server from '../entries/pages/work/_slug_/_page.server.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/16.C8lJCAKt.js","_app/immutable/chunks/CRRLRcQ9.js","_app/immutable/chunks/DFFNIQzi.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/C_SfdwSR.js","_app/immutable/chunks/CnyBvu9v.js"];
export const stylesheets = ["_app/immutable/assets/16.B8E-2UDv.css"];
export const fonts = [];
