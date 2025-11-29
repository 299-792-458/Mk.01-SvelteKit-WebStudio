import { c as create_ssr_component, a as subscribe, o as onDestroy, b as add_attribute, e as each, d as escape, n as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { w as writable, d as derived } from "../../chunks/index.js";
import { b as buildSeo, s as siteConfig } from "../../chunks/seo.js";
import { p as page } from "../../chunks/stores.js";
const navigationConfig = {
  commandPalette: [
    {
      title: "Navigate",
      actions: [
        { label: "Home", href: "/" },
        { label: "View work", href: "/work" },
        { label: "Open labs", href: "/labs" },
        { label: "Read journal", href: "/blog" },
        { label: "Meet the studio", href: "/about" },
        { label: "Contact us", href: "/contact", accent: "primary" }
      ]
    },
    {
      title: "Quick Actions",
      actions: [
        { label: "Toggle theme", href: "#theme", icon: "sun-moon" },
        { label: "Play ambient audio", href: "#audio", icon: "waveform" },
        { label: "Download deck", href: "/deck.pdf", icon: "download", accent: "secondary" }
      ]
    }
  ]
};
const defaultState = {
  theme: "day",
  isCommandPaletteOpen: false,
  isAmbientAudioPlaying: false
};
function createExperienceStore(config) {
  const state = writable({
    ...defaultState,
    theme: "day"
  });
  return {
    subscribe: state.subscribe,
    setTheme: (value) => state.update((current) => ({
      ...current,
      theme: value
    })),
    toggleTheme: () => state.update((current) => ({
      ...current,
      theme: current.theme === "day" ? "night" : current.theme === "night" ? "aurora" : "day"
    })),
    openCommandPalette: () => state.update((current) => ({
      ...current,
      isCommandPaletteOpen: true
    })),
    closeCommandPalette: () => state.update((current) => ({
      ...current,
      isCommandPaletteOpen: false
    })),
    toggleAmbientAudio: () => state.update((current) => ({
      ...current,
      isAmbientAudioPlaying: !current.isAmbientAudioPlaying
    }))
  };
}
const experienceStore = createExperienceStore();
const css$1 = {
  code: ".palette-overlay.svelte-1u267kf.svelte-1u267kf{position:fixed;inset:0;z-index:200;display:grid;place-items:center}.backdrop.svelte-1u267kf.svelte-1u267kf{position:absolute;inset:0;background:rgba(4, 9, 24, 0.75);backdrop-filter:blur(18px);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0;margin:0}.palette.svelte-1u267kf.svelte-1u267kf{position:relative;z-index:2;width:min(680px, 92vw);border-radius:20px;border:1px solid rgba(255, 255, 255, 0.1);background:radial-gradient(\n			120% 140% at 50% 0%,\n			rgba(47, 93, 255, 0.18),\n			rgba(9, 13, 31, 0.92)\n		);box-shadow:0 35px 90px rgba(5, 11, 35, 0.45);display:grid;gap:0.35rem;padding:1.1rem 1.25rem 1rem;color:rgba(226, 232, 255, 0.96)}header.svelte-1u267kf.svelte-1u267kf{display:flex;align-items:center;gap:0.75rem}input.svelte-1u267kf.svelte-1u267kf{flex:1;padding:0.85rem 1rem;border-radius:14px;border:1px solid rgba(255, 255, 255, 0.14);background:rgba(9, 13, 31, 0.55);color:inherit;font-size:0.95rem;box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.04)}input.svelte-1u267kf.svelte-1u267kf::-moz-placeholder{color:rgba(226, 232, 255, 0.55)}input.svelte-1u267kf.svelte-1u267kf::placeholder{color:rgba(226, 232, 255, 0.55)}.close.svelte-1u267kf.svelte-1u267kf{width:2.4rem;height:2.4rem;border-radius:999px;border:1px solid rgba(255, 255, 255, 0.12);background:rgba(255, 255, 255, 0.08);color:inherit;font-size:1.4rem;line-height:1;display:inline-flex;align-items:center;justify-content:center}section.svelte-1u267kf.svelte-1u267kf{max-height:340px;overflow-y:auto;padding-right:0.25rem}ul.svelte-1u267kf.svelte-1u267kf{display:grid;gap:0.4rem}li.svelte-1u267kf a.svelte-1u267kf{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:0.85rem 1rem;border-radius:14px;text-decoration:none;color:inherit;background:rgba(255, 255, 255, 0.04);border:1px solid transparent;transition:transform 180ms ease,\n			border 180ms ease,\n			background 180ms ease}li.svelte-1u267kf a.svelte-1u267kf:hover,li.svelte-1u267kf a.svelte-1u267kf:focus-visible{transform:translateX(4px);border-color:rgba(255, 255, 255, 0.18);background:rgba(47, 93, 255, 0.18)}.meta.svelte-1u267kf.svelte-1u267kf{display:grid;gap:0.2rem}.label.svelte-1u267kf.svelte-1u267kf{font-weight:600}.description.svelte-1u267kf.svelte-1u267kf{font-size:0.75rem;color:rgba(226, 232, 255, 0.65)}.accent.svelte-1u267kf.svelte-1u267kf{font-size:0.65rem;text-transform:uppercase;letter-spacing:0.18em;padding:0.35rem 0.6rem;border-radius:999px;color:rgba(9, 13, 31, 0.8);font-weight:600}.accent.primary.svelte-1u267kf.svelte-1u267kf{background:rgba(47, 93, 255, 0.75)}.accent.secondary.svelte-1u267kf.svelte-1u267kf{background:rgba(255, 107, 203, 0.7)}.accent.contrast.svelte-1u267kf.svelte-1u267kf{background:rgba(255, 255, 255, 0.8)}.empty.svelte-1u267kf.svelte-1u267kf{text-align:center;padding:2rem 0;color:rgba(226, 232, 255, 0.6);font-size:0.9rem}footer.svelte-1u267kf.svelte-1u267kf{display:flex;align-items:center;justify-content:flex-end;gap:1.2rem;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.18em;color:rgba(226, 232, 255, 0.5)}footer.svelte-1u267kf div.svelte-1u267kf{display:inline-flex;align-items:center;gap:0.4rem}kbd.svelte-1u267kf.svelte-1u267kf{display:inline-flex;align-items:center;justify-content:center;padding:0.2rem 0.4rem;border-radius:6px;border:1px solid rgba(255, 255, 255, 0.2);background:rgba(9, 13, 31, 0.55);font-family:'JetBrains Mono', monospace;font-size:0.7rem;color:rgba(226, 232, 255, 0.8)}",
  map: '{"version":3,"file":"CommandPalette.svelte","sources":["CommandPalette.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onDestroy, onMount } from \\"svelte\\";\\nimport { derived } from \\"svelte/store\\";\\nimport { navigationConfig } from \\"$config/navigation.config\\";\\nimport { experienceStore } from \\"$services/experience\\";\\nconst sections = navigationConfig.commandPalette;\\nlet query = \\"\\";\\nlet inputElement = null;\\nconst isOpen = derived(experienceStore, ($experience) => $experience.isCommandPaletteOpen);\\nconst allActions = sections.flatMap(\\n  (section) => section.actions.map((action) => ({\\n    section: section.title,\\n    ...action\\n  }))\\n);\\n$: filteredActions = query.trim().length === 0 ? allActions : allActions.filter((action) => {\\n  const haystack = `${action.label} ${action.description ?? \\"\\"}`.toLowerCase();\\n  return haystack.includes(query.trim().toLowerCase());\\n});\\nfunction closePalette() {\\n  experienceStore.closeCommandPalette();\\n  query = \\"\\";\\n}\\nfunction handleKeydown(event) {\\n  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === \\"k\\") {\\n    event.preventDefault();\\n    if (event.shiftKey) {\\n      experienceStore.toggleTheme();\\n      return;\\n    }\\n    if (event.altKey) {\\n      experienceStore.toggleAmbientAudio();\\n      return;\\n    }\\n    experienceStore.openCommandPalette();\\n  }\\n  if (event.key === \\"Escape\\") {\\n    closePalette();\\n  }\\n}\\nonMount(() => {\\n  window.addEventListener(\\"keydown\\", handleKeydown);\\n});\\nonDestroy(() => {\\n  window.removeEventListener(\\"keydown\\", handleKeydown);\\n});\\n$: if ($isOpen && inputElement) {\\n  const frame = requestAnimationFrame(() => {\\n    inputElement?.focus();\\n  });\\n  onDestroy(() => cancelAnimationFrame(frame));\\n}\\n<\/script>\\n\\n{#if $isOpen}\\n\\t<div class=\\"palette-overlay\\" role=\\"dialog\\" aria-modal=\\"true\\">\\n\\t\\t<button type=\\"button\\" class=\\"backdrop\\" on:click={closePalette} aria-label=\\"Close palette\\" />\\n\\t\\t<div class=\\"palette\\">\\n\\t\\t\\t<header>\\n\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\tbind:this={inputElement}\\n\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\tplaceholder=\\"Search actions, pages, or ideas…\\"\\n\\t\\t\\t\\t\\tbind:value={query}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t\\t<button type=\\"button\\" class=\\"close\\" on:click={closePalette} aria-label=\\"Close palette\\">\\n\\t\\t\\t\\t\\t×\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\n\\t\\t\\t<section>\\n\\t\\t\\t\\t{#if filteredActions.length === 0}\\n\\t\\t\\t\\t\\t<p class=\\"empty\\">No results yet. Try different keywords.</p>\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t{#each filteredActions as action, index (action.href + index)}\\n\\t\\t\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href={action.href} on:click={closePalette}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"label\\">{action.label}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if action.description}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"description\\">{action.description}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if action.accent}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class={`accent ${action.accent}`}>{action.accent}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</section>\\n\\n\\t\\t\\t<footer>\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<kbd>⌘</kbd>\\n\\t\\t\\t\\t\\t<kbd>K</kbd>\\n\\t\\t\\t\\t\\t<span>Open palette</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<kbd>⌘</kbd>\\n\\t\\t\\t\\t\\t<kbd>⇧</kbd>\\n\\t\\t\\t\\t\\t<kbd>K</kbd>\\n\\t\\t\\t\\t\\t<span>Cycle theme</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<kbd>⌘</kbd>\\n\\t\\t\\t\\t\\t<kbd>⌥</kbd>\\n\\t\\t\\t\\t\\t<kbd>K</kbd>\\n\\t\\t\\t\\t\\t<span>Ambient audio</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</footer>\\n\\t\\t</div>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.palette-overlay {\\n\\t\\tposition: fixed;\\n\\t\\tinset: 0;\\n\\t\\tz-index: 200;\\n\\t\\tdisplay: grid;\\n\\t\\tplace-items: center;\\n\\t}\\n\\n\\t.backdrop {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0;\\n\\t\\tbackground: rgba(4, 9, 24, 0.75);\\n\\t\\tbackdrop-filter: blur(18px);\\n\\t\\t-webkit-appearance: none;\\n\\t\\t   -moz-appearance: none;\\n\\t\\t        appearance: none;\\n\\t\\tborder: none;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\t.palette {\\n\\t\\tposition: relative;\\n\\t\\tz-index: 2;\\n\\t\\twidth: min(680px, 92vw);\\n\\t\\tborder-radius: 20px;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.1);\\n\\t\\tbackground: radial-gradient(\\n\\t\\t\\t120% 140% at 50% 0%,\\n\\t\\t\\trgba(47, 93, 255, 0.18),\\n\\t\\t\\trgba(9, 13, 31, 0.92)\\n\\t\\t);\\n\\t\\tbox-shadow: 0 35px 90px rgba(5, 11, 35, 0.45);\\n\\t\\tdisplay: grid;\\n\\t\\tgap: 0.35rem;\\n\\t\\tpadding: 1.1rem 1.25rem 1rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.96);\\n\\t}\\n\\n\\theader {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tgap: 0.75rem;\\n\\t}\\n\\n\\tinput {\\n\\t\\tflex: 1;\\n\\t\\tpadding: 0.85rem 1rem;\\n\\t\\tborder-radius: 14px;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.14);\\n\\t\\tbackground: rgba(9, 13, 31, 0.55);\\n\\t\\tcolor: inherit;\\n\\t\\tfont-size: 0.95rem;\\n\\t\\tbox-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);\\n\\t}\\n\\n\\tinput::-moz-placeholder {\\n\\t\\tcolor: rgba(226, 232, 255, 0.55);\\n\\t}\\n\\n\\tinput::placeholder {\\n\\t\\tcolor: rgba(226, 232, 255, 0.55);\\n\\t}\\n\\n\\t.close {\\n\\t\\twidth: 2.4rem;\\n\\t\\theight: 2.4rem;\\n\\t\\tborder-radius: 999px;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.12);\\n\\t\\tbackground: rgba(255, 255, 255, 0.08);\\n\\t\\tcolor: inherit;\\n\\t\\tfont-size: 1.4rem;\\n\\t\\tline-height: 1;\\n\\t\\tdisplay: inline-flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\tsection {\\n\\t\\tmax-height: 340px;\\n\\t\\toverflow-y: auto;\\n\\t\\tpadding-right: 0.25rem;\\n\\t}\\n\\n\\tul {\\n\\t\\tdisplay: grid;\\n\\t\\tgap: 0.4rem;\\n\\t}\\n\\n\\tli a {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t\\tgap: 1rem;\\n\\t\\tpadding: 0.85rem 1rem;\\n\\t\\tborder-radius: 14px;\\n\\t\\ttext-decoration: none;\\n\\t\\tcolor: inherit;\\n\\t\\tbackground: rgba(255, 255, 255, 0.04);\\n\\t\\tborder: 1px solid transparent;\\n\\t\\ttransition:\\n\\t\\t\\ttransform 180ms ease,\\n\\t\\t\\tborder 180ms ease,\\n\\t\\t\\tbackground 180ms ease;\\n\\t}\\n\\n\\tli a:hover,\\n\\tli a:focus-visible {\\n\\t\\ttransform: translateX(4px);\\n\\t\\tborder-color: rgba(255, 255, 255, 0.18);\\n\\t\\tbackground: rgba(47, 93, 255, 0.18);\\n\\t}\\n\\n\\t.meta {\\n\\t\\tdisplay: grid;\\n\\t\\tgap: 0.2rem;\\n\\t}\\n\\n\\t.label {\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\t.description {\\n\\t\\tfont-size: 0.75rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.65);\\n\\t}\\n\\n\\t.accent {\\n\\t\\tfont-size: 0.65rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 0.18em;\\n\\t\\tpadding: 0.35rem 0.6rem;\\n\\t\\tborder-radius: 999px;\\n\\t\\tcolor: rgba(9, 13, 31, 0.8);\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\t.accent.primary {\\n\\t\\tbackground: rgba(47, 93, 255, 0.75);\\n\\t}\\n\\n\\t.accent.secondary {\\n\\t\\tbackground: rgba(255, 107, 203, 0.7);\\n\\t}\\n\\n\\t.accent.contrast {\\n\\t\\tbackground: rgba(255, 255, 255, 0.8);\\n\\t}\\n\\n\\t.empty {\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 2rem 0;\\n\\t\\tcolor: rgba(226, 232, 255, 0.6);\\n\\t\\tfont-size: 0.9rem;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tgap: 1.2rem;\\n\\t\\tfont-size: 0.7rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 0.18em;\\n\\t\\tcolor: rgba(226, 232, 255, 0.5);\\n\\t}\\n\\n\\tfooter div {\\n\\t\\tdisplay: inline-flex;\\n\\t\\talign-items: center;\\n\\t\\tgap: 0.4rem;\\n\\t}\\n\\n\\tkbd {\\n\\t\\tdisplay: inline-flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tpadding: 0.2rem 0.4rem;\\n\\t\\tborder-radius: 6px;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.2);\\n\\t\\tbackground: rgba(9, 13, 31, 0.55);\\n\\t\\tfont-family: \'JetBrains Mono\', monospace;\\n\\t\\tfont-size: 0.7rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.8);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const CommandPalette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredActions;
  let $isOpen, $$unsubscribe_isOpen;
  const sections = navigationConfig.commandPalette;
  let query = "";
  let inputElement = null;
  const isOpen = derived(experienceStore, ($experience) => $experience.isCommandPaletteOpen);
  $$unsubscribe_isOpen = subscribe(isOpen, (value) => $isOpen = value);
  const allActions = sections.flatMap((section) => section.actions.map((action) => ({ section: section.title, ...action })));
  function closePalette() {
    experienceStore.closeCommandPalette();
    query = "";
  }
  function handleKeydown(event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (event.shiftKey) {
        experienceStore.toggleTheme();
        return;
      }
      if (event.altKey) {
        experienceStore.toggleAmbientAudio();
        return;
      }
      experienceStore.openCommandPalette();
    }
    if (event.key === "Escape") {
      closePalette();
    }
  }
  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
  $$result.css.add(css$1);
  filteredActions = query.trim().length === 0 ? allActions : allActions.filter((action) => {
    const haystack = `${action.label} ${action.description ?? ""}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });
  $$unsubscribe_isOpen();
  return `${$isOpen ? `<div class="palette-overlay svelte-1u267kf" role="dialog" aria-modal="true"><button type="button" class="backdrop svelte-1u267kf" aria-label="Close palette"></button> <div class="palette svelte-1u267kf"><header class="svelte-1u267kf"><input type="text" placeholder="Search actions, pages, or ideas…" class="svelte-1u267kf"${add_attribute("this", inputElement, 0)}${add_attribute("value", query, 0)}> <button type="button" class="close svelte-1u267kf" aria-label="Close palette" data-svelte-h="svelte-a7thcn">×</button></header> <section class="svelte-1u267kf">${filteredActions.length === 0 ? `<p class="empty svelte-1u267kf" data-svelte-h="svelte-mr009b">No results yet. Try different keywords.</p>` : `<ul class="svelte-1u267kf">${each(filteredActions, (action, index) => {
    return `<li class="svelte-1u267kf"><a${add_attribute("href", action.href, 0)} class="svelte-1u267kf"><div class="meta svelte-1u267kf"><span class="label svelte-1u267kf">${escape(action.label)}</span> ${action.description ? `<span class="description svelte-1u267kf">${escape(action.description)}</span>` : ``}</div> ${action.accent ? `<span class="${escape(null_to_empty(`accent ${action.accent}`), true) + " svelte-1u267kf"}">${escape(action.accent)}</span>` : ``}</a> </li>`;
  })}</ul>`}</section> <footer class="svelte-1u267kf" data-svelte-h="svelte-hcbd7n"><div class="svelte-1u267kf"><kbd class="svelte-1u267kf">⌘</kbd> <kbd class="svelte-1u267kf">K</kbd> <span>Open palette</span></div> <div class="svelte-1u267kf"><kbd class="svelte-1u267kf">⌘</kbd> <kbd class="svelte-1u267kf">⇧</kbd> <kbd class="svelte-1u267kf">K</kbd> <span>Cycle theme</span></div> <div class="svelte-1u267kf"><kbd class="svelte-1u267kf">⌘</kbd> <kbd class="svelte-1u267kf">⌥</kbd> <kbd class="svelte-1u267kf">K</kbd> <span>Ambient audio</span></div></footer></div></div>` : ``}`;
});
const css = {
  code: ".ambient-toggle.svelte-16cwmuw{position:fixed;right:1.5rem;bottom:1.5rem;z-index:120;display:inline-flex;align-items:center;gap:0.75rem;padding:0.75rem 1.1rem;border-radius:999px;border:1px solid rgba(255, 255, 255, 0.12);background:rgba(9, 13, 31, 0.55);color:rgba(226, 232, 255, 0.9);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.28em;cursor:pointer;backdrop-filter:blur(12px);box-shadow:0 12px 28px rgba(5, 8, 22, 0.35)}.pulse.svelte-16cwmuw{width:0.9rem;height:0.9rem;border-radius:999px;background:radial-gradient(circle, rgba(47, 93, 255, 0.9), rgba(47, 93, 255, 0.2));position:relative}.pulse.svelte-16cwmuw::after{content:'';position:absolute;inset:-0.35rem;border-radius:inherit;border:2px solid rgba(47, 93, 255, 0.4);animation:svelte-16cwmuw-ripple 2.2s ease-out infinite}.label.svelte-16cwmuw{white-space:nowrap}@keyframes svelte-16cwmuw-ripple{0%{transform:scale(0.6);opacity:0.9}100%{transform:scale(1.4);opacity:0}}@media(max-width: 640px){.ambient-toggle.svelte-16cwmuw{right:1rem;bottom:1rem;gap:0.5rem;padding:0.6rem 0.9rem;letter-spacing:0.2em}}",
  map: `{"version":3,"file":"AmbientAudio.svelte","sources":["AmbientAudio.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onDestroy, onMount } from \\"svelte\\";\\nimport { experienceStore } from \\"$services/experience\\";\\nimport { derived } from \\"svelte/store\\";\\nconst isPlaying = derived(experienceStore, ($experience) => $experience.isAmbientAudioPlaying);\\nlet audioElement = null;\\nconst ambienceSrc = \\"https://cdn.pixabay.com/download/audio/2023/11/06/audio_3a1babf1d8.mp3?filename=cyberpunk-city-ambient-175576.mp3\\";\\nfunction toggle() {\\n  experienceStore.toggleAmbientAudio();\\n}\\n$: {\\n  if (audioElement) {\\n    if ($isPlaying) {\\n      audioElement.play().catch(() => {\\n        experienceStore.toggleAmbientAudio();\\n      });\\n    } else {\\n      audioElement.pause();\\n    }\\n  }\\n}\\nonMount(() => {\\n  if (!audioElement) return;\\n  audioElement.volume = 0.35;\\n  audioElement.loop = true;\\n});\\nonDestroy(() => {\\n  audioElement?.pause();\\n});\\n<\/script>\\n\\n<button class=\\"ambient-toggle\\" type=\\"button\\" on:click={toggle}>\\n\\t<span class=\\"pulse\\" aria-hidden=\\"true\\" />\\n\\t{#if $isPlaying}\\n\\t\\t<span class=\\"label\\">Ambient on</span>\\n\\t{:else}\\n\\t\\t<span class=\\"label\\">Ambient off</span>\\n\\t{/if}\\n</button>\\n\\n<audio bind:this={audioElement} src={ambienceSrc} preload=\\"auto\\" />\\n\\n<style>\\n\\t.ambient-toggle {\\n\\t\\tposition: fixed;\\n\\t\\tright: 1.5rem;\\n\\t\\tbottom: 1.5rem;\\n\\t\\tz-index: 120;\\n\\t\\tdisplay: inline-flex;\\n\\t\\talign-items: center;\\n\\t\\tgap: 0.75rem;\\n\\t\\tpadding: 0.75rem 1.1rem;\\n\\t\\tborder-radius: 999px;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.12);\\n\\t\\tbackground: rgba(9, 13, 31, 0.55);\\n\\t\\tcolor: rgba(226, 232, 255, 0.9);\\n\\t\\tfont-size: 0.75rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 0.28em;\\n\\t\\tcursor: pointer;\\n\\t\\tbackdrop-filter: blur(12px);\\n\\t\\tbox-shadow: 0 12px 28px rgba(5, 8, 22, 0.35);\\n\\t}\\n\\n\\t.pulse {\\n\\t\\twidth: 0.9rem;\\n\\t\\theight: 0.9rem;\\n\\t\\tborder-radius: 999px;\\n\\t\\tbackground: radial-gradient(circle, rgba(47, 93, 255, 0.9), rgba(47, 93, 255, 0.2));\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.pulse::after {\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\tinset: -0.35rem;\\n\\t\\tborder-radius: inherit;\\n\\t\\tborder: 2px solid rgba(47, 93, 255, 0.4);\\n\\t\\tanimation: ripple 2.2s ease-out infinite;\\n\\t}\\n\\n\\t.label {\\n\\t\\twhite-space: nowrap;\\n\\t}\\n\\n\\t@keyframes ripple {\\n\\t\\t0% {\\n\\t\\t\\ttransform: scale(0.6);\\n\\t\\t\\topacity: 0.9;\\n\\t\\t}\\n\\n\\t\\t100% {\\n\\t\\t\\ttransform: scale(1.4);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t@media (max-width: 640px) {\\n\\t\\t.ambient-toggle {\\n\\t\\t\\tright: 1rem;\\n\\t\\t\\tbottom: 1rem;\\n\\t\\t\\tgap: 0.5rem;\\n\\t\\t\\tpadding: 0.6rem 0.9rem;\\n\\t\\t\\tletter-spacing: 0.2em;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0CC,8BAAgB,CACf,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,OAAO,CACZ,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CACjC,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/B,SAAS,CAAE,OAAO,CAClB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,KAAK,IAAI,CAAC,CAC3B,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAC5C,CAEA,qBAAO,CACN,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,aAAa,CAAE,KAAK,CACpB,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CACnF,QAAQ,CAAE,QACX,CAEA,qBAAM,OAAQ,CACb,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,QAAQ,CACf,aAAa,CAAE,OAAO,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACxC,SAAS,CAAE,qBAAM,CAAC,IAAI,CAAC,QAAQ,CAAC,QACjC,CAEA,qBAAO,CACN,WAAW,CAAE,MACd,CAEA,WAAW,qBAAO,CACjB,EAAG,CACF,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GACV,CAEA,IAAK,CACJ,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,CACV,CACD,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,8BAAgB,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,MAAM,CACX,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,cAAc,CAAE,KACjB,CACD"}`
};
const ambienceSrc = "https://cdn.pixabay.com/download/audio/2023/11/06/audio_3a1babf1d8.mp3?filename=cyberpunk-city-ambient-175576.mp3";
const AmbientAudio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isPlaying, $$unsubscribe_isPlaying;
  const isPlaying = derived(experienceStore, ($experience) => $experience.isAmbientAudioPlaying);
  $$unsubscribe_isPlaying = subscribe(isPlaying, (value) => $isPlaying = value);
  let audioElement = null;
  onDestroy(() => {
  });
  $$result.css.add(css);
  $$unsubscribe_isPlaying();
  return `<button class="ambient-toggle svelte-16cwmuw" type="button"><span class="pulse svelte-16cwmuw" aria-hidden="true"></span> ${$isPlaying ? `<span class="label svelte-16cwmuw" data-svelte-h="svelte-85dtru">Ambient on</span>` : `<span class="label svelte-16cwmuw" data-svelte-h="svelte-19ptqxg">Ambient off</span>`}</button> <audio${add_attribute("src", ambienceSrc, 0)} preload="auto"${add_attribute("this", audioElement, 0)}></audio>`;
});
const SiteFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Journal" },
    {
      href: "/#capabilities",
      label: "Capabilities"
    }
  ];
  const resources = [{ href: "/blog", label: "Articles" }];
  const socials = [
    {
      href: "https://github.com/",
      label: "GitHub"
    },
    {
      href: "https://dribbble.com/",
      label: "Dribbble"
    },
    { href: "https://x.com/", label: "X" },
    {
      href: "mailto:studio@mk1.dev",
      label: "Email"
    }
  ];
  return `<footer class="border-t border-base-300/60 bg-base-200/50 text-base-content/90"><div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8"><div class="space-y-4" data-svelte-h="svelte-xi95ce"><div class="flex items-center gap-3"><span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-base-100 shadow-xl">Mk</span> <div><p class="text-lg font-semibold">Mk.01 SvelteKit Studio</p> <p class="text-sm text-base-content/70">Creative lab for purposeful digital experiences.</p></div></div> <p class="text-sm leading-relaxed text-base-content/70">Crafting joyful web products, immersive narratives, and tools that empower makers across the
				globe.</p> <div class="flex gap-3 text-sm"><span class="badge badge-outline border-primary/40 text-primary">Available for collaborations</span> <span class="badge badge-outline border-secondary/40 text-secondary">Remote-first</span></div></div> <div class="space-y-3"><h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60" data-svelte-h="svelte-15squ6d">Navigate</h3> <ul class="space-y-2 text-sm">${each(quickLinks, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="transition-colors hover:text-primary">${escape(link.label)}</a> </li>`;
  })}</ul></div> <div class="space-y-3"><h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60" data-svelte-h="svelte-1870kuw">Resources</h3> <ul class="space-y-2 text-sm">${each(resources, (link) => {
    return `<li class="flex items-center gap-2"><a${add_attribute("href", link.href, 0)} class="transition-colors hover:text-primary">${escape(link.label)}</a> ${link.soon ? `<span class="badge badge-xs bg-base-300 text-[0.6rem] uppercase tracking-widest" data-svelte-h="svelte-ximf06">Soon</span>` : ``} </li>`;
  })}</ul></div> <div class="space-y-3"><h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60" data-svelte-h="svelte-7bf2t0">Connect</h3> <p class="text-sm text-base-content/70" data-svelte-h="svelte-19b3hkt">studio@mk1.dev<br>
				Global / Remote · Seoul ↔ San Francisco</p> <ul class="flex flex-wrap gap-3 text-sm">${each(socials, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="transition-colors hover:text-primary" rel="noreferrer">${escape(link.label)}</a> </li>`;
  })}</ul></div></div> <div class="border-t border-base-300/60"><div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-base-content/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Mk.01 SvelteKit Studio. Crafted with SvelteKit &amp; Tailwind.</p> <div class="flex gap-4" data-svelte-h="svelte-1npz67o"><a href="/privacy">Privacy</a> <a href="/terms">Terms</a></div></div></div></footer>`;
});
function setDocumentTheme(value) {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = value;
  }
}
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentExperience;
  let activeTheme;
  let $experienceStore, $$unsubscribe_experienceStore;
  $$unsubscribe_experienceStore = subscribe(experienceStore, (value) => $experienceStore = value);
  const themeMap = {
    day: "studio-light",
    night: "studio-dark",
    aurora: "studio-pro-dark"
  };
  currentExperience = $experienceStore;
  activeTheme = themeMap[currentExperience.theme] ?? "studio-light";
  {
    setDocumentTheme(activeTheme);
  }
  $$unsubscribe_experienceStore();
  return `<div${add_attribute("data-theme", activeTheme, 0)} class="min-h-screen bg-base-100 text-base-content transition-colors"><a href="#page-content" class="skip-link" data-svelte-h="svelte-xcekq8">Skip to content</a> <div class="flex min-h-screen flex-col"> <main id="page-content" tabindex="-1" class="flex-1 focus:outline-none">${slots.default ? slots.default({}) : ``}</main> ${validate_component(SiteFooter, "SiteFooter").$$render($$result, {}, {}, {})}</div> ${validate_component(CommandPalette, "CommandPalette").$$render($$result, {}, {}, {})} ${validate_component(AmbientAudio, "AmbientAudio").$$render($$result, {}, {}, {})}</div>`;
});
const SmoothScroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
function serializeJsonLd(payload) {
  if (!payload) return "";
  return JSON.stringify(payload).replace(/</g, "\\u003C");
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSeo;
  let jsonLdMarkup;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  currentSeo = data?.seo ?? buildSeo({ path: $page.url.pathname });
  jsonLdMarkup = currentSeo?.jsonLd != null ? (
    /* eslint-disable-next-line no-useless-escape */
    `<script type="application/ld+json">${serializeJsonLd(currentSeo.jsonLd)}<\/script>`
  ) : "";
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1eioyjo_START -->${$$result.title = `<title>${escape(currentSeo.title)}</title>`, ""}<meta name="description"${add_attribute("content", currentSeo.description, 0)}><link rel="canonical"${add_attribute("href", currentSeo.canonical, 0)}>${currentSeo.robots ? `<meta name="robots"${add_attribute("content", currentSeo.robots, 0)}>` : ``}<meta name="author"${add_attribute("content", siteConfig.name, 0)}>${each(currentSeo.meta, (meta) => {
    return `<meta${add_attribute("name", meta.name, 0)}${add_attribute("content", meta.content, 0)}>`;
  })}${each(currentSeo.openGraph, (og) => {
    return `<meta${add_attribute("property", og.property, 0)}${add_attribute("content", og.content, 0)}>`;
  })}${each(currentSeo.twitter, (twitter) => {
    return `<meta${add_attribute("name", twitter.name, 0)}${add_attribute("content", twitter.content, 0)}>`;
  })}<!-- HTML_TAG_START -->${jsonLdMarkup}<!-- HTML_TAG_END --><!-- HEAD_svelte-1eioyjo_END -->`, ""} ${validate_component(SmoothScroll, "SmoothScroll").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
