export type MotionEase =
  | "linear"
  | "outExpo"
  | "outQuint"
  | "outCirc"
  | "outBack"
  | "inOutCubic"
  | "inOutCirc"
  | "inOutQuint";

export interface MotionPreset {
  id: string;
  duration: number;
  ease: MotionEase;
  delay?: number;
  stagger?: number;
  offset?: { x?: number; y?: number };
  blur?: boolean;
}

export const motionCurves: Record<
  MotionEase,
  [number, number, number, number]
> = {
  linear: [0, 0, 1, 1],
  outExpo: [0.16, 1, 0.3, 1],
  outQuint: [0.23, 1, 0.32, 1],
  outCirc: [0.85, 0, 0.15, 1],
  outBack: [0.34, 1.56, 0.64, 1],
  inOutCubic: [0.65, 0, 0.35, 1],
  inOutCirc: [0.78, 0, 0.22, 1],
  inOutQuint: [0.83, 0, 0.17, 1],
};

export const motionPresets: MotionPreset[] = [
  { id: "surface-rise", duration: 0.35, ease: "outQuint", offset: { y: 10 } },
  {
    id: "fade-in",
    duration: 0.4,
    ease: "outExpo",
    offset: { y: 12 },
    blur: true,
  },
  { id: "orbit", duration: 3.4, ease: "linear" },
  {
    id: "hero-lift",
    duration: 0.9,
    ease: "outExpo",
    offset: { y: 28 },
    blur: true,
  },
  {
    id: "cascade",
    duration: 0.8,
    ease: "outExpo",
    stagger: 0.06,
    offset: { y: 16 },
    blur: true,
  },
  { id: "chip", duration: 0.5, ease: "outBack", offset: { y: 8 } },
  {
    id: "timeline",
    duration: 0.7,
    ease: "inOutCubic",
    offset: { x: -10 },
    blur: true,
  },
];

export const getMotionPreset = (id?: string): MotionPreset | undefined =>
  motionPresets.find((preset) => preset.id === id);
