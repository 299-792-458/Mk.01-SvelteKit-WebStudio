import { c as create_ssr_component, v as validate_component, f as escape, e as each, d as add_attribute } from "../../../../chunks/ssr.js";
import { P as PageSection } from "../../../../chunks/PageSection.js";
import { S as Surface } from "../../../../chunks/Surface.js";
const css = {
  code: ".hero-media.svelte-186vx7y.svelte-186vx7y{position:relative;border-radius:2rem;overflow:hidden;box-shadow:0 40px 90px rgba(5, 11, 35, 0.5)}.hero-video.svelte-186vx7y.svelte-186vx7y,.hero-image.svelte-186vx7y.svelte-186vx7y{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.hero-overlay.svelte-186vx7y.svelte-186vx7y{position:absolute;inset:auto 0 0 0;padding:2.5rem 3rem;background:linear-gradient(180deg, transparent, rgba(5, 8, 20, 0.88));color:rgba(226, 232, 255, 0.9)}.hero-overlay.svelte-186vx7y h2.svelte-186vx7y{font-size:1.8rem;font-weight:600}.hero-overlay.svelte-186vx7y p.svelte-186vx7y{margin-top:0.5rem;font-size:1rem;color:rgba(226, 232, 255, 0.75);max-width:34rem}.chapter.svelte-186vx7y.svelte-186vx7y{padding:2rem;border-radius:1.4rem;border:1px solid rgba(255, 255, 255, 0.08);background:linear-gradient(140deg, rgba(9, 13, 31, 0.9), rgba(47, 93, 255, 0.18));color:rgba(226, 232, 255, 0.92);box-shadow:0 25px 60px rgba(5, 11, 28, 0.35)}.chapter.svelte-186vx7y header.svelte-186vx7y{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.8rem}.chapter.svelte-186vx7y header h3.svelte-186vx7y{font-size:1.4rem;font-weight:600}.chapter.svelte-186vx7y header span.svelte-186vx7y{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.28em;color:rgba(226, 232, 255, 0.55)}.chapter.svelte-186vx7y p.svelte-186vx7y{font-size:0.98rem;color:rgba(226, 232, 255, 0.72);line-height:1.7}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import PageSection from \\"$lib/components/ui/PageSection.svelte\\";\\nimport Surface from \\"$components/ui/Surface.svelte\\";\\nexport let data;\\nconst { project, related } = data;\\nconst projectContent = project.content;\\n<\/script>\\n\\n<PageSection id=\\"project-hero\\" tone=\\"contrast\\" padding=\\"xl\\">\\n\\t<div class=\\"space-y-6\\">\\n\\t\\t<a href=\\"/work\\" class=\\"link-cta\\">\\n\\t\\t\\t<svg\\n\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\tclass=\\"h-4 w-4 rotate-180\\"\\n\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\tviewBox=\\"0 0 24 24\\"\\n\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\tstroke-linecap=\\"round\\"\\n\\t\\t\\t\\t\\tstroke-linejoin=\\"round\\"\\n\\t\\t\\t\\t\\tstroke-width=\\"1.5\\"\\n\\t\\t\\t\\t\\td=\\"M17 8l4 4m0 0l-4 4m4-4H3\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</svg>\\n\\t\\t\\tBack to work\\n\\t\\t</a>\\n\\n\\t\\t<div class=\\"space-y-4\\">\\n\\t\\t\\t<h1 class=\\"text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl\\">\\n\\t\\t\\t\\t{project.title}\\n\\t\\t\\t</h1>\\n\\t\\t\\t<p class=\\"max-w-3xl text-base text-base-content/70 sm:text-lg\\">{project.summary}</p>\\n\\t\\t\\t<ul class=\\"flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60\\">\\n\\t\\t\\t\\t<li>{project.industry}</li>\\n\\t\\t\\t\\t<li>{project.year}</li>\\n\\t\\t\\t\\t{#each project.tags as tag}\\n\\t\\t\\t\\t\\t<li>#{tag}</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t</div>\\n</PageSection>\\n\\n<PageSection id=\\"project-hero-media\\">\\n\\t<div class=\\"hero-media\\">\\n\\t\\t{#if projectContent.hero.video}\\n\\t\\t\\t<video autoplay muted playsinline loop class=\\"hero-video\\">\\n\\t\\t\\t\\t<source src={projectContent.hero.video} type=\\"video/mp4\\" />\\n\\t\\t\\t</video>\\n\\t\\t{:else}\\n\\t\\t\\t<img src={`/images/work/${project.slug}-hero.jpg`} alt={project.title} class=\\"hero-image\\" />\\n\\t\\t{/if}\\n\\t\\t<div class=\\"hero-overlay\\">\\n\\t\\t\\t<h2>{projectContent.hero.headline}</h2>\\n\\t\\t\\t<p>{projectContent.hero.subheadline}</p>\\n\\t\\t</div>\\n\\t</div>\\n</PageSection>\\n\\n<PageSection id=\\"project-outcomes\\">\\n\\t<div class=\\"grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]\\">\\n\\t\\t<Surface variant=\\"panel\\" padding=\\"md\\" as=\\"section\\">\\n\\t\\t\\t<h2 class=\\"text-2xl font-semibold text-base-content\\">Outcomes</h2>\\n\\t\\t\\t<ul class=\\"mt-4 space-y-3 text-sm text-base-content/70\\">\\n\\t\\t\\t\\t{#each projectContent.outcomes as outcome}\\n\\t\\t\\t\\t\\t<li class=\\"flex gap-3\\">\\n\\t\\t\\t\\t\\t\\t<span class=\\"mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80\\" />\\n\\t\\t\\t\\t\\t\\t<span>{outcome}</span>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t</Surface>\\n\\n\\t\\t<Surface variant=\\"glass\\" padding=\\"md\\" as=\\"section\\">\\n\\t\\t\\t<h2 class=\\"text-2xl font-semibold text-base-content\\">Services</h2>\\n\\t\\t\\t<ul\\n\\t\\t\\t\\tclass=\\"mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<li>Experience design</li>\\n\\t\\t\\t\\t<li>WebGL</li>\\n\\t\\t\\t\\t<li>Motion direction</li>\\n\\t\\t\\t\\t<li>Design systems</li>\\n\\t\\t\\t</ul>\\n\\t\\t\\t<a href=\\"/contact\\" class=\\"btn btn-primary btn-sm mt-6\\">Start a scope</a>\\n\\t\\t</Surface>\\n\\t</div>\\n</PageSection>\\n\\n<PageSection id=\\"project-chapters\\">\\n\\t<div class=\\"space-y-12\\">\\n\\t\\t{#each projectContent.chapters as chapter}\\n\\t\\t\\t<section class=\\"chapter\\">\\n\\t\\t\\t\\t<header>\\n\\t\\t\\t\\t\\t<h3>{chapter.title}</h3>\\n\\t\\t\\t\\t\\t<span>{chapter.id}</span>\\n\\t\\t\\t\\t</header>\\n\\t\\t\\t\\t<p>{chapter.description}</p>\\n\\t\\t\\t</section>\\n\\t\\t{/each}\\n\\t</div>\\n</PageSection>\\n\\n<PageSection id=\\"project-related\\" tone=\\"subtle\\">\\n\\t<div class=\\"space-y-6 text-center\\">\\n\\t\\t<span class=\\"eyebrow text-secondary/80\\">More projects</span>\\n\\t\\t<h2 class=\\"text-3xl font-semibold sm:text-4xl\\">Additional case studies you may enjoy.</h2>\\n\\t</div>\\n\\n\\t<div class=\\"grid gap-6 md:grid-cols-2\\">\\n\\t\\t{#each related as item}\\n\\t\\t\\t<a href={`/work/${item.slug}`} class=\\"surface-card h-full\\">\\n\\t\\t\\t\\t<h3 class=\\"text-xl font-semibold text-base-content\\">{item.title}</h3>\\n\\t\\t\\t\\t<p class=\\"mt-2 text-sm text-base-content/70\\">{item.summary}</p>\\n\\t\\t\\t\\t<ul\\n\\t\\t\\t\\t\\tclass=\\"mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{#each item.tags as tag}\\n\\t\\t\\t\\t\\t\\t<li>#{tag}</li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t<span class=\\"link-cta mt-4 inline-flex\\">View project</span>\\n\\t\\t\\t</a>\\n\\t\\t{/each}\\n\\t</div>\\n</PageSection>\\n\\n<style>\\n\\t.hero-media {\\n\\t\\tposition: relative;\\n\\t\\tborder-radius: 2rem;\\n\\t\\toverflow: hidden;\\n\\t\\tbox-shadow: 0 40px 90px rgba(5, 11, 35, 0.5);\\n\\t}\\n\\n\\t.hero-video,\\n\\t.hero-image {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\t-o-object-fit: cover;\\n\\t\\t   object-fit: cover;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.hero-overlay {\\n\\t\\tposition: absolute;\\n\\t\\tinset: auto 0 0 0;\\n\\t\\tpadding: 2.5rem 3rem;\\n\\t\\tbackground: linear-gradient(180deg, transparent, rgba(5, 8, 20, 0.88));\\n\\t\\tcolor: rgba(226, 232, 255, 0.9);\\n\\t}\\n\\n\\t.hero-overlay h2 {\\n\\t\\tfont-size: 1.8rem;\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\t.hero-overlay p {\\n\\t\\tmargin-top: 0.5rem;\\n\\t\\tfont-size: 1rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.75);\\n\\t\\tmax-width: 34rem;\\n\\t}\\n\\n\\t.chapter {\\n\\t\\tpadding: 2rem;\\n\\t\\tborder-radius: 1.4rem;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.08);\\n\\t\\tbackground: linear-gradient(140deg, rgba(9, 13, 31, 0.9), rgba(47, 93, 255, 0.18));\\n\\t\\tcolor: rgba(226, 232, 255, 0.92);\\n\\t\\tbox-shadow: 0 25px 60px rgba(5, 11, 28, 0.35);\\n\\t}\\n\\n\\t.chapter header {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: baseline;\\n\\t\\tmargin-bottom: 0.8rem;\\n\\t}\\n\\n\\t.chapter header h3 {\\n\\t\\tfont-size: 1.4rem;\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\t.chapter header span {\\n\\t\\tfont-size: 0.75rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 0.28em;\\n\\t\\tcolor: rgba(226, 232, 255, 0.55);\\n\\t}\\n\\n\\t.chapter p {\\n\\t\\tfont-size: 0.98rem;\\n\\t\\tcolor: rgba(226, 232, 255, 0.72);\\n\\t\\tline-height: 1.7;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+HC,yCAAY,CACX,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAC5C,CAEA,yCAAW,CACX,yCAAY,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,OAAO,CAAE,KACV,CAEA,2CAAc,CACb,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,WAAW,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CACtE,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC/B,CAEA,4BAAa,CAAC,iBAAG,CAChB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACd,CAEA,4BAAa,CAAC,gBAAE,CACf,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChC,SAAS,CAAE,KACZ,CAEA,sCAAS,CACR,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAClF,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAC7C,CAEA,uBAAQ,CAAC,qBAAO,CACf,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,QAAQ,CACrB,aAAa,CAAE,MAChB,CAEA,uBAAQ,CAAC,MAAM,CAAC,iBAAG,CAClB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACd,CAEA,uBAAQ,CAAC,MAAM,CAAC,mBAAK,CACpB,SAAS,CAAE,OAAO,CAClB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAChC,CAEA,uBAAQ,CAAC,gBAAE,CACV,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChC,WAAW,CAAE,GACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { project, related } = data;
  const projectContent = project.content;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(PageSection, "PageSection").$$render(
    $$result,
    {
      id: "project-hero",
      tone: "contrast",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="space-y-6"><a href="/work" class="link-cta" data-svelte-h="svelte-15u0b7y"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
			Back to work</a> <div class="space-y-4"><h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">${escape(project.title)}</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">${escape(project.summary)}</p> <ul class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-base-content/60"><li>${escape(project.industry)}</li> <li>${escape(project.year)}</li> ${each(project.tags, (tag) => {
          return `<li>#${escape(tag)}</li>`;
        })}</ul></div></div>`;
      }
    }
  )} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "project-hero-media" }, {}, {
    default: () => {
      return `<div class="hero-media svelte-186vx7y">${projectContent.hero.video ? `<video autoplay muted playsinline loop class="hero-video svelte-186vx7y"><source${add_attribute("src", projectContent.hero.video, 0)} type="video/mp4"></video>` : `<img${add_attribute("src", `/images/work/${project.slug}-hero.jpg`, 0)}${add_attribute("alt", project.title, 0)} class="hero-image svelte-186vx7y">`} <div class="hero-overlay svelte-186vx7y"><h2 class="svelte-186vx7y">${escape(projectContent.hero.headline)}</h2> <p class="svelte-186vx7y">${escape(projectContent.hero.subheadline)}</p></div></div>`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "project-outcomes" }, {}, {
    default: () => {
      return `<div class="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">${validate_component(Surface, "Surface").$$render(
        $$result,
        {
          variant: "panel",
          padding: "md",
          as: "section"
        },
        {},
        {
          default: () => {
            return `<h2 class="text-2xl font-semibold text-base-content" data-svelte-h="svelte-1jm3s9o">Outcomes</h2> <ul class="mt-4 space-y-3 text-sm text-base-content/70">${each(projectContent.outcomes, (outcome) => {
              return `<li class="flex gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>${escape(outcome)}</span> </li>`;
            })}</ul>`;
          }
        }
      )} ${validate_component(Surface, "Surface").$$render(
        $$result,
        {
          variant: "glass",
          padding: "md",
          as: "section"
        },
        {},
        {
          default: () => {
            return `<h2 class="text-2xl font-semibold text-base-content" data-svelte-h="svelte-1uzkrr">Services</h2> <ul class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60" data-svelte-h="svelte-15s581m"><li>Experience design</li> <li>WebGL</li> <li>Motion direction</li> <li>Design systems</li></ul> <a href="/contact" class="btn btn-primary btn-sm mt-6" data-svelte-h="svelte-5yp3u1">Start a scope</a>`;
          }
        }
      )}</div>`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "project-chapters" }, {}, {
    default: () => {
      return `<div class="space-y-12">${each(projectContent.chapters, (chapter) => {
        return `<section class="chapter svelte-186vx7y"><header class="svelte-186vx7y"><h3 class="svelte-186vx7y">${escape(chapter.title)}</h3> <span class="svelte-186vx7y">${escape(chapter.id)}</span></header> <p class="svelte-186vx7y">${escape(chapter.description)}</p> </section>`;
      })}</div>`;
    }
  })} ${validate_component(PageSection, "PageSection").$$render($$result, { id: "project-related", tone: "subtle" }, {}, {
    default: () => {
      return `<div class="space-y-6 text-center" data-svelte-h="svelte-ptw26e"><span class="eyebrow text-secondary/80">More projects</span> <h2 class="text-3xl font-semibold sm:text-4xl">Additional case studies you may enjoy.</h2></div> <div class="grid gap-6 md:grid-cols-2">${each(related, (item) => {
        return `<a${add_attribute("href", `/work/${item.slug}`, 0)} class="surface-card h-full"><h3 class="text-xl font-semibold text-base-content">${escape(item.title)}</h3> <p class="mt-2 text-sm text-base-content/70">${escape(item.summary)}</p> <ul class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-base-content/60">${each(item.tags, (tag) => {
          return `<li>#${escape(tag)}</li>`;
        })}</ul> <span class="link-cta mt-4 inline-flex" data-svelte-h="svelte-1masfo7">View project</span> </a>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
