import * as universal from '../entries/pages/labs/_page.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/labs/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/labs/+page.ts";
export const imports = ["_app/immutable/nodes/9.B6x2j16E.js","_app/immutable/chunks/BLdpEbjh.js","_app/immutable/chunks/0MgMqBYX.js","_app/immutable/chunks/y6xqYb4z.js","_app/immutable/chunks/DlOZeHIp.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/C1jHKAAE.js"];
export const stylesheets = ["_app/immutable/assets/9.JrsNaftL.css"];
export const fonts = [];
