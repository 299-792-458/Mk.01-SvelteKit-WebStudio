import { b as bind_props, e as ensure_array_like, a as attr } from "../../../chunks/index.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
import { Y as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredProjects;
    let data = $$props["data"];
    const projects = data.projects ?? [];
    const labs = data.labs ?? [];
    const industries = [
      "All",
      ...new Set(projects.map((project) => project.industry))
    ];
    const years = ["All", ...new Set(projects.map((project) => project.year))];
    let selectedIndustry = "All";
    let selectedYear = "All";
    filteredProjects = projects.filter((project) => {
      const industryMatch = selectedIndustry === "All";
      const yearMatch = selectedYear === "All";
      return industryMatch && yearMatch;
    });
    PageSection($$renderer2, {
      id: "work-hero",
      tone: "contrast",
      padding: "xl",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-6"><span class="eyebrow text-secondary/80">Case studies</span> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Launch systems, product platforms, and narrative websites crafted by Mk.01.</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg svelte-oqsuc6">Every case study represents a blend of strategy, design systems, and expressive engineering.
			Select filters to explore by industry or release year.</p></div> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><div class="rounded-2xl border border-base-200/60 bg-base-100/80 p-6 shadow-lg"><p class="text-4xl font-semibold text-base-content svelte-oqsuc6">17+</p> <p class="mt-1 text-xs uppercase tracking-widest text-base-content/60 svelte-oqsuc6">Global collaborators</p></div> <div class="rounded-2xl border border-base-200/60 bg-base-100/80 p-6 shadow-lg"><p class="text-4xl font-semibold text-base-content svelte-oqsuc6">48</p> <p class="mt-1 text-xs uppercase tracking-widest text-base-content/60 svelte-oqsuc6">Experiments in production</p></div> <div class="rounded-2xl border border-base-200/60 bg-base-100/80 p-6 shadow-lg"><p class="text-4xl font-semibold text-base-content svelte-oqsuc6">92</p> <p class="mt-1 text-xs uppercase tracking-widest text-base-content/60 svelte-oqsuc6">Average client NPS</p></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "work-filters",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex flex-wrap gap-3"><label class="filter svelte-oqsuc6"><span class="filter-label svelte-oqsuc6">Industry</span> `);
        $$renderer3.select(
          { value: selectedIndustry, class: "select select-bordered" },
          ($$renderer4) => {
            $$renderer4.push(`<!--[-->`);
            const each_array = ensure_array_like(industries);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let industry = each_array[$$index];
              $$renderer4.option({ value: industry }, ($$renderer5) => {
                $$renderer5.push(`${escape_html(industry)}`);
              });
            }
            $$renderer4.push(`<!--]-->`);
          },
          "svelte-oqsuc6"
        );
        $$renderer3.push(`</label> <label class="filter svelte-oqsuc6"><span class="filter-label svelte-oqsuc6">Year</span> `);
        $$renderer3.select(
          { value: selectedYear, class: "select select-bordered" },
          ($$renderer4) => {
            $$renderer4.push(`<!--[-->`);
            const each_array_1 = ensure_array_like(years);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let year = each_array_1[$$index_1];
              $$renderer4.option({ value: year }, ($$renderer5) => {
                $$renderer5.push(`${escape_html(year)}`);
              });
            }
            $$renderer4.push(`<!--]-->`);
          },
          "svelte-oqsuc6"
        );
        $$renderer3.push(`</label></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "work-grid",
      children: ($$renderer3) => {
        if (filteredProjects.length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="rounded-2xl border border-dashed border-base-200/70 bg-base-100/80 p-10 text-center text-base-content/70">No projects match those filters yet. Try another combination.</div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
          const each_array_2 = ensure_array_like(filteredProjects);
          for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
            let project = each_array_2[$$index_3];
            $$renderer3.push(`<article class="work-card svelte-oqsuc6"><div class="media svelte-oqsuc6"><img${attr("src", project.coverImage ?? `/images/work/${project.slug}-cover.jpg`)}${attr("alt", project.title)} loading="lazy" class="svelte-oqsuc6"/></div> <div class="body svelte-oqsuc6"><div class="chips svelte-oqsuc6"><span>${escape_html(project.industry)}</span> <span>${escape_html(project.year)}</span></div> <h2 class="svelte-oqsuc6">${escape_html(project.title)}</h2> <p class="svelte-oqsuc6">${escape_html(project.summary ?? project.description)}</p> <ul class="tags svelte-oqsuc6"><!--[-->`);
            const each_array_3 = ensure_array_like(project.tags);
            for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
              let tag = each_array_3[$$index_2];
              $$renderer3.push(`<li>#${escape_html(tag)}</li>`);
            }
            $$renderer3.push(`<!--]--></ul> <a${attr("href", `/work/${project.slug}`)} class="link-cta">View project</a></div></article>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    PageSection($$renderer2, {
      id: "work-labs",
      tone: "subtle",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-6 text-center"><span class="eyebrow text-secondary/80">From the labs</span> <h2 class="text-3xl font-semibold sm:text-4xl svelte-oqsuc6">Experiments that inspired these launches.</h2></div> <div class="grid gap-6 md:grid-cols-3"><!--[-->`);
        const each_array_4 = ensure_array_like(labs);
        for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
          let experiment = each_array_4[$$index_4];
          $$renderer3.push(`<div class="surface-card h-full"><h3 class="text-lg font-semibold text-base-content">${escape_html(experiment.title)}</h3> <p class="mt-2 text-sm text-base-content/70 svelte-oqsuc6">${escape_html(experiment.summary)}</p> <a${attr("href", `/labs/${experiment.slug}`)} class="link-cta mt-4 inline-flex">Read experiment</a></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
