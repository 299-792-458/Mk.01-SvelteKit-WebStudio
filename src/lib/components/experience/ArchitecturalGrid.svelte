<script lang="ts">
	import { onMount } from 'svelte';
	import { experienceStore } from '$services/experience';
	import { get } from 'svelte/store';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let raf: number;
	let animationActive = true;

	// Grid configuration
	const gridSize = 120; // px
	const crossSize = 4; // px
	const influenceRadius = 250; // px

	let mouseX = -1000;
	let mouseY = -1000;

	onMount(() => {
		ctx = canvas.getContext('2d');
		
		const resize = () => {
			const parent = canvas.parentElement;
			if (parent) {
				canvas.width = parent.clientWidth * window.devicePixelRatio;
				canvas.height = parent.clientHeight * window.devicePixelRatio;
				ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		};
		
		const onMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		window.addEventListener('resize', resize);
		window.addEventListener('mousemove', onMouseMove);
		resize();

		const draw = () => {
			if (!ctx || !animationActive) return;
			const width = window.innerWidth;
			const height = window.innerHeight;

			ctx.clearRect(0, 0, width, height);

			// Grid styling
			const cols = Math.ceil(width / gridSize);
			const rows = Math.ceil(height / gridSize);

			for (let i = 0; i <= cols; i++) {
				for (let j = 0; j <= rows; j++) {
					const x = i * gridSize;
					const y = j * gridSize;

					// Distance from mouse
					const dx = x - mouseX;
					const dy = y - mouseY;
					const dist = Math.sqrt(dx * dx + dy * dy);
					
					// Calculate opacity based on distance (closer = brighter)
					let alpha = 0.03; // Base visibility
					if (dist < influenceRadius) {
						alpha += (1 - dist / influenceRadius) * 0.15;
					}

					ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
					
					// Draw cross at intersection
					ctx.fillRect(x - crossSize / 2, y, crossSize, 1); // Horizontal part
					ctx.fillRect(x, y - crossSize / 2, 1, crossSize); // Vertical part

					// Optionally draw faint lines connecting them near mouse
					if (dist < influenceRadius) {
						ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
						ctx.lineWidth = 0.5;
						ctx.beginPath();
						if (i < cols) { ctx.moveTo(x, y); ctx.lineTo(x + gridSize, y); }
						if (j < rows) { ctx.moveTo(x, y); ctx.lineTo(x, y + gridSize); }
						ctx.stroke();
					}
				}
			}

			raf = requestAnimationFrame(draw);
		};

		// Check initial performance mode
		if (!get(experienceStore).isPerformanceMode) {
			draw();
		} else {
			animationActive = false;
		}

		const unsub = experienceStore.subscribe(state => {
			if (state.isPerformanceMode !== !animationActive) {
				animationActive = !state.isPerformanceMode;
				if (animationActive) {
					draw();
				} else {
					cancelAnimationFrame(raf);
					ctx?.clearRect(0, 0, canvas.width, canvas.height);
				}
			}
		});

		return () => {
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', onMouseMove);
			cancelAnimationFrame(raf);
			unsub();
		};
	});
</script>

<div class="grid-layer">
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.grid-layer {
		position: fixed;
		inset: 0;
		z-index: -40; /* Behind content, in front of fluid background */
		pointer-events: none;
		opacity: 0.6;
		mix-blend-mode: overlay;
	}

	canvas {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
