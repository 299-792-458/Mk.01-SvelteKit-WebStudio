import * as universal from '../entries/pages/labs/_slug_/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/labs/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/labs/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/10.hmZPHdFV.js","_app/immutable/chunks/Bo3HDKmY.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/BLdpEbjh.js","_app/immutable/chunks/0MgMqBYX.js","_app/immutable/chunks/CRRLRcQ9.js","_app/immutable/chunks/DFFNIQzi.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/C_SfdwSR.js","_app/immutable/chunks/CnyBvu9v.js"];
export const stylesheets = ["_app/immutable/assets/10.CDhq1t8s.css"];
export const fonts = [];
