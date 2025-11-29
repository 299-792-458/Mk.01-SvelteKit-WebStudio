import { b as bind_props, e as ensure_array_like, a as attr } from "../../../../chunks/index.js";
import { P as PageSection } from "../../../../chunks/PageSection.js";
import { S as Surface } from "../../../../chunks/Surface.js";
import { X as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  let data = $$props["data"];
  const { project, related } = data;
  const projectContent = project.content;
  PageSection($$renderer, {
    id: "project-hero",
    tone: "contrast",
    padding: "xl",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><a href="/work" class="link-cta"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> Back to work</a> <div class="space-y-4"><h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">${escape_html(project.title)}</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">${escape_html(project.summary)}</p> <ul class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60"><li>${escape_html(project.industry)}</li> <li>${escape_html(project.year)}</li> <!--[-->`);
      const each_array = ensure_array_like(project.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<li>#${escape_html(tag)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "project-hero-media",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="hero-media svelte-9hm5jc">`);
      if (projectContent.hero.video) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<video autoplay muted playsinline loop class="hero-video svelte-9hm5jc"><source${attr("src", projectContent.hero.video)} type="video/mp4"/></video>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<img${attr("src", `/images/work/${project.slug}-hero.jpg`)}${attr("alt", project.title)} class="hero-image svelte-9hm5jc"/>`);
      }
      $$renderer2.push(`<!--]--> <div class="hero-overlay svelte-9hm5jc"><h2 class="svelte-9hm5jc">${escape_html(projectContent.hero.headline)}</h2> <p class="svelte-9hm5jc">${escape_html(projectContent.hero.subheadline)}</p></div></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "project-outcomes",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">`);
      Surface($$renderer2, {
        variant: "panel",
        padding: "md",
        as: "section",
        children: ($$renderer3) => {
          $$renderer3.push(`<h2 class="text-2xl font-semibold text-base-content">Outcomes</h2> <ul class="mt-4 space-y-3 text-sm text-base-content/70"><!--[-->`);
          const each_array_1 = ensure_array_like(projectContent.outcomes);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let outcome = each_array_1[$$index_1];
            $$renderer3.push(`<li class="flex gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>${escape_html(outcome)}</span></li>`);
          }
          $$renderer3.push(`<!--]--></ul>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Surface($$renderer2, {
        variant: "glass",
        padding: "md",
        as: "section",
        children: ($$renderer3) => {
          $$renderer3.push(`<h2 class="text-2xl font-semibold text-base-content">Services</h2> <ul class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"><li>Experience design</li> <li>WebGL</li> <li>Motion direction</li> <li>Design systems</li></ul> <a href="/contact" class="btn btn-primary btn-sm mt-6">Start a scope</a>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "project-chapters",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-12"><!--[-->`);
      const each_array_2 = ensure_array_like(projectContent.chapters);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let chapter = each_array_2[$$index_2];
        $$renderer2.push(`<section class="chapter svelte-9hm5jc"><header class="svelte-9hm5jc"><h3 class="svelte-9hm5jc">${escape_html(chapter.title)}</h3> <span class="svelte-9hm5jc">${escape_html(chapter.id)}</span></header> <p class="svelte-9hm5jc">${escape_html(chapter.description)}</p></section>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "project-related",
    tone: "subtle",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6 text-center"><span class="eyebrow text-secondary/80">More projects</span> <h2 class="text-3xl font-semibold sm:text-4xl">Additional case studies you may enjoy.</h2></div> <div class="grid gap-6 md:grid-cols-2"><!--[-->`);
      const each_array_3 = ensure_array_like(related);
      for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
        let item = each_array_3[$$index_4];
        $$renderer2.push(`<a${attr("href", `/work/${item.slug}`)} class="surface-card h-full"><h3 class="text-xl font-semibold text-base-content">${escape_html(item.title)}</h3> <p class="mt-2 text-sm text-base-content/70">${escape_html(item.summary)}</p> <ul class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60"><!--[-->`);
        const each_array_4 = ensure_array_like(item.tags);
        for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
          let tag = each_array_4[$$index_3];
          $$renderer2.push(`<li>#${escape_html(tag)}</li>`);
        }
        $$renderer2.push(`<!--]--></ul> <span class="link-cta mt-4 inline-flex">View project</span></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
  bind_props($$props, { data });
}
export {
  _page as default
};
