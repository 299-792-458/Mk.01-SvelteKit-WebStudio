import { e as ensure_array_like, j as attr_style, a as attr, b as bind_props } from "../../../chunks/index.js";
import { V as fallback, X as escape_html } from "../../../chunks/context.js";
import { P as PageSection } from "../../../chunks/PageSection.js";
function TeamConstellation($$renderer, $$props) {
  let members = fallback($$props["members"], () => [], true);
  $$renderer.push(`<section class="constellation svelte-1fy1inl"><!--[-->`);
  const each_array = ensure_array_like(members);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let member = each_array[index];
    $$renderer.push(`<article class="card svelte-1fy1inl"${attr_style(`--rotate: ${index % 2 === 0 ? "-3deg" : "2.5deg"}`)}><div class="avatar svelte-1fy1inl"><img${attr("src", member.avatar)}${attr("alt", member.name)} loading="lazy" class="svelte-1fy1inl"/></div> <div class="body"><header class="svelte-1fy1inl"><h3 class="svelte-1fy1inl">${escape_html(member.name)}</h3> <p class="svelte-1fy1inl">${escape_html(member.title)}</p></header> <ul class="meta svelte-1fy1inl"><li>${escape_html(member.location)}</li> <li>${escape_html(member.specialties.join(" · "))}</li></ul></div></article>`);
  }
  $$renderer.push(`<!--]--></section>`);
  bind_props($$props, { members });
}
function Timeline($$renderer, $$props) {
  let items = fallback($$props["items"], () => [], true);
  $$renderer.push(`<ol class="timeline svelte-umprpe"><!--[-->`);
  const each_array = ensure_array_like(items);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<li class="timeline-item svelte-umprpe"><div class="marker svelte-umprpe" aria-hidden="true"><span class="svelte-umprpe"></span> <span class="svelte-umprpe"></span></div> <div class="body svelte-umprpe"><p class="year svelte-umprpe">${escape_html(item.year)}</p> <h3 class="svelte-umprpe">${escape_html(item.title)}</h3> <p class="description svelte-umprpe">${escape_html(item.description)}</p></div></li>`);
  }
  $$renderer.push(`<!--]--></ol>`);
  bind_props($$props, { items });
}
const team = [
  {
    name: "이준호",
    title: "Founder · Creative Technologist",
    avatar: "/images/team/junho.jpg",
    location: "Seoul, KR",
    specialties: ["Experience Engineering", "3D Web", "Motion Systems"]
  },
  {
    name: "Mira Park",
    title: "Design Director",
    avatar: "/images/team/mira.jpg",
    location: "Busan, KR",
    specialties: ["Narrative UX", "Design Systems", "Accessibility"]
  },
  {
    name: "Ethan Cho",
    title: "Head of Labs",
    avatar: "/images/team/ethan.jpg",
    location: "Tokyo, JP",
    specialties: ["Creative R&D", "Realtime Collaboration", "AI Prototyping"]
  },
  {
    name: "Sara Min",
    title: "Lead Product Engineer",
    avatar: "/images/team/sara.jpg",
    location: "Seoul, KR",
    specialties: ["Svelte Architecture", "Edge Compute", "Tooling"]
  }
];
const studioTimeline = [
  {
    year: "2020",
    title: "Mk.01 Origins",
    description: "Launched as a solo craft, shipping experimental Svelte prototypes that gained global attention."
  },
  {
    year: "2021",
    title: "Studio Expansion",
    description: "Scaled into a multi-disciplinary collective delivering launches for entertainment & fintech brands."
  },
  {
    year: "2022",
    title: "Labs Initiative",
    description: "Opened Mk.01 Labs—an R&D playground exploring AI, WebGL, and experiential storytelling."
  },
  {
    year: "2023",
    title: "Systems Era",
    description: "Rolled out modular design systems across enterprise partners; introduced the Mk.01 component library."
  },
  {
    year: "2024",
    title: "Global Recognitions",
    description: "Honored with Awwwards recognitions, speaking engagements, and expanded our distributed partner network."
  }
];
function _page($$renderer) {
  const values = [
    {
      title: "Clarity over noise",
      description: "Every engagement starts with strategy sprints that align goals, audiences, and measures of success before pencils touch pixels."
    },
    {
      title: "Play with purpose",
      description: "Exploration fuels the work. WebGL, AI, and immersive storytelling become tools to reveal opportunity—not distractions."
    },
    {
      title: "Radical inclusivity",
      description: "Accessibility, localization, performance, and governance live in the definition of done. Beauty and responsibility coexist."
    }
  ];
  const rituals = [
    {
      title: "Discovery immersion",
      detail: "Stakeholder interviews, ecosystem mapping, and live sketching to establish a shared product vocabulary."
    },
    {
      title: "Narrative choreography",
      detail: "Story-driven flows that connect concept, copy, and motion so every interaction feels intentional."
    },
    {
      title: "Launch orchestration",
      detail: "Playbook for go-live: documentation, design tokens, QA suites, and motion specs ready for handoff."
    }
  ];
  PageSection($$renderer, {
    id: "about-hero",
    tone: "contrast",
    padding: "xl",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-12 lg:grid-cols-[1.35fr_minmax(0,1fr)] lg:items-end"><div class="space-y-6"><span class="eyebrow text-secondary/80">About Mk.01</span> <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">A Seoul-born studio crafting immersive product stories and fearless web experiments.</h1> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg">Founded by Korea’s #3 ranked creative technologist, Mk.01 blends narrative design, motion
				systems, and engineering discipline to launch experiences that feel cinematic and ship with
				rigor.</p> <div class="flex flex-wrap gap-3"><a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Start a conversation</a> <a href="/stack" class="btn btn-outline btn-lg">View the stack</a></div></div> <div class="surface-panel space-y-4 bg-base-100/80"><h2 class="text-lg font-semibold text-base-content">Studio DNA</h2> <ul class="space-y-3 text-sm text-base-content/70"><li class="flex items-start gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>Distributed team across Seoul, Busan, Tokyo, and global collaborators.</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>Launch runway playbook covering pre-visualization, motion specs, and QA rituals.</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span> <span>Labs program shipping open-source experiments and R&amp;D prototypes quarterly.</span></li></ul></div></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "values",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="mx-auto max-w-3xl text-center space-y-4"><span class="eyebrow text-primary/80">Practice values</span> <h2 class="text-3xl font-semibold sm:text-4xl">Principles that anchor every build.</h2> <p class="text-base text-base-content/70 sm:text-lg">We pursue expressive experiences without sacrificing performance, accessibility, or long-term
			maintainability.</p></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(values);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let value = each_array[$$index];
        $$renderer2.push(`<div class="surface-card h-full text-left"><h3 class="text-xl font-semibold">${escape_html(value.title)}</h3> <p class="mt-3 text-sm text-base-content/70">${escape_html(value.description)}</p></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "team",
    tone: "subtle",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><span class="eyebrow text-secondary/80">Team constellation</span> <h2 class="text-3xl font-semibold sm:text-4xl">A collective of strategists, artists, and engineers.</h2></div> `);
      TeamConstellation($$renderer2, { members: team });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "rituals",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"><div class="space-y-4"><span class="eyebrow text-primary/80">Studio rituals</span> <h2 class="text-3xl font-semibold sm:text-4xl">Designing momentum from first call to launch day.</h2> <p class="text-base text-base-content/70 sm:text-lg">Collaboration cadences are engineered to keep vision, craft, and execution in harmony. From
				early discovery to the final deploy, every ritual is choreographed for clarity and magic.</p></div> <div class="space-y-4"><!--[-->`);
      const each_array_1 = ensure_array_like(rituals);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let ritual = each_array_1[$$index_1];
        $$renderer2.push(`<div class="rounded-2xl border border-base-200/70 bg-base-100/70 p-6 shadow-lg backdrop-blur"><h3 class="text-lg font-semibold text-base-content">${escape_html(ritual.title)}</h3> <p class="mt-2 text-sm text-base-content/70">${escape_html(ritual.detail)}</p></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "timeline",
    tone: "contrast",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><span class="eyebrow text-secondary/80">Trajectory</span> <h2 class="text-3xl font-semibold sm:text-4xl">From solo experiments to a studio powering global launches.</h2></div> `);
      Timeline($$renderer2, { items: studioTimeline });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  PageSection($$renderer, {
    id: "collaboration-pitch",
    tone: "contrast",
    padding: "compact",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center"><h2 class="text-3xl font-semibold sm:text-4xl">Let’s co-create your next chapter.</h2> <p class="mt-4 text-base text-base-content/70 sm:text-lg">Whether you need an embedded product squad, a cinematic launch experience, or R&amp;D
			explorations, Mk.01 is ready to collaborate.</p> <div class="mt-6 flex flex-wrap justify-center gap-3"><a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Share your brief</a> <a href="/labs" class="btn btn-ghost btn-lg">Tour the labs</a></div></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
