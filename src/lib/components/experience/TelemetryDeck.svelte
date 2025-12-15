<script lang="ts">
	import { onMount } from 'svelte';
	import { experienceStore } from '$services/experience';
	import { get } from 'svelte/store';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let raf: number;
	let animationActive = true;

	// Simulated Data Streams
	const historySize = 60;
	let fpsData: number[] = new Array(historySize).fill(60);
	let latencyData: number[] = new Array(historySize).fill(20);
	let requestData: number[] = new Array(historySize).fill(100);

	function updateData() {
		// Shift and push new noisy values
		fpsData.shift();
		fpsData.push(58 + Math.random() * 4); // 58-62

		latencyData.shift();
		latencyData.push(Math.max(10, latencyData[historySize - 2] + (Math.random() - 0.5) * 5));

		requestData.shift();
		requestData.push(Math.max(50, Math.min(150, requestData[historySize - 2] + (Math.random() - 0.5) * 20)));
	}

	function drawGraph(
		ctx: CanvasRenderingContext2D, 
		data: number[], 
		x: number, 
		y: number, 
		w: number, 
		h: number, 
		color: string, 
		label: string,
		min: number, 
		max: number
	) {
		// Background
		ctx.fillStyle = 'rgba(20, 30, 50, 0.5)';
		ctx.fillRect(x, y, w, h);
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
		ctx.strokeRect(x, y, w, h);

		// Grid lines
		ctx.beginPath();
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
		for(let i=1; i<4; i++) {
			let ly = y + (h * i) / 4;
			ctx.moveTo(x, ly);
			ctx.lineTo(x + w, ly);
		}
		ctx.stroke();

		// Label
		ctx.fillStyle = color;
		ctx.font = '10px "JetBrains Mono", monospace';
		ctx.fillText(`${label}: ${data[data.length-1].toFixed(1)}`, x + 6, y + 14);

		// Path
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 1.5;
		
		const step = w / (historySize - 1);
		
		for (let i = 0; i < historySize; i++) {
			const val = data[i];
			const norm = (val - min) / (max - min);
			const py = y + h - (norm * h); // Invert Y
			
			if (i === 0) ctx.moveTo(x, py);
			else ctx.lineTo(x + i * step, py);
		}
		ctx.stroke();

		// Fill area
		ctx.lineTo(x + w, y + h);
		ctx.lineTo(x, y + h);
		ctx.closePath();
		ctx.fillStyle = color.replace(')', ', 0.1)').replace('rgb', 'rgba');
		ctx.fill();
	}

	function drawRadar(
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		radius: number,
		color: string
	) {
		const time = Date.now() * 0.002;
		
		// Circles
		ctx.beginPath();
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2);
		ctx.stroke();

		// Sweep
		const angle = time % (Math.PI * 2);
		ctx.beginPath();
		const grad = ctx.createConicGradient(angle, x, y);
		grad.addColorStop(0, 'rgba(0,0,0,0)');
		grad.addColorStop(0.1, color.replace(')', ', 0.0)')); // Fix for rgba replacement if needed
		grad.addColorStop(1, color.replace(')', ', 0.4)'));
		
		ctx.fillStyle = grad; // Use gradient for sweep
		ctx.arc(x, y, radius, angle, angle + 0.5); // Small wedge
		ctx.lineTo(x, y);
		ctx.fill();
		
		// Blip
		if (Math.random() > 0.95) {
			const bx = x + (Math.random() - 0.5) * radius * 1.4;
			const by = y + (Math.random() - 0.5) * radius * 1.4;
			ctx.fillStyle = '#fff';
			ctx.fillRect(bx, by, 2, 2);
		}
	}

	onMount(() => {
		if (canvas) {
			ctx = canvas.getContext('2d');
			
			const resize = () => {
				const rect = canvas.getBoundingClientRect();
				canvas.width = rect.width * window.devicePixelRatio;
				canvas.height = rect.height * window.devicePixelRatio;
				ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
			};
			window.addEventListener('resize', resize);
			resize();

			const animate = () => {
				if (!ctx || !animationActive) return;

				const { width, height } = canvas.getBoundingClientRect();
				ctx.clearRect(0, 0, width, height);

				updateData();

				// Layout
				const gap = 10;
				const graphH = (height - gap * 2) / 3;
				const graphW = width * 0.6;
				
				drawGraph(ctx, fpsData, 0, 0, graphW, graphH, '#00fff9', 'FPS', 30, 90);
				drawGraph(ctx, latencyData, 0, graphH + gap, graphW, graphH, '#ff00c1', 'LATENCY (ms)', 0, 100);
				drawGraph(ctx, requestData, 0, (graphH + gap) * 2, graphW, graphH, '#7cf7ff', 'RPS', 0, 200);

				// Radar / Status section
				const radarX = graphW + gap + (width - graphW - gap) / 2;
				drawRadar(ctx, radarX, height / 2, Math.min(width - graphW, height) * 0.35, 'rgba(0, 255, 249, 0.5)');

				// Status Text
				ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
				ctx.font = '10px "JetBrains Mono", monospace';
				ctx.textAlign = 'center';
				ctx.fillText('SYSTEM: OPTIMAL', radarX, height - 10);
				ctx.textAlign = 'left'; // Reset

				raf = requestAnimationFrame(animate);
			};
			
			// Initial check and setup
			if (!get(experienceStore).isPerformanceMode) {
				animate();
			} else {
				animationActive = false;
			}

			// Subscribe to performance mode changes
			const unsub = experienceStore.subscribe(state => {
				if (state.isPerformanceMode !== !animationActive) {
					animationActive = !state.isPerformanceMode;
					if (animationActive) {
						// Resume animation
						if (!raf) animate();
					} else {
						// Stop animation and clear canvas
						cancelAnimationFrame(raf);
						raf = 0;
						if (ctx) {
							const { width, height } = canvas.getBoundingClientRect();
							ctx.clearRect(0, 0, width, height);
						}
					}
				}
			});


			return () => {
				window.removeEventListener('resize', resize);
				cancelAnimationFrame(raf);
				unsub();
			};
		}
	});
</script>

<div class="deck-wrap">
	<canvas bind:this={canvas} class="deck-canvas"></canvas>
	<div class="glare" aria-hidden="true"></div>
</div>

<style>
	.deck-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 240px;
		background: rgba(5, 10, 20, 0.6);
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
	}

	.deck-canvas {
		width: 100%;
		height: 100%;
		display: block;
	}

	.glare {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
		pointer-events: none;
	}
</style>
