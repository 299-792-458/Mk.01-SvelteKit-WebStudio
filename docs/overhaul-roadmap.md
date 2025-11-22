# Mk.01 Studio Overhaul Roadmap

## Vision

- Deliver a cinematic, interactive studio that demonstrates mastery across creative coding, product UX, storytelling, and engineering discipline.
- Triple the current surface area with flagship experiences that feel bespoke on every page while remaining cohesive.
- Showcase depth in modern web tooling: real-time data, 3D environments, motion systems, content orchestration, and accessibility baked in.

## Sitemap & Feature Modules

- **Landing / Experience Runway**
  - Scroll-driven narrative with hero 3D scene, layered parallax, volumetric lighting, ambient soundscape toggle.
  - Real-time telemetry panel (active experiments, uptime, global collaborators) fed by configurable data sources.
  - Showcase carousel tying into Work, Blog, Labs modules with context-aware CTAs.
- **Work Library**
  - Filterable gallery (tags, industry, technology, timeline views) + bookmarking.
  - Case Study builder with modular chapters (mission, strategy, system design, build process, results, behind-the-scenes lab).
  - Interactive artifacts: embedded prototypes, before/after diff sliders, Rive/Lottie animations.
- **Blog / Journal**
  - MDX pipeline with interactive components (code sandboxes, charts, audio stories).
  - Reading modes (classic, immersive, focus), estimated read time, highlight-to-share, footnotes.
- **Labs**
  - Playground of experimental demos (WebGL shaders, AI-assisted tools, WebAudio experiences).
  - Live toggles to inspect tech stack per experiment; integration with GitHub/NPM badges.
- **About / Culture**
  - Team constellation layout, timeline with 3D motion path, values manifesto.
  - Studio rituals, toolchain wall, certification/award showcase with motion.
- **Contact / Project Planner**
  - Guided questionnaire leading into auto-generated proposal summary.
  - Calendly integration, downloadable capabilities deck, push to CRM (placeholder hook).
- **Global Systems**
  - Command palette (spotlight-style) for quick navigation.
  - Dynamic mega-menu with context-aware panels.
  - Theme engine (day/night/experimental palettes) + localized content scaffolding (KR/EN).

## Component Systems

- **Design Tokens**: spacing scale, typography ramps, color elevation, glass morphism layers, motion durations/easing presets, shadow/lighting sets.
- **Primitive Components** (Stack, GridFrame, Surface, Card, GlowButton, MarqueeBand, SpotlightImage, StatBlock, Timeline, Carousel, AccordionStacks).
- **Experience Components** (HeroSequencer, ScrollStory, CaseChapter, ExperimentShowcase, CommandPalette, ThemeSwitcher, AudioController).
- **Utility Infrastructure**: animation choreographer, viewport observer, intersection-driven triggers, 3D scene loader, content parser.

## Architecture & Data Strategy

- Restructure `src` into domains:
  - `src/modules/<domain>` for pages/features.
  - `src/components/ui`, `src/components/experience`, `src/components/composition`.
  - `src/content` for MDX/JSON data; export normalized types.
  - `src/config` for navigation, theming, analytics, localization.
  - `src/services` for CMS, analytics hooks, external APIs.
  - `src/styles` for tokens, utilities, Tailwind layers.
- Content pipeline options:
  1. **Local MDX + JSON** with mdsvex, unified remark plugins, generated TypeScript types via `contentlayer` or custom script.
  2. **Headless CMS (Sanity/Contentful)** with GraphQL queries cached via SvelteKit load functions.
- Data contracts: define `Project`, `Article`, `Experiment`, `TeamMember`, `Testimonial` interfaces with slug-based routing.
- Add analytics/events abstraction to track interactions (hero toggles, command palette, CTA conversions).

## Motion & Visual Technologies

- Integrate GSAP timeline orchestration, Framer Motion style transitions via `@motionone/svelte`.
- Implement Lenis smooth scrolling with fallback for reduced-motion.
- WebGL layer using Three.js + post-processing (bloom, depth of field), module for shader demos.
- Support Rive/Lottie via component wrappers; lazy load heavy assets.
- Define motion spec document detailing duration tiers, easing curves, choreography principles.

## Tooling & Quality

- Storybook or Histoire setup for component library documentation.
- Visual regression testing with Playwright screenshot diffs.
- Axe accessibility checks integrated into CI.
- Performance budget scripts (Lighthouse CI) with target thresholds.
- Add automated content linting (spellcheck, link validation).
- Document architecture decisions in `/docs/adr/*.md`.

## Milestones

1. **Foundation Sprint**
   - Finalize content strategy, install dependencies (GSAP, Three.js, Lenis, motion, mdsvex).
   - Restructure folders, introduce tokens, add configuration scaffolding.
2. **Experience Core**
   - Build hero sequence, command palette, navigation system; create Work gallery base.
   - Seed sample content (≥9 projects, ≥12 articles, ≥6 experiments).
3. **Deep Content**
   - Case study template, blog detail page with embeds, Labs interactive demos.
   - About + Contact experiences with integrations.
4. **Polish & Verification**
   - Accessibility/performance pass, responsive QA, visual regression baselines.
   - Ship documentation, deployment pipeline, marketing assets (Open Graph, meta themes).

## Next Actions

- Approve sitemap/features list and prioritize Foundation Sprint tasks.
- Decide on CMS strategy and content tooling.
- Begin design explorations (Figma/Framer references) to guide component builds.
- Start Foundation Sprint implementation in repo.
