<script lang="ts">
	// This component is actually a Svelte Action wrapper for easy usage in markup
	// Usage: <div use:tilt={{ max: 15, scale: 1.05 }}>Content</div>
</script>

<script context="module" lang="ts">
	import { experienceStore } from '$services/experience';
	import { get } from 'svelte/store';

	export function tilt(node: HTMLElement, options: { max?: number, scale?: number, glare?: boolean } = {}) {
		if (get(experienceStore).isPerformanceMode) {
			return { destroy() {} }; // Do nothing if performance mode is active
		}

		// Create Glare Element
		let glareEl: HTMLDivElement;
		if (glare) {
			glareEl = document.createElement('div');
			Object.assign(glareEl.style, {
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				background: 'linear-gradient(125deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 40%)',
				transform: 'translateZ(1px)', // Layering
				pointerEvents: 'none',
				mixBlendMode: 'overlay',
				opacity: '0',
				transition: 'opacity 0.3s ease',
				borderRadius: 'inherit'
			});
			node.appendChild(glareEl);
		}

		// Initial styles
		node.style.transition = 'transform 0.1s ease-out';
		node.style.transformStyle = 'preserve-3d';
		if (!node.style.position) node.style.position = 'relative';

		function onMouseEnter() {
			bounds = node.getBoundingClientRect();
			node.style.transition = 'none'; // Instant reaction
			if (glareEl) glareEl.style.opacity = '1';
		}

		function onMouseMove(e: MouseEvent) {
			const centerX = bounds.left + bounds.width / 2;
			const centerY = bounds.top + bounds.height / 2;
			
			const percentX = (e.clientX - centerX) / (bounds.width / 2);
			const percentY = (e.clientY - centerY) / (bounds.height / 2);

			const rotX = percentY * max * -1; // Invert for natural feel
			const rotY = percentX * max;

			node.style.transform = `
				perspective(1000px)
				scale(${scale})
				rotateX(${rotX}deg)
				rotateY(${rotY}deg)
			`;

			if (glareEl) {
				const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI) - 90;
				glareEl.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`;
			}
		}

		function onMouseLeave() {
			node.style.transition = 'transform 0.5s ease-out';
			node.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
			if (glareEl) glareEl.style.opacity = '0';
		}

		node.addEventListener('mouseenter', onMouseEnter);
		node.addEventListener('mousemove', onMouseMove);
		node.addEventListener('mouseleave', onMouseLeave);

		return {
			destroy() {
				node.removeEventListener('mouseenter', onMouseEnter);
				node.removeEventListener('mousemove', onMouseMove);
				node.removeEventListener('mouseleave', onMouseLeave);
				if (glareEl) glareEl.remove();
			}
		};
	}
</script>
