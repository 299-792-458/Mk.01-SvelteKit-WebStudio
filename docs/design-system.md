# Mk.01 Design System Foundations

## 1. Type Ramp

- **Display:** `Sora` — expressive headings, large hero statements.
- **Body:** `Inter` — legible copy, UI text, captions.
- **Mono:** `JetBrains Mono` — code snippets and technical callouts.

| Token         | Usage            | Size                        |
| ------------- | ---------------- | --------------------------- |
| `display-2xl` | Hero headlines   | clamp(3.5rem, 6vw, 4.5rem)  |
| `display-xl`  | Section headings | clamp(2.75rem, 5vw, 3.5rem) |
| `display-lg`  | Article titles   | clamp(2rem, 3vw, 2.75rem)   |
| `text-lg`     | Body lead        | 1.125rem / 1.8              |
| `text-base`   | Standard copy    | 1rem / 1.7                  |
| `text-sm`     | Meta info        | 0.95rem / 1.5               |

## 2. Color System

- **Primary (`#6366F1` → `#A855F7` gradient):** Hero, CTAs, accents.
- **Secondary (`#0EA5E9`):** Interactive markers, lab highlights.
- **Accent (`#F97316`):** Motion cues, badges, status indicators.
- **Neutral:** Base background `#F8FAFC`, content `#0F172A`, overlays `#1E293B`.
- **Dark Mode:** Mirror palette with desaturated primaries, deeper neutrals.

## 3. Spacing & Layout

- **Baseline grid:** 4px; component rhythm built around multiples of 8/12/16.
- **Section padding tokens:** `section-compact` (48px), `section-default` (64px), `section-xl` (96px).
- **Max-widths:** `content` (720px), `wide` (1024px), `full` (1240px).
- **Cards:** 24px inner padding, 20px corner radius, subtle glassmorphism blur.

## 4. Motion

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for hero/CTA transitions; `ease-out` for microinteractions.
- **Durations:** 120ms (micro), 240ms (standard), 420ms (hero/section enters).
- **Utilities:** Tailwind keyframes (gradient shift, float, fade/slide) to be attached to hero art and interactive modules.

## 5. Accessibility Guardrails

- Color contrast ≥ 4.5:1 for body text, 3:1 for large text.
- Motion reduction support via `prefers-reduced-motion`.
- Focus styles with dual indicators (outline + background shift).

## 6. Implementation Roadmap

1. Extend Tailwind theme with fonts, spacing scale, shadows, animations, and DaisyUI custom themes (`studio-light`, `studio-dark`).
2. Build reusable primitives: `Card`, `Badge`, `Stat`, `SectionHeading`, `RichLink`.
3. Define token documentation and usage stories (Storybook or mdsvex-driven style guide).
