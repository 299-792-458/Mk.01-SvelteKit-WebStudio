import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.D_WjX2JH.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/y6xqYb4z.js","_app/immutable/chunks/DlOZeHIp.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/C1jHKAAE.js"];
export const stylesheets = [];
export const fonts = [];
