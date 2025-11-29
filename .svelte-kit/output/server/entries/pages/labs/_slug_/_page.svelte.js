import { c as create_ssr_component, v as validate_component, f as escape, e as each, d as add_attribute } from "../../../../chunks/ssr.js";
import { P as PageSection } from "../../../../chunks/PageSection.js";
import { S as Surface } from "../../../../chunks/Surface.js";
const css = {
  code: ".media.svelte-1poafkg.svelte-1poafkg{position:relative;border-radius:1.6rem;overflow:hidden;min-height:260px;box-shadow:0 25px 60px rgba(9, 11, 28, 0.5)}.media.svelte-1poafkg img.svelte-1poafkg{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.glow.svelte-1poafkg.svelte-1poafkg{position:absolute;inset:0;background:radial-gradient(circle at 10% 10%, rgba(255, 107, 203, 0.3), transparent 60%);mix-blend-mode:screen}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import PageSection from \\"$lib/components/ui/PageSection.svelte\\";\\nimport Surface from \\"$components/ui/Surface.svelte\\";\\nexport let data;\\nconst experiment = data.experiment;\\nconst relatedProject = data.relatedProject;\\n<\/script>\\n\\n<PageSection id=\\"experiment-hero\\" tone=\\"contrast\\" padding=\\"xl\\">\\n\\t<div class=\\"grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end\\">\\n\\t\\t<div class=\\"space-y-5\\">\\n\\t\\t\\t<span class=\\"eyebrow text-secondary/80\\">Lab experiment</span>\\n\\t\\t\\t<h1 class=\\"text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl\\">\\n\\t\\t\\t\\t{experiment.title}\\n\\t\\t\\t</h1>\\n\\t\\t\\t<p class=\\"max-w-3xl text-base text-base-content/70 sm:text-lg\\">{experiment.summary}</p>\\n\\t\\t\\t<ul class=\\"flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60\\">\\n\\t\\t\\t\\t{#each experiment.tech as tech}\\n\\t\\t\\t\\t\\t<li class=\\"rounded-full bg-base-100/60 px-4 py-2 text-[0.7rem]\\">{tech}</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t\\t<div class=\\"flex flex-wrap gap-3\\">\\n\\t\\t\\t\\t{#if experiment.links.demo}\\n\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\thref={experiment.links.demo}\\n\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t\\t\\trel=\\"noreferrer\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"btn btn-primary btn-lg\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tLaunch demo\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{#if experiment.links.source}\\n\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\thref={experiment.links.source}\\n\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t\\t\\trel=\\"noreferrer\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"btn btn-outline btn-lg\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tView source\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"media\\">\\n\\t\\t\\t<div class=\\"glow\\" />\\n\\t\\t\\t<img src={experiment.thumbnail} alt={experiment.title} loading=\\"lazy\\" />\\n\\t\\t</div>\\n\\t</div>\\n</PageSection>\\n\\n<PageSection id=\\"experiment-detail\\">\\n\\t<div class=\\"grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]\\">\\n\\t\\t<Surface variant=\\"panel\\" padding=\\"md\\" as=\\"article\\">\\n\\t\\t\\t<h2 class=\\"text-2xl font-semibold text-base-content\\">Concept</h2>\\n\\t\\t\\t<p class=\\"mt-3 text-base text-base-content/70\\">\\n\\t\\t\\t\\t{experiment.highlight}\\n\\t\\t\\t</p>\\n\\n\\t\\t\\t<section class=\\"mt-6 space-y-4\\">\\n\\t\\t\\t\\t<h3 class=\\"text-lg font-semibold text-base-content\\">What we explored</h3>\\n\\t\\t\\t\\t<ul class=\\"grid gap-3 text-sm text-base-content/70\\">\\n\\t\\t\\t\\t\\t<li>Motion language experiments blending sound, scroll, and pointer data.</li>\\n\\t\\t\\t\\t\\t<li>Performance profiling for shader-heavy experiences across mobile and desktop.</li>\\n\\t\\t\\t\\t\\t<li>Framework for wrapping prototypes into production-ready SvelteKit modules.</li>\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</section>\\n\\n\\t\\t\\t<section class=\\"mt-6 space-y-4\\">\\n\\t\\t\\t\\t<h3 class=\\"text-lg font-semibold text-base-content\\">What’s next</h3>\\n\\t\\t\\t\\t<ul class=\\"grid gap-3 text-sm text-base-content/70\\">\\n\\t\\t\\t\\t\\t<li>Ship a component pack turning the best patterns into reusable primitives.</li>\\n\\t\\t\\t\\t\\t<li>Host an open studio session to share process notes and code breakdowns.</li>\\n\\t\\t\\t\\t\\t<li>Integrate the learnings into upcoming product launches and case studies.</li>\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</section>\\n\\t\\t</Surface>\\n\\n\\t\\t<Surface variant=\\"glass\\" padding=\\"md\\" as=\\"aside\\">\\n\\t\\t\\t<h2 class=\\"text-lg font-semibold text-base-content\\">Related work</h2>\\n\\t\\t\\t{#if relatedProject}\\n\\t\\t\\t\\t<div class=\\"mt-4 space-y-3\\">\\n\\t\\t\\t\\t\\t<div class=\\"rounded-xl overflow-hidden\\">\\n\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\tsrc={relatedProject.coverImage ?? \'/images/work/neon-metropolis-cover.jpg\'}\\n\\t\\t\\t\\t\\t\\t\\talt={relatedProject.title}\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"aspect-video w-full object-cover\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<h3 class=\\"text-xl font-semibold text-base-content\\">{relatedProject.title}</h3>\\n\\t\\t\\t\\t\\t<ul class=\\"flex flex-wrap gap-2 text-xs uppercase tracking-widest text-base-content/60\\">\\n\\t\\t\\t\\t\\t\\t{#each relatedProject.tags as tag}\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"rounded-full bg-base-100/70 px-3 py-1\\">#{tag}</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t<a href={`/work/${relatedProject.slug}`} class=\\"link-cta mt-4 inline-flex\\">\\n\\t\\t\\t\\t\\t\\tView case study\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<p class=\\"mt-4 text-sm text-base-content/70\\">More details coming soon.</p>\\n\\t\\t\\t{/if}\\n\\t\\t</Surface>\\n\\t</div>\\n</PageSection>\\n\\n<style>\\n\\t.media {\\n\\t\\tposition: relative;\\n\\t\\tborder-radius: 1.6rem;\\n\\t\\toverflow: hidden;\\n\\t\\tmin-height: 260px;\\n\\t\\tbox-shadow: 0 25px 60px rgba(9, 11, 28, 0.5);\\n\\t}\\n\\n\\t.media img {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\t-o-object-fit: cover;\\n\\t\\t   object-fit: cover;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.glow {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0;\\n\\t\\tbackground: radial-gradient(circle at 10% 10%, rgba(255, 107, 203, 0.3), transparent 60%);\\n\\t\\tmix-blend-mode: screen;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0GC,oCAAO,CACN,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,MAAM,CACrB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAC5C,CAEA,qBAAM,CAAC,kBAAI,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,OAAO,CAAE,KACV,CAEA,mCAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,gBAAgB,MAAM,CAAC,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CACzF,cAAc,CAAE,MACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const experiment = data.experiment;
  const relatedProject = data.relatedProject;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "experiment-hero",
      tone: "contrast",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end"><div class="space-y-5"><span class="eyebrow text-secondary/80" data-svelte-h="svelte-1kecl7d">Lab experiment</span> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">${escape(experiment.title)}</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">${escape(experiment.summary)}</p> <ul class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60">${each(experiment.tech, (tech) => {
          return `<li class="rounded-full bg-base-100/60 px-4 py-2 text-[0.7rem]">${escape(tech)}</li>`;
        })}</ul> <div class="flex flex-wrap gap-3">${experiment.links.demo ? `<a${add_attribute("href", experiment.links.demo, 0)} target="_blank" rel="noreferrer" class="btn btn-primary btn-lg">Launch demo</a>` : ``} ${experiment.links.source ? `<a${add_attribute("href", experiment.links.source, 0)} target="_blank" rel="noreferrer" class="btn btn-outline btn-lg">View source</a>` : ``}</div></div> <div class="media svelte-1poafkg"><div class="glow svelte-1poafkg"></div> <img${add_attribute("src", experiment.thumbnail, 0)}${add_attribute("alt", experiment.title, 0)} loading="lazy" class="svelte-1poafkg"></div></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "experiment-detail" }, {}, {
    default: () => {
      return `<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">${validate_component(Surface, "Surface").$$render(
        $$result,
        {
          variant: "panel",
          padding: "md",
          as: "article"
        },
        {},
        {
          default: () => {
            return `<h2 class="text-2xl font-semibold text-base-content" data-svelte-h="svelte-1hk4v3z">Concept</h2> <p class="mt-3 text-base text-base-content/70">${escape(experiment.highlight)}</p> <section class="mt-6 space-y-4" data-svelte-h="svelte-bj69wv"><h3 class="text-lg font-semibold text-base-content">What we explored</h3> <ul class="grid gap-3 text-sm text-base-content/70"><li>Motion language experiments blending sound, scroll, and pointer data.</li> <li>Performance profiling for shader-heavy experiences across mobile and desktop.</li> <li>Framework for wrapping prototypes into production-ready SvelteKit modules.</li></ul></section> <section class="mt-6 space-y-4" data-svelte-h="svelte-rlt99j"><h3 class="text-lg font-semibold text-base-content">What’s next</h3> <ul class="grid gap-3 text-sm text-base-content/70"><li>Ship a component pack turning the best patterns into reusable primitives.</li> <li>Host an open studio session to share process notes and code breakdowns.</li> <li>Integrate the learnings into upcoming product launches and case studies.</li></ul></section>`;
          }
        }
      )} ${validate_component(Surface, "Surface").$$render(
        $$result,
        {
          variant: "glass",
          padding: "md",
          as: "aside"
        },
        {},
        {
          default: () => {
            return `<h2 class="text-lg font-semibold text-base-content" data-svelte-h="svelte-1j26tes">Related work</h2> ${relatedProject ? `<div class="mt-4 space-y-3"><div class="rounded-xl overflow-hidden"><img${add_attribute("src", relatedProject.coverImage ?? "/images/work/neon-metropolis-cover.jpg", 0)}${add_attribute("alt", relatedProject.title, 0)} class="aspect-video w-full object-cover"></div> <h3 class="text-xl font-semibold text-base-content">${escape(relatedProject.title)}</h3> <ul class="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-base-content/60">${each(relatedProject.tags, (tag) => {
              return `<li class="rounded-full bg-base-100/70 px-3 py-1">#${escape(tag)}</li>`;
            })}</ul> <a${add_attribute("href", `/work/${relatedProject.slug}`, 0)} class="link-cta mt-4 inline-flex">View case study</a></div>` : `<p class="mt-4 text-sm text-base-content/70" data-svelte-h="svelte-12geiz">More details coming soon.</p>`}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
