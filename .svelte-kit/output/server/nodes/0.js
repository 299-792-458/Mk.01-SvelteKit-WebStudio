

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BmvNhnku.js","_app/immutable/chunks/B9MqONo3.js","_app/immutable/chunks/BBE0ZLmY.js","_app/immutable/chunks/Dk7LjVxE.js","_app/immutable/chunks/CkjLDrUC.js","_app/immutable/chunks/ypls4ImH.js","_app/immutable/chunks/B3lj6DLC.js","_app/immutable/chunks/9nPz2mZH.js","_app/immutable/chunks/BhbnTffJ.js","_app/immutable/chunks/D7RmMKMa.js","_app/immutable/chunks/BjN9h_r5.js","_app/immutable/chunks/7bQ29Cxe.js","_app/immutable/chunks/-TS2BfOP.js","_app/immutable/chunks/DlRIRmTc.js","_app/immutable/chunks/BJojrY4f.js","_app/immutable/chunks/BsUIXaUf.js","_app/immutable/chunks/C4dIo0Ib.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/Bs1MC0Rf.js"];
export const stylesheets = ["_app/immutable/assets/0.WRh9wA_o.css"];
export const fonts = [];
