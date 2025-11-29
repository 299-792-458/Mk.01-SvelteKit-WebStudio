import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.C83JsZ1g.js","_app/immutable/chunks/B9MqONo3.js","_app/immutable/chunks/BBE0ZLmY.js","_app/immutable/chunks/Dk7LjVxE.js","_app/immutable/chunks/7bQ29Cxe.js","_app/immutable/chunks/CkjLDrUC.js","_app/immutable/chunks/BhbnTffJ.js","_app/immutable/chunks/D7RmMKMa.js","_app/immutable/chunks/BjN9h_r5.js","_app/immutable/chunks/9nPz2mZH.js","_app/immutable/chunks/BXmGTpSR.js","_app/immutable/chunks/B3lj6DLC.js","_app/immutable/chunks/DPv5_YfI.js","_app/immutable/chunks/DlRIRmTc.js"];
export const stylesheets = ["_app/immutable/assets/2.DIuAngbF.css"];
export const fonts = [];
