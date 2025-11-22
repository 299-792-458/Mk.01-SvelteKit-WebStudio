export type MotionEase =
	| 'linear'
	| 'easeInQuad'
	| 'easeOutQuad'
	| 'easeInOutQuad'
	| 'easeOutCubic'
	| 'easeInOutSine'
	| 'easeOutBack';

export interface MotionPreset {
	id: string;
	duration: number;
	ease: MotionEase;
	delay?: number;
	stagger?: number;
}

export const motionPresets: MotionPreset[] = [
	{ id: 'surface-rise', duration: 0.35, ease: 'easeOutCubic' },
	{ id: 'fade-in', duration: 0.4, ease: 'easeInOutSine' },
	{ id: 'orbit', duration: 3.4, ease: 'linear' }
];
