import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.GCMn5TC1.js","_app/immutable/chunks/y6xqYb4z.js","_app/immutable/chunks/DlOZeHIp.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/DFLlmlFN.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/Bo3HDKmY.js","_app/immutable/chunks/D86gbTgx.js","_app/immutable/chunks/DB7m2uUB.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/0MgMqBYX.js"];
export const stylesheets = ["_app/immutable/assets/0.DIsvhM0G.css"];
export const fonts = [];
