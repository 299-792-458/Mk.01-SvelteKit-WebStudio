function n(){const e=new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);throw e.name="Svelte error",e}function t(e){const r=new Error(`lifecycle_function_unavailable
\`${e}(...)\` is not available on the server
https://svelte.dev/e/lifecycle_function_unavailable`);throw r.name="Svelte error",r}function o(){const e=new Error("server_context_required\nCould not resolve `render` context.\nhttps://svelte.dev/e/server_context_required");throw e.name="Svelte error",e}export{n as a,t as l,o as s};
