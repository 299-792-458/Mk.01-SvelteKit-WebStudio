import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const pointer = writable({ x: 0, y: 0, normalized: { x: 0, y: 0 } });
export const viewport = writable({ width: 0, height: 0 });
export const quality = writable<'high' | 'medium' | 'low'>('high');

if (browser) {
	const update = () => {
		const w = window.innerWidth;
		const h = window.innerHeight;
		viewport.set({ width: w, height: h });

		if (w < 768) {
			quality.set('low');
		} else if (w < 1280) {
			quality.set('medium');
		} else {
			quality.set('high');
		}
	};

	const onMove = (event: PointerEvent | MouseEvent) => {
		const w = window.innerWidth;
		const h = window.innerHeight;
		const x = event.clientX;
		const y = event.clientY;
		pointer.set({
			x,
			y,
			normalized: {
				x: (x / w) * 2 - 1,
				y: (y / h) * 2 - 1
			}
		});
	};

	update();
	window.addEventListener('resize', update);
	window.addEventListener('pointermove', onMove, { passive: true });

	const visibilityHandler = () => {
		if (document.visibilityState === 'hidden') {
			quality.set('low');
		} else {
			update();
		}
	};

	document.addEventListener('visibilitychange', visibilityHandler);
}
