

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "load": null
};
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.C584l5vN.js","_app/immutable/chunks/Bs1MC0Rf.js","_app/immutable/chunks/B9MqONo3.js","_app/immutable/chunks/BBE0ZLmY.js","_app/immutable/chunks/Dk7LjVxE.js","_app/immutable/chunks/CkjLDrUC.js","_app/immutable/chunks/7bQ29Cxe.js","_app/immutable/chunks/BhbnTffJ.js","_app/immutable/chunks/D7RmMKMa.js","_app/immutable/chunks/DPv5_YfI.js","_app/immutable/chunks/9nPz2mZH.js"];
export const stylesheets = ["_app/immutable/assets/3.CA1OR0KE.css"];
export const fonts = [];
