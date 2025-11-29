import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DJSqtyBt.js","_app/immutable/chunks/CRRLRcQ9.js","_app/immutable/chunks/DFFNIQzi.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/zocGJ-2H.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/Bo3HDKmY.js","_app/immutable/chunks/CjukZBpa.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/0MgMqBYX.js","_app/immutable/chunks/BbKa4Sr3.js"];
export const stylesheets = ["_app/immutable/assets/0.Bgvj7ZCK.css"];
export const fonts = [];
