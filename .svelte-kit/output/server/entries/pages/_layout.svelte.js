import { b as bind_props, e as ensure_array_like, a as attr, c as attr_class, s as stringify, d as store_get, u as unsubscribe_stores, f as slot, h as head } from "../../chunks/index.js";
import { V as fallback, W as getContext, X as escape_html } from "../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal";
import { w as writable, i as derived } from "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { b as buildSeo, s as siteConfig } from "../../chunks/seo.js";
import { h as html } from "../../chunks/html.js";
function ThemeToggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let theme = fallback($$props["theme"], "studio-light");
    $$renderer2.push(`<button type="button" class="btn btn-ghost btn-circle btn-sm" aria-label="Toggle color theme" aria-live="polite"><span class="sr-only">Toggle theme</span> `);
    if (theme === "studio-light") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-4 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 9a1 1 0 100 2H3a1 1 0 110-2h1zm13 0a1 1 0 110 2h-1a1 1 0 110-2h1zM5.636 5.636a1 1 0 011.414 0L8.05 6.636a1 1 0 11-1.414 1.414L5.636 7.05a1 1 0 010-1.414zm9.9 9.9a1 1 0 011.414 1.414l-.999.999a1 1 0 11-1.414-1.414l.999-.999zM5.636 14.364a1 1 0 010 1.414l-.999.999a1 1 0 11-1.414-1.414l.999-.999a1 1 0 011.414 0zM15.95 5.636a1 1 0 010 1.414L14.95 8.05a1 1 0 11-1.414-1.414l.999-.999a1 1 0 011.414 0z"></path></svg>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (theme === "studio-dark") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm6 0a1 1 0 011 1v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V6h-1a1 1 0 010-2h1V3a1 1 0 011-1zM3.293 7.293a1 1 0 011.414 0L6 8.586l1.293-1.293a1 1 0 111.414 1.414L7.414 10l1.293 1.293a1 1 0 01-1.414 1.414L6 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L4.586 10 3.293 8.707a1 1 0 010-1.414zM15 2a1 1 0 011 1v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V6h-1a1 1 0 010-2h1V3a1 1 0 011-1zm-5 10a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" clip-rule="evenodd"></path></svg>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></button>`);
    bind_props($$props, { theme });
  });
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function GlobalNav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let theme = fallback($$props["theme"], "studio-light");
    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Journal" }
    ];
    $$renderer2.push(`<div class="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4"><nav class="pointer-events-auto relative flex items-center gap-2 rounded-full border border-white/10 bg-base-100/60 p-2 shadow-glow backdrop-blur-surface transition-all duration-500 hover:scale-[1.01] hover:bg-base-100/80 supports-[backdrop-filter]:bg-base-100/40"><a href="/" class="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-transform duration-300 hover:rotate-12"><span class="font-display font-bold">M</span></a> <div class="hidden items-center gap-1 px-4 md:flex"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-primary ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href ? "bg-white/5 text-primary" : "text-base-content/80")}`)}>${escape_html(link.label)} `);
      if (store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"></span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex items-center gap-2 pl-2"><a href="/contact" class="btn btn-ghost btn-circle btn-sm hidden sm:flex" aria-label="Contact"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></a> `);
    ThemeToggle($$renderer2, { theme });
    $$renderer2.push(`<!----> <button class="btn btn-ghost btn-circle btn-sm md:hidden" aria-label="Toggle menu"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></nav></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { theme });
  });
}
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
function CommandPalette($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let filteredActions;
    const sections = navigationConfig.commandPalette;
    let query = "";
    let inputElement = null;
    const isOpen = derived(experienceStore, ($experience) => $experience.isCommandPaletteOpen);
    const allActions = sections.flatMap((section) => section.actions.map((action) => ({ section: section.title, ...action })));
    filteredActions = query.trim().length === 0 ? allActions : allActions.filter((action) => {
      const haystack = `${action.label} ${action.description ?? ""}`.toLowerCase();
      return haystack.includes(query.trim().toLowerCase());
    });
    {
      if (store_get($$store_subs ??= {}, "$isOpen", isOpen) && inputElement) ;
    }
    if (store_get($$store_subs ??= {}, "$isOpen", isOpen)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="palette-overlay svelte-1vklsmh" role="dialog" aria-modal="true"><button type="button" class="backdrop svelte-1vklsmh" aria-label="Close palette"></button> <div class="palette svelte-1vklsmh"><header class="svelte-1vklsmh"><input type="text" placeholder="Search actions, pages, or ideas…"${attr("value", query)} class="svelte-1vklsmh"/> <button type="button" class="close svelte-1vklsmh" aria-label="Close palette">×</button></header> <section class="svelte-1vklsmh">`);
      if (filteredActions.length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="empty svelte-1vklsmh">No results yet. Try different keywords.</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<ul class="svelte-1vklsmh"><!--[-->`);
        const each_array = ensure_array_like(filteredActions);
        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
          let action = each_array[index];
          $$renderer2.push(`<li class="svelte-1vklsmh"><a${attr("href", action.href)} class="svelte-1vklsmh"><div class="meta svelte-1vklsmh"><span class="label svelte-1vklsmh">${escape_html(action.label)}</span> `);
          if (action.description) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="description svelte-1vklsmh">${escape_html(action.description)}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div> `);
          if (action.accent) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span${attr_class(`accent ${action.accent}`, "svelte-1vklsmh")}>${escape_html(action.accent)}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></a></li>`);
        }
        $$renderer2.push(`<!--]--></ul>`);
      }
      $$renderer2.push(`<!--]--></section> <footer class="svelte-1vklsmh"><div class="svelte-1vklsmh"><kbd class="svelte-1vklsmh">⌘</kbd> <kbd class="svelte-1vklsmh">K</kbd> <span>Open palette</span></div> <div class="svelte-1vklsmh"><kbd class="svelte-1vklsmh">⌘</kbd> <kbd class="svelte-1vklsmh">⇧</kbd> <kbd class="svelte-1vklsmh">K</kbd> <span>Cycle theme</span></div> <div class="svelte-1vklsmh"><kbd class="svelte-1vklsmh">⌘</kbd> <kbd class="svelte-1vklsmh">⌥</kbd> <kbd class="svelte-1vklsmh">K</kbd> <span>Ambient audio</span></div></footer></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function AmbientAudio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    derived(experienceStore, ($experience) => $experience.isAmbientAudioPlaying);
    const ambienceSrc = "https://cdn.pixabay.com/download/audio/2023/11/06/audio_3a1babf1d8.mp3?filename=cyberpunk-city-ambient-175576.mp3";
    $$renderer2.push(`<button class="ambient-toggle svelte-50870b" type="button"><span class="pulse svelte-50870b" aria-hidden="true"></span> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span class="label svelte-50870b">Ambient off</span>`);
    }
    $$renderer2.push(`<!--]--></button> <audio${attr("src", ambienceSrc)} preload="auto" class="svelte-50870b"></audio>`);
  });
}
function SiteFooter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const quickLinks = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Journal" },
      { href: "/#capabilities", label: "Capabilities" }
    ];
    const resources = [
      { href: "/blog", label: "Articles" }
      // { href: '/blog/explorations', label: 'Explorations', soon: true },
      // { href: '/rss.xml', label: 'RSS', soon: true },
      // { href: '/colophon', label: 'Colophon', soon: true }
    ];
    const socials = [
      { href: "https://github.com/", label: "GitHub" },
      { href: "https://dribbble.com/", label: "Dribbble" },
      { href: "https://x.com/", label: "X" },
      { href: "mailto:studio@mk1.dev", label: "Email" }
    ];
    $$renderer2.push(`<footer class="border-t border-base-300/60 bg-base-200/50 text-base-content/90"><div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8"><div class="space-y-4"><div class="flex items-center gap-3"><span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-base-100 shadow-xl">Mk</span> <div><p class="text-lg font-semibold">Mk.01 SvelteKit Studio</p> <p class="text-sm text-base-content/70">Creative lab for purposeful digital experiences.</p></div></div> <p class="text-sm leading-relaxed text-base-content/70">Crafting joyful web products, immersive narratives, and tools that empower makers across the
				globe.</p> <div class="flex gap-3 text-sm"><span class="badge badge-outline border-primary/40 text-primary">Available for collaborations</span> <span class="badge badge-outline border-secondary/40 text-secondary">Remote-first</span></div></div> <div class="space-y-3"><h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60">Navigate</h3> <ul class="space-y-2 text-sm"><!--[-->`);
    const each_array = ensure_array_like(quickLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="transition-colors hover:text-primary">${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="space-y-3"><h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60">Resources</h3> <ul class="space-y-2 text-sm"><!--[-->`);
    const each_array_1 = ensure_array_like(resources);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<li class="flex items-center gap-2"><a${attr("href", link.href)} class="transition-colors hover:text-primary">${escape_html(link.label)}</a> `);
      if (link.soon) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="badge badge-xs bg-base-300 text-[0.6rem] uppercase tracking-widest">Soon</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="space-y-3"><h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60">Connect</h3> <p class="text-sm text-base-content/70">studio@mk1.dev<br/> Global / Remote · Seoul ↔ San Francisco</p> <ul class="flex flex-wrap gap-3 text-sm"><!--[-->`);
    const each_array_2 = ensure_array_like(socials);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let link = each_array_2[$$index_2];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="transition-colors hover:text-primary" rel="noreferrer">${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div> <div class="border-t border-base-300/60"><div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-base-content/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Mk.01 SvelteKit Studio. Crafted with SvelteKit &amp; Tailwind.</p> <div class="flex gap-4"><a href="/privacy">Privacy</a> <a href="/terms">Terms</a></div></div></div></footer>`);
  });
}
function AppShell($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let currentExperience, activeTheme;
    const themeMap = {
      day: "studio-light",
      night: "studio-dark",
      aurora: "studio-pro-dark"
    };
    function setDocumentTheme(value) {
      if (typeof document !== "undefined") {
        document.documentElement.dataset.theme = value;
      }
    }
    currentExperience = store_get($$store_subs ??= {}, "$experienceStore", experienceStore);
    activeTheme = themeMap[currentExperience.theme] ?? "studio-light";
    setDocumentTheme(activeTheme);
    $$renderer2.push(`<div${attr("data-theme", activeTheme)} class="min-h-screen bg-base-100 text-base-content transition-colors"><a href="#page-content" class="skip-link">Skip to content</a> <div class="flex min-h-screen flex-col">`);
    GlobalNav($$renderer2, {});
    $$renderer2.push(`<!----> <main id="page-content" tabindex="-1" class="flex-1 focus:outline-none"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> `);
    SiteFooter($$renderer2);
    $$renderer2.push(`<!----></div> `);
    CommandPalette($$renderer2);
    $$renderer2.push(`<!----> `);
    AmbientAudio($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function SmoothScroll($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]-->`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let currentSeo, jsonLdMarkup;
    let data = $$props["data"];
    function serializeJsonLd(payload) {
      if (!payload) return "";
      return JSON.stringify(payload).replace(/</g, "\\u003C");
    }
    currentSeo = data?.seo ?? buildSeo({
      path: store_get($$store_subs ??= {}, "$page", page).url.pathname
    });
    jsonLdMarkup = currentSeo?.jsonLd != null ? `<script type="application/ld+json">${serializeJsonLd(currentSeo.jsonLd)}<\/script>` : "";
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(currentSeo.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", currentSeo.description)}/> <link rel="canonical"${attr("href", currentSeo.canonical)}/> `);
      if (currentSeo.robots) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="robots"${attr("content", currentSeo.robots)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <meta name="author"${attr("content", siteConfig.name)}/> <!--[-->`);
      const each_array = ensure_array_like(currentSeo.meta);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let meta = each_array[$$index];
        $$renderer3.push(`<meta${attr("name", meta.name)}${attr("content", meta.content)}/>`);
      }
      $$renderer3.push(`<!--]--> <!--[-->`);
      const each_array_1 = ensure_array_like(currentSeo.openGraph);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let og = each_array_1[$$index_1];
        $$renderer3.push(`<meta${attr("property", og.property)}${attr("content", og.content)}/>`);
      }
      $$renderer3.push(`<!--]--> <!--[-->`);
      const each_array_2 = ensure_array_like(currentSeo.twitter);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let twitter = each_array_2[$$index_2];
        $$renderer3.push(`<meta${attr("name", twitter.name)}${attr("content", twitter.content)}/>`);
      }
      $$renderer3.push(`<!--]--> ${html(jsonLdMarkup)}`);
    });
    SmoothScroll($$renderer2, {
      children: ($$renderer3) => {
        AppShell($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!--[-->`);
            slot($$renderer4, $$props, "default", {});
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _layout as default
};
