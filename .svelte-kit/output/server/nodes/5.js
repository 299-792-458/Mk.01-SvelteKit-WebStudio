import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.XXuALVPp.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/ixkyb_BU.js","_app/immutable/chunks/B77zAZak.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/2Vj7RCXa.js"];
export const stylesheets = [];
export const fonts = [];
