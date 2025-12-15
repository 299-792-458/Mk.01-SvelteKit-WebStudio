<script lang="ts">
	import { page } from '$app/stores';
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import GlitchText from '$lib/components/motion/ScrambleText.svelte'; // Reusing ScrambleText
</script>

<div class="error-page">
	<div class="noise-overlay"></div>
	<div class="scanline"></div>
	
	<PageSection>
		<div class="content">
			<div class="code-display">
				<span class="status-code">{$page.status}</span>
				<span class="separator">::</span>
				<span class="status-msg">SIGNAL_LOST</span>
			</div>

			<h1 class="headline">
				<GlitchText text="Target coordinates not found." active={true} speed={40} />
			</h1>

			<p class="sub">
				The requested sector does not exist in this reality simulation.
				<br />
				Redirecting recommended.
			</p>

			<div class="actions">
				<a href="/" class="btn btn-primary btn-lg">
					Return to Base
				</a>
				<a href="/contact" class="btn btn-ghost btn-lg">
					Report Anomaly
				</a>
			</div>
		</div>
	</PageSection>
</div>

<style>
	.error-page {
		min-height: 80vh;
		display: grid;
		place-items: center;
		position: relative;
		overflow: hidden;
		background: #050505;
		color: #e0e0e0;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2rem;
		position: relative;
		z-index: 10;
	}

	.code-display {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.2rem;
		color: #ff0055; /* Error Red */
		letter-spacing: 0.1em;
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.separator {
		opacity: 0.5;
	}

	.headline {
		font-size: clamp(2rem, 5vw, 4rem);
		font-weight: 800;
		line-height: 1.1;
		max-width: 20ch;
	}

	.sub {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.6;
	}

	.actions {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.noise-overlay {
		position: absolute;
		inset: 0;
		opacity: 0.05;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		pointer-events: none;
	}

	.scanline {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background: rgba(255, 255, 255, 0.1);
		animation: scan 4s linear infinite;
		pointer-events: none;
	}

	@keyframes scan {
		0% { transform: translateY(-10vh); opacity: 0; }
		5% { opacity: 1; }
		95% { opacity: 1; }
		100% { transform: translateY(110vh); opacity: 0; }
	}
</style>
