

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/labs/_slug_/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/labs/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/10.DZ5GxX4M.js","_app/immutable/chunks/C4dIo0Ib.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/BBE0ZLmY.js","_app/immutable/chunks/BLdpEbjh.js","_app/immutable/chunks/Bs1MC0Rf.js","_app/immutable/chunks/B9MqONo3.js","_app/immutable/chunks/Dk7LjVxE.js","_app/immutable/chunks/CkjLDrUC.js","_app/immutable/chunks/7bQ29Cxe.js","_app/immutable/chunks/ypls4ImH.js","_app/immutable/chunks/B3lj6DLC.js","_app/immutable/chunks/BhbnTffJ.js","_app/immutable/chunks/D7RmMKMa.js","_app/immutable/chunks/BjN9h_r5.js","_app/immutable/chunks/DPv5_YfI.js","_app/immutable/chunks/9nPz2mZH.js","_app/immutable/chunks/BXmGTpSR.js"];
export const stylesheets = ["_app/immutable/assets/10.CHw8jJPj.css"];
export const fonts = [];
