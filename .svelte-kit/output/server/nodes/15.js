import * as server from '../entries/pages/work/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.kFE8-JHf.js","_app/immutable/chunks/B9MqONo3.js","_app/immutable/chunks/BBE0ZLmY.js","_app/immutable/chunks/Dk7LjVxE.js","_app/immutable/chunks/7bQ29Cxe.js","_app/immutable/chunks/CkjLDrUC.js","_app/immutable/chunks/ypls4ImH.js","_app/immutable/chunks/B3lj6DLC.js","_app/immutable/chunks/BhbnTffJ.js","_app/immutable/chunks/D7RmMKMa.js","_app/immutable/chunks/BjN9h_r5.js","_app/immutable/chunks/DPv5_YfI.js","_app/immutable/chunks/9nPz2mZH.js"];
export const stylesheets = ["_app/immutable/assets/15.qfY7FW42.css"];
export const fonts = [];
