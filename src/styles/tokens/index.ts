import type { MotionPreset } from "$styles/tokens/motion";

export interface ColorToken {
  name: string;
  value: string;
  description?: string;
}

export interface TypographyScale {
  label: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
}

export interface SpaceScale {
  key: string;
  value: string;
}

export type MotionScale = MotionPreset;

export const colorPalette: ColorToken[] = [
  { name: "primary-50", value: "#f0f5ff" },
  { name: "primary-500", value: "#2f5dff", description: "Hero highlight" },
  { name: "secondary-500", value: "#ff6bcb", description: "Accent gradients" },
  { name: "neutral-900", value: "#090b1a", description: "Base foreground" },
];

export const typographyScale: TypographyScale[] = [
  { label: "display-xl", fontSize: "clamp(3rem, 10vw, 6rem)", lineHeight: "1" },
  {
    label: "display-lg",
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
    lineHeight: "1.05",
  },
  {
    label: "headline-md",
    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
    lineHeight: "1.2",
  },
  { label: "body-lg", fontSize: "1.125rem", lineHeight: "1.7" },
  {
    label: "detail-sm",
    fontSize: "0.875rem",
    lineHeight: "1.6",
    letterSpacing: "0.04em",
  },
];

export const spaceScale: SpaceScale[] = [
  { key: "xs", value: "0.25rem" },
  { key: "sm", value: "0.5rem" },
  { key: "md", value: "1rem" },
  { key: "lg", value: "1.75rem" },
  { key: "xl", value: "2.5rem" },
  { key: "2xl", value: "4rem" },
];

export const motionScale: MotionScale[] = [
  { id: "float", duration: 1.6, ease: "easeInOutSine" },
  { id: "cinematic-enter", duration: 1.2, ease: "easeOutCubic", stagger: 0.08 },
  { id: "command-palette", duration: 0.45, ease: "easeOutBack" },
];
