# Mk.01 SvelteKit Studio — Vision Blueprint

## Brand Direction

- **Positioning:** A globally accessible creative studio that blends personal blogging, product showcases, and digital experiments.
- **Tone:** Confident, imaginative, approachable; balances craft-driven detail with playful curiosity.
- **Audience:** Makers, freelancers, clients seeking creative services, collaborators, and readers interested in modern web craft.

## Experience Pillars

- **Discoverability:** Clear navigation, SEO-friendly structure, and curated entry points for different visitor intents.
- **Storytelling:** Rich long-form posts, case studies, and media embeds that spotlight process and outcomes.
- **Interactivity:** Theme switching, dynamic showcases, and exploratory UI micro-interactions.
- **Adaptability:** Modular content model supporting multilingual expansion and thematic projects.

## Information Architecture

- **Home:** Hero, manifesto, featured work/posts, service highlights, testimonials/social proof, newsletter/CTA, latest explorations.
- **About:** Personal/brand narrative, timeline, skills stack, values, collaborators, contact prompt.
- **Blog / Journal:** Filterable list (topics/tags), featured article, subscription CTA, archive browsing.
- **Work / Lab:** Case studies, interactive experiments, media gallery, call-to-action for inquiries.
- **Contact / Connect:** Contact form, availability, direct channels, social links, location/timezone.
- **Utility Pages:** Colophon, uses/gear, RSS, policies (privacy, terms), 404/maintenance states.

## Content System

- **Markdown Frontmatter:** title, date, description, tags, category, hero image, readingTime, draft flag, canonical URL, language.
- **Collections:** Posts, case studies, experiments, gear lists (via content modules or JSON).
- **Taxonomy:** Tags (free-form), Topics (curated set: design, development, process, business, inspiration).
- **Localization Ready:** Language key embedded in content; future `i18n` directory for translations.

## Design System Outline

- **Typography:** Display (serif or geometric), body (humanist sans), monospace accent; responsive type scale.
- **Color:** Dual-mode palettes (light/dark) with accent gradients; emphasize accessibility contrast.
- **Components:**
  - Layout primitives: `AppShell`, `PageSection`, `Hero`, `Grid`.
  - Navigation: global nav with mega panel, breadcrumb, footer with multi-column layout.
  - Content: `ArticleHeader`, `Prose`, `Tag`, `Card`, `Stat`, `Testimonial`, `Callout`.
  - Interactive: theme toggle, language switcher, carousel, timeline, contact form.
- **Icons & Illustrations:** Mix of custom SVG sets + open-source icons; subtle animated accents.

## Technical Foundations

- **Routing:** SvelteKit pages with server data loaders for content collections.
- **Styling:** Tailwind CSS + DaisyUI theme tokens, augmented with custom utility layers.
- **Content Pipeline:** `mdsvex` for Markdown/MDX; derived metadata at build-time for feeds and sitemaps.
- **SEO & Meta:** Central config for title templates, Open Graph/Twitter, structured data.
- **Analytics & Integrations:** Pluggable analytics providers, comment systems, newsletter API.
- **Testing & Quality:** Playwright for UI smoke tests, Vitest for utilities, linting hooks.

## Near-Term Roadmap

1. **Foundations**
   - Refine theme tokens, typography scale, spacing, and layout grid.
   - Build global navigation/footer, hero, section wrappers.
   - Set up metadata utilities, SEO defaults, RSS scaffold.
2. **Content Enhancements**
   - Enrich landing page, about, and blog experiences using new components.
   - Expand Markdown frontmatter schema; add reading time, tags, hero images.
   - Implement post listing filters, tag pages, and related content suggestions.
3. **Showcase & Interaction**
   - Introduce Work/Lab sections with structured data.
   - Add interactive widgets (timeline, testimonials carousel, contact form).
   - Prepare multilingual scaffolding and component-level a11y refinements.

## Success Metrics

- Time-on-page and scroll depth for hero sections and blog articles.
- Newsletter sign-ups / contact inquiries.
- SEO baseline: Core Web Vitals, lighthouse scores, index coverage.
- Maintainable codebase with documented components and content workflows.

## Guiding Principles

- Build iteratively with reusable primitives.
- Keep accessibility, performance, and inclusivity central.
- Encourage experimentation—modular architecture should welcome new ideas.
- Document decisions to keep the studio future-friendly.
