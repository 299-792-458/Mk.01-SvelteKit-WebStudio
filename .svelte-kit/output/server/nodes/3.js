import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.Dap3_-1g.js","_app/immutable/chunks/0MgMqBYX.js","_app/immutable/chunks/CRRLRcQ9.js","_app/immutable/chunks/DFFNIQzi.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/C_SfdwSR.js"];
export const stylesheets = ["_app/immutable/assets/3.PXM6Cf4l.css"];
export const fonts = [];
