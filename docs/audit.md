# Mk.01 Studio — Baseline Audit (2025-02-15)

## 1. Experience Snapshot

- **Architecture:** Home, About, Journal list, Journal detail; placeholder links for Work, Systems, Policies.
- **Brand Voice:** Aspirational copy established; needs visual identity assets (logo, imagery, motion language).
- **Design System:** Tailwind + DaisyUI base; custom components introduced (AppShell, PageSection). Opportunity for deeper tokens (spacing, typography, color ramps).
- **Content Depth:** 2 seed posts; no case studies or lab entries yet. About page aligned with studio positioning.
- **Interactivity:** Theme toggle only. No animated transitions, interactive showcases, or contact funnel.

## 2. Benchmark Targets (World-Class Criteria)

### Product Excellence

- **Performance:** Lighthouse ≥ 95 for Performance/Accessibility/Best Practices/SEO on core pages (desktop & mobile).
- **Accessibility:** WCAG 2.2 AA compliance; keyboard focus states, aria landmarks, semantic heading structure, contrast ratios.
- **Internationalization:** Multilingual scaffolding (EN + KO minimum) with locale-sensitive content & metadata.
- **Reliability:** Automated testing (Playwright smoke, visual regression optional) + CI gates.

### Brand & Storytelling

- **Visual Identity:** Cohesive logo system, typography pairing, color palette with narrative use, iconography.
- **Hero Moments:** Motion-crafted hero, interactive case studies, scroll-based storytelling sequences.
- **Content Strategy:** Editorial calendar, tags/topics, lab experiments, long-form essays, newsletter archive, uses/gear page.
- **Trust Signals:** Testimonials, client roster highlights, press mentions, changelog/colophon.

### Engagement & Growth

- **SEO Foundations:** Structured data, OpenGraph/Twitter cards, sitemap, RSS, canonical URLs, dynamic meta tags.
- **Conversion Pathways:** Contact form with CRM/email integration, newsletter + lead magnet, CTA tracking.
- **Analytics & Insights:** Privacy-friendly analytics (Plausible/PostHog), heatmap/session tools optional.
- **Community Hooks:** Comments/reactions (e.g., Giscus), share buttons, micro-surveys.

## 3. Gap Analysis (Current vs. Target)

| Area                 | Current Status                            | Gap                                                                  |
| -------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| Performance          | Unmeasured; likely high baseline          | Need quantified metrics, performance budget, tooling (Lighthouse CI) |
| Accessibility        | Basic semantic structure; limited testing | Add automated + manual audits, alt text coverage, focus management   |
| SEO                  | Default metadata only                     | Implement dynamic head management, OG images, sitemap, RSS           |
| Content              | Minimal seed posts                        | Build taxonomy, publish core pillars (launch stories, systems, lab)  |
| Visual Identity      | Typography only                           | Develop brand kit, motion language, 3D/illustration direction        |
| Interaction          | Static sections                           | Add micro-interactions, interactive case components, transitions     |
| Internationalization | Single language                           | Introduce locale routing, translation pipeline, localized dates      |
| Conversion           | Email CTA only                            | Build contact form, scheduling link, newsletter modal, analytics     |
| Operations           | Manual review                             | Set up CI, testing suite, content linting, release process           |

## 4. Success Metrics Dashboard (Initial)

- **Engagement:** Avg. session duration ≥ 2m 30s, bounce rate ≤ 40%, scroll depth ≥ 70% on hero.
- **Growth:** Newsletter conversion ≥ 3%, inquiry conversion ≥ 1.5%.
- **Content:** Publish cadence ≥ 2 pieces/month, case studies ≥ 4 annually.
- **Technical:** CLS < 0.1, LCP < 2.2s, TBT < 200ms, a11y automated score ≥ 0.95.

## 5. Prioritized Backlog (Next Steps)

1. **Measurement Setup**
   - Add performance testing scripts (Lighthouse CI) and accessibility linting.
   - Integrate analytics (Plausible/PostHog) respecting privacy.
2. **Design System Expansion**
   - Build token map (colors, typography scale, spacing) + component library documentation.
   - Create hero art direction (SVG/3D assets) and motion prototypes.
3. **Content & SEO Foundations**
   - Extend markdown frontmatter schema (heroMedia, summary, canonical, locale).
   - Implement dynamic meta generator, sitemap, RSS feed, OpenGraph pipeline.
4. **Engagement Infrastructure**
   - Launch contact form with server actions, email notifications, CRM integration.
   - Add newsletter signup, waiting list, and call-to-action tracking.
5. **Signature Experiences**
   - Prototype interactive case study layout (scrollytelling, rich media).
   - Develop “Lab” section with code playground, experiment cards.

This audit establishes the baseline and target criteria for becoming a world-leading studio platform. Next milestone: tackle performance & SEO foundations alongside design system deepening.
