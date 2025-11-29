import { g as element, f as slot, j as attr_style, b as bind_props, e as ensure_array_like, a as attr, c as attr_class, s as stringify } from "../../chunks/index.js";
import { a as appConfig } from "../../chunks/app.config.js";
import { V as fallback, X as escape_html } from "../../chunks/context.js";
import { S as Surface } from "../../chunks/Surface.js";
import { P as PageSection } from "../../chunks/PageSection.js";
import "clsx";
function Stack($$renderer, $$props) {
  let as = fallback($$props["as"], "div");
  let gap = fallback($$props["gap"], "var(--space-md, 1rem)");
  let align = fallback($$props["align"], "stretch");
  let justify = fallback($$props["justify"], "start");
  const justifyMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between"
  };
  element(
    $$renderer,
    as,
    () => {
      $$renderer.push(` class="stack svelte-lya9qb"${attr_style(`--stack-gap: ${gap}; align-items: ${align}; justify-content: ${justifyMap[justify]};`)}`);
    },
    () => {
      $$renderer.push(`<!--[-->`);
      slot($$renderer, $$props, "default", {});
      $$renderer.push(`<!--]-->`);
    }
  );
  bind_props($$props, { as, gap, align, justify });
}
const motionScale = [
  { id: "float", duration: 1.6, ease: "easeInOutSine" },
  { id: "cinematic-enter", duration: 1.2, ease: "easeOutCubic", stagger: 0.08 },
  { id: "command-palette", duration: 0.45, ease: "easeOutBack" }
];
function HeroSequencer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let identity = $$props["identity"];
    let metrics = $$props["metrics"];
    let showcases = fallback($$props["showcases"], () => [], true);
    const heroMotion = motionScale.find((preset) => preset.id === "cinematic-enter");
    $$renderer2.push(`<section class="hero-stage svelte-sde4oq"><div class="nebula svelte-sde4oq" aria-hidden="true"><div class="orb orb-a svelte-sde4oq"></div> <div class="orb orb-b svelte-sde4oq"></div> <div class="orb orb-c svelte-sde4oq"></div> <div class="gridlines svelte-sde4oq"></div></div> <div class="content svelte-sde4oq"><div class="intro svelte-sde4oq">`);
    Stack($$renderer2, {
      gap: "1.25rem",
      children: ($$renderer3) => {
        $$renderer3.push(`<span class="eyebrow svelte-sde4oq">Mk.01 Studio</span> <h1${attr_style(`--motion-duration: ${heroMotion?.duration ?? 1.2}s`)} class="svelte-sde4oq">${escape_html(identity.tagline)}</h1> <p class="svelte-sde4oq">${escape_html(identity.description)}</p> <div class="actions svelte-sde4oq"><a href="/work" class="primary svelte-sde4oq">Experience the work</a> <a href="/labs" class="secondary svelte-sde4oq">Enter the labs</a></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <aside class="details svelte-sde4oq">`);
    Surface($$renderer2, {
      variant: "glass",
      padding: "md",
      as: "div",
      children: ($$renderer3) => {
        $$renderer3.push(`<dl class="svelte-sde4oq"><div class="svelte-sde4oq"><dt class="svelte-sde4oq">Experiments shipped</dt> <dd class="svelte-sde4oq">${escape_html(metrics.experimentsShipped)}</dd></div> <div class="svelte-sde4oq"><dt class="svelte-sde4oq">Global collaborators</dt> <dd class="svelte-sde4oq">${escape_html(metrics.activeCollaborators)}</dd></div> <div class="svelte-sde4oq"><dt class="svelte-sde4oq">Average sprint length</dt> <dd class="svelte-sde4oq">${escape_html(metrics.averageSprintLength)}</dd></div> <div class="svelte-sde4oq"><dt class="svelte-sde4oq">Response time</dt> <dd class="svelte-sde4oq">${escape_html(metrics.responseTime)}</dd></div></dl>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div class="showcase svelte-sde4oq"><!--[-->`);
    const each_array = ensure_array_like(showcases.slice(0, 2));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      $$renderer2.push(`<article class="svelte-sde4oq"><div class="cover svelte-sde4oq"${attr_style(`--accent: ${project.accent ?? "transparent"}`)}><img${attr("src", project.image)}${attr("alt", project.title)} loading="lazy" class="svelte-sde4oq"/></div> <div class="svelte-sde4oq"><p class="label svelte-sde4oq">Spotlight</p> <h3 class="svelte-sde4oq">${escape_html(project.title)}</h3> <p class="summary svelte-sde4oq">${escape_html(project.summary)}</p> <a${attr("href", `/work/${project.slug}`)} class="more svelte-sde4oq">View project</a></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></aside></div></section>`);
    bind_props($$props, { identity, metrics, showcases });
  });
}
function QuantumField($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="h-full w-full"></div>`);
  });
}
function Scene($$renderer) {
  $$renderer.push(`<div class="absolute inset-0 -z-10 h-[100vh] w-full overflow-hidden opacity-60 blur-[1px] filter transition-opacity duration-1000 ease-in-out hover:opacity-100">`);
  QuantumField($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Reveal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let type = fallback($$props["type"], "fade");
    let delay = fallback($$props["delay"], 0);
    let duration = fallback($$props["duration"], 0.8);
    let threshold = fallback($$props["threshold"], 0.2);
    let once = fallback($$props["once"], true);
    $$renderer2.push(`<div class="will-change-transform"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { type, delay, duration, threshold, once });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const identity = data.identity ?? appConfig.identity;
    const metrics = data.metrics ?? appConfig.metrics;
    const studioPillars = [
      {
        title: "Strategy, then spectacle",
        description: "Workshops, competitive sweeps, and a crisp success map before pushing a single pixel. We align the story before turning on the spotlight."
      },
      {
        title: "Web as a stage",
        description: "Motion, narrative beats, and modern web APIs help the experience breathe. We design memorable pacing, not just screens."
      },
      {
        title: "Inclusive by default",
        description: "Accessibility, performance, and localization are non-negotiable. We test them the way others test CTAs."
      }
    ];
    const quickActions = [
      {
        title: "Book a chemistry call",
        description: "30-minute fit check to map goals, timeline, and the first sprint.",
        href: "mailto:studio@mk1.dev?subject=Chemistry%20Call%20with%20Mk01",
        style: "primary"
      },
      {
        title: "Download the studio deck",
        description: "Capabilities, process, and sample outputs in one PDF.",
        href: "/docs/mk01-studio-deck.pdf",
        style: "secondary"
      },
      {
        title: "Request a prototype sprint",
        description: "Two-week design-engineering spike to de-risk your idea.",
        href: "mailto:studio@mk1.dev?subject=Prototype%20Sprint%20Request",
        style: "outline"
      }
    ];
    Scene($$renderer2);
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      type: "fade",
      delay: 0.2,
      children: ($$renderer3) => {
        HeroSequencer($$renderer3, { identity, metrics, showcases: data.showcases ?? [] });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      type: "slide",
      delay: 0.4,
      children: ($$renderer3) => {
        PageSection($$renderer3, {
          id: "signal",
          tone: "subtle",
          padding: "compact",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="surface-panel svelte-1uha8ag"><div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between svelte-1uha8ag"><div class="max-w-3xl space-y-4 svelte-1uha8ag"><span class="eyebrow text-secondary/80 svelte-1uha8ag">Studio signal</span> <h2 class="text-3xl font-semibold sm:text-4xl svelte-1uha8ag">A universal web studio for bold founders, product crews, and curious labs.</h2> <p class="text-base text-base-content/70 sm:text-lg svelte-1uha8ag">We choreograph brand, product, and engineering into one expressive surface. Strategy is our
						guardrail, experimentation is our tempo.</p></div> <div class="signal-marquee svelte-1uha8ag" aria-hidden="true"><div class="marquee-track svelte-1uha8ag"><!--[-->`);
            const each_array = ensure_array_like(Array(2));
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              each_array[$$index];
              $$renderer4.push(`<span class="svelte-1uha8ag">Launch builds</span> <span class="svelte-1uha8ag">Design engineering</span> <span class="svelte-1uha8ag">Interactive stories</span> <span class="svelte-1uha8ag">Inclusive by default</span> <span class="svelte-1uha8ag">Prototype to production</span>`);
            }
            $$renderer4.push(`<!--]--></div></div></div> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 svelte-1uha8ag"><div class="surface-card svelte-1uha8ag"><p class="text-xs uppercase tracking-[0.3em] text-primary/70 svelte-1uha8ag">Experiments shipped</p> <p class="mt-2 text-3xl font-semibold text-base-content svelte-1uha8ag">${escape_html(metrics.experimentsShipped)}</p> <p class="mt-2 text-sm text-base-content/70 svelte-1uha8ag">Launches, interactive demos, and product refreshes that made it to customers.</p></div> <div class="surface-card svelte-1uha8ag"><p class="text-xs uppercase tracking-[0.3em] text-primary/70 svelte-1uha8ag">Global collaborators</p> <p class="mt-2 text-3xl font-semibold text-base-content svelte-1uha8ag">${escape_html(metrics.activeCollaborators)}</p> <p class="mt-2 text-sm text-base-content/70 svelte-1uha8ag">Teams we have plugged into across timezones, industries, and internal stacks.</p></div> <div class="surface-card svelte-1uha8ag"><p class="text-xs uppercase tracking-[0.3em] text-primary/70 svelte-1uha8ag">Sprint rhythm</p> <p class="mt-2 text-3xl font-semibold text-base-content svelte-1uha8ag">${escape_html(metrics.averageSprintLength)}</p> <p class="mt-2 text-sm text-base-content/70 svelte-1uha8ag">Delivery cadence tuned for fast iteration without sacrificing craft.</p></div> <div class="surface-card svelte-1uha8ag"><p class="text-xs uppercase tracking-[0.3em] text-primary/70 svelte-1uha8ag">Response time</p> <p class="mt-2 text-3xl font-semibold text-base-content svelte-1uha8ag">${escape_html(metrics.responseTime)}</p> <p class="mt-2 text-sm text-base-content/70 svelte-1uha8ag">Direct access to the studio—no layers of account management slowing you down.</p></div></div></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      delay: 0.2,
      children: ($$renderer3) => {
        PageSection($$renderer3, {
          id: "manifesto",
          tone: "contrast",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="grid gap-10 lg:grid-cols-[1.25fr_minmax(0,1fr)] lg:items-start svelte-1uha8ag"><div class="space-y-6 svelte-1uha8ag"><span class="eyebrow text-secondary/80 svelte-1uha8ag">Manifesto</span> <h2 class="text-3xl font-semibold sm:text-4xl svelte-1uha8ag">We build digital flagships that feel inevitable.</h2> <p class="max-w-3xl text-base text-base-content/70 sm:text-lg svelte-1uha8ag">Elegant strategy, expressive design, and durable engineering arrive as one package. Every
				project ships with clarity, performance, and the cinematic polish users remember.</p></div> <div class="grid gap-4 svelte-1uha8ag"><!--[-->`);
            const each_array_1 = ensure_array_like(studioPillars);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let pillar = each_array_1[$$index_1];
              $$renderer4.push(`<div class="rounded-2xl border border-base-200/80 bg-base-100/60 p-6 shadow-lg backdrop-blur transition-transform hover:scale-[1.02] svelte-1uha8ag"><p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70 svelte-1uha8ag">${escape_html(pillar.title)}</p> <p class="mt-3 text-sm text-base-content/70 svelte-1uha8ag">${escape_html(pillar.description)}</p></div>`);
            }
            $$renderer4.push(`<!--]--></div></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      type: "slide",
      delay: 0.2,
      children: ($$renderer3) => {
        PageSection($$renderer3, {
          id: "featured-work",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="mx-auto max-w-3xl text-center space-y-4 mb-12 svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">Featured Work</span> <h2 class="text-3xl font-semibold sm:text-4xl svelte-1uha8ag">A selection of recent flagship builds.</h2> <p class="text-base text-base-content/70 sm:text-lg svelte-1uha8ag">From launch campaigns to product refactors, each project is engineered to perform and feel
			memorable.</p></div> <div class="grid gap-4 md:grid-cols-3 md:auto-rows-[350px] svelte-1uha8ag"><!--[-->`);
            const each_array_2 = ensure_array_like(data.projects);
            for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
              let project = each_array_2[i];
              $$renderer4.push(`<a${attr("href", `/work/${project.slug}`)}${attr_class(`group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl transition-all hover:shadow-glow hover:scale-[1.01] ${stringify(i === 0 ? "md:col-span-2 md:row-span-2" : "")} ${stringify(i === 3 ? "md:col-span-2" : "")}`, "svelte-1uha8ag")}><div class="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-105 svelte-1uha8ag"><img${attr("src", project.image)}${attr("alt", project.title)} class="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity svelte-1uha8ag"/></div> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent svelte-1uha8ag"></div> <div class="absolute inset-0 flex flex-col justify-end p-8 svelte-1uha8ag"><h3 class="transform translate-y-2 text-3xl font-bold text-white opacity-90 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 svelte-1uha8ag">${escape_html(project.title)}</h3> <p class="mt-2 transform translate-y-4 text-lg text-gray-300 opacity-0 transition-all duration-500 delay-75 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 svelte-1uha8ag">${escape_html(project.description)}</p> <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-400 opacity-0 transition-all duration-500 delay-100 group-hover:opacity-100 svelte-1uha8ag">View Case Study →</span></div></a>`);
            }
            $$renderer4.push(`<!--]--></div> <div class="mt-12 text-center svelte-1uha8ag"><a href="/work" class="btn btn-primary btn-lg svelte-1uha8ag">View all work</a></div>`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Reveal($$renderer2, {
      delay: 0.2,
      children: ($$renderer3) => {
        PageSection($$renderer3, {
          id: "actions",
          tone: "contrast",
          padding: "compact",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="surface-panel mx-auto max-w-5xl bg-base-100/80 svelte-1uha8ag"><div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between svelte-1uha8ag"><div class="space-y-2 svelte-1uha8ag"><span class="eyebrow text-secondary/80 svelte-1uha8ag">Start a move</span> <h2 class="text-2xl font-semibold text-base-content sm:text-3xl svelte-1uha8ag">Pick the next step—we’ll respond within a day.</h2> <p class="text-sm text-base-content/70 sm:text-base svelte-1uha8ag">Whether you need a chemistry call, a prototype sprint, or a deck to share internally, we
					have a fast path.</p></div> <div class="grid w-full gap-3 sm:grid-cols-2 lg:w-auto svelte-1uha8ag"><!--[-->`);
            const each_array_3 = ensure_array_like(quickActions);
            for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
              let action = each_array_3[$$index_3];
              $$renderer4.push(`<a${attr("href", action.href)}${attr_class(`action-tile ${action.style}`, "svelte-1uha8ag")}><p class="text-sm font-semibold svelte-1uha8ag">${escape_html(action.title)}</p> <p class="text-xs text-base-content/70 svelte-1uha8ag">${escape_html(action.description)}</p></a>`);
            }
            $$renderer4.push(`<!--]--></div></div></div>`);
          },
          $$slots: { default: true }
        });
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
