import{Q as o}from"./BBE0ZLmY.js";function i(e){if(o){const n=new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);throw n.name="Svelte error",n}else throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function a(){const e=new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);throw e.name="Svelte error",e}function u(e){const n=new Error(`lifecycle_function_unavailable
\`${e}(...)\` is not available on the server
https://svelte.dev/e/lifecycle_function_unavailable`);throw n.name="Svelte error",n}function _(){const e=new Error("server_context_required\nCould not resolve `render` context.\nhttps://svelte.dev/e/server_context_required");throw e.name="Svelte error",e}var t=null;function f(e){t=e}function p(e){return l("getContext").get(e)}function v(e,n){return l("setContext").set(e,n),n}function l(e){return t===null&&i(e),t.c??=new Map(c(t)||void 0)}function d(e){t={p:t,c:null,r:null},o&&(t.function=e,t.element=t.p?.element)}function m(){t=t.p}function c(e){let n=e.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}export{f as a,t as b,a as c,m as d,v as e,p as g,u as l,d as p,_ as s};
