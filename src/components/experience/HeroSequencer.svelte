<script lang="ts">
	import Stack from '$components/ui/Stack.svelte';
	import Surface from '$components/ui/Surface.svelte';
	import type { AppConfig } from '$config/app.config';
	import type { LandingShowcase } from '$modules/landing';
	import { motionScale } from '$tokens/index';

	export let identity: AppConfig['identity'];
	export let metrics: AppConfig['metrics'];
	export let showcases: LandingShowcase[] = [];

	const heroMotion = motionScale.find((preset) => preset.id === 'cinematic-enter');
</script>

<section class="hero-stage">
	<div class="nebula" aria-hidden="true">
		<div class="orb orb-a" />
		<div class="orb orb-b" />
		<div class="orb orb-c" />
		<div class="gridlines" />
	</div>

	<div class="content">
		<div class="intro">
			<Stack gap="1.25rem">
				<span class="eyebrow">Mk.01 Studio</span>
				<h1 style={`--motion-duration: ${heroMotion?.duration ?? 1.2}s`}>
					{identity.tagline}
				</h1>
				<p>{identity.description}</p>

				<div class="actions">
					<a href="/work" class="primary">Experience the work</a>
					<a href="/labs" class="secondary">Enter the labs</a>
				</div>
			</Stack>
		</div>

		<aside class="details">
			<Surface variant="glass" padding="md" as="div">
				<dl>
					<div>
						<dt>Experiments shipped</dt>
						<dd>{metrics.experimentsShipped}</dd>
					</div>
					<div>
						<dt>Global collaborators</dt>
						<dd>{metrics.activeCollaborators}</dd>
					</div>
					<div>
						<dt>Average sprint length</dt>
						<dd>{metrics.averageSprintLength}</dd>
					</div>
					<div>
						<dt>Response time</dt>
						<dd>{metrics.responseTime}</dd>
					</div>
				</dl>
			</Surface>

			<div class="showcase">
				{#each showcases.slice(0, 2) as project}
					<article>
						<div class="cover" style={`--accent: ${project.accent ?? 'transparent'}`}>
							<img src={project.image} alt={project.title} loading="lazy" />
						</div>
						<div>
							<p class="label">Spotlight</p>
							<h3>{project.title}</h3>
							<p class="summary">{project.summary}</p>
							<a href={`/work/${project.slug}`} class="more"> View project </a>
						</div>
					</article>
				{/each}
			</div>
		</aside>
	</div>
</section>

<style>
	.hero-stage {
		position: relative;
		padding: clamp(6rem, 12vw, 8.5rem) 0 clamp(4rem, 7vw, 6rem);
		overflow: hidden;
		color: #eaf0ff;
	}

	.nebula {
		position: absolute;
		inset: 0;
		background: radial-gradient(140% 90% at 60% 0%, rgba(47, 93, 255, 0.45), rgba(9, 13, 31, 0.96));
		filter: saturate(120%);
		animation: pulse 12s ease-in-out infinite alternate;
	}

	.gridlines {
		position: absolute;
		inset: 15% 8% auto 8%;
		height: 70%;
		background-image:
			linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
		background-size: 60px 60px;
		mask-image: radial-gradient(circle at top, rgba(255, 255, 255, 0.45), transparent 75%);
	}

	.orb {
		position: absolute;
		border-radius: 999px;
		filter: blur(0);
		opacity: 0.75;
		mix-blend-mode: screen;
	}

	.orb::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		filter: blur(30px);
		background: inherit;
	}

	.orb-a {
		top: -8%;
		left: 12%;
		width: 28rem;
		height: 28rem;
		background: radial-gradient(circle, rgba(255, 107, 203, 0.7), transparent 68%);
		animation: drift 18s ease-in-out infinite alternate;
	}

	.orb-b {
		bottom: -12%;
		right: -6%;
		width: 30rem;
		height: 30rem;
		background: radial-gradient(circle, rgba(47, 93, 255, 0.6), transparent 65%);
		animation: drift 22s ease-in-out infinite alternate-reverse;
	}

	.orb-c {
		top: 30%;
		right: 35%;
		width: 14rem;
		height: 14rem;
		background: radial-gradient(circle, rgba(72, 220, 255, 0.6), transparent 60%);
		animation: float 12s ease-in-out infinite;
	}

	.content {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
		gap: clamp(2.5rem, 6vw, 4rem);
		max-width: min(1080px, 90vw);
		margin: 0 auto;
		align-items: start;
	}

	.intro h1 {
		font-size: clamp(2.8rem, 6vw, 4.6rem);
		line-height: 1;
		font-weight: 700;
		letter-spacing: -0.02em;
		animation: heroEnter var(--motion-duration, 1.2s) ease-out both;
	}

	.intro p {
		font-size: clamp(1rem, 2vw, 1.2rem);
		color: rgba(226, 232, 255, 0.78);
		max-width: 36rem;
	}

	.eyebrow {
		color: rgba(226, 232, 255, 0.66);
		letter-spacing: 0.45em;
		text-transform: uppercase;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.actions a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.9rem 1.6rem;
		border-radius: 0.9rem;
		font-size: 0.92rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		text-decoration: none;
		transition:
			transform 220ms ease,
			box-shadow 220ms ease,
			background 220ms ease;
	}

	.actions a.primary {
		background: linear-gradient(135deg, rgba(47, 93, 255, 0.95), rgba(255, 107, 203, 0.95));
		color: #050816;
		box-shadow: 0 18px 40px rgba(47, 93, 255, 0.35);
	}

	.actions a.primary:hover,
	.actions a.primary:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 24px 48px rgba(47, 93, 255, 0.45);
	}

	.actions a.secondary {
		background: rgba(255, 255, 255, 0.08);
		color: rgba(226, 232, 255, 0.92);
		border: 1px solid rgba(255, 255, 255, 0.14);
	}

	.actions a.secondary:hover,
	.actions a.secondary:focus-visible {
		transform: translateY(-3px);
		background: rgba(255, 255, 255, 0.16);
	}

	.details {
		display: grid;
		gap: 1.75rem;
	}

	dl {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.4rem 1rem;
		color: rgba(226, 232, 255, 0.86);
	}

	dt {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.28em;
		opacity: 0.6;
	}

	dd {
		font-size: 1.6rem;
		font-weight: 600;
		color: #ffffff;
	}

	.showcase {
		display: grid;
		gap: 1.2rem;
	}

	.showcase article {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 1rem;
		padding: 1.1rem 1.4rem;
		border-radius: 1.2rem;
		background: rgba(5, 8, 22, 0.65);
		border: 1px solid rgba(255, 255, 255, 0.06);
		backdrop-filter: blur(16px);
		transition:
			transform 200ms ease,
			border 200ms ease,
			background 200ms ease;
	}

	.showcase article:hover,
	.showcase article:focus-within {
		transform: translateY(-3px);
		background: rgba(12, 18, 40, 0.8);
		border-color: rgba(255, 255, 255, 0.12);
	}

	.cover {
		position: relative;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
	}

	.cover::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--accent);
		opacity: 0.55;
		mix-blend-mode: screen;
	}

	.cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.label {
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.28em;
		opacity: 0.6;
	}

	.showcase h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #fff;
	}

	.summary {
		font-size: 0.85rem;
		color: rgba(226, 232, 255, 0.65);
		margin-top: 0.35rem;
	}

	.more {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.75rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		text-decoration: none;
		color: rgba(142, 197, 255, 0.95);
		transition: transform 180ms ease;
	}

	.more::after {
		content: '↗';
		font-size: 0.85rem;
	}

	.more:hover,
	.more:focus-visible {
		transform: translateX(4px);
	}

	@keyframes pulse {
		0% {
			filter: saturate(110%);
		}

		100% {
			filter: saturate(140%);
		}
	}

	@keyframes drift {
		0% {
			transform: translate(0, 0) scale(1);
		}

		100% {
			transform: translate(20px, 30px) scale(1.08);
		}
	}

	@keyframes float {
		0% {
			transform: translateY(-12px);
		}

		50% {
			transform: translateY(8px);
		}

		100% {
			transform: translateY(-12px);
		}
	}

	@keyframes heroEnter {
		from {
			opacity: 0;
			transform: translateY(28px) scale(0.98);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 1024px) {
		.content {
			grid-template-columns: 1fr;
		}

		dl {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.showcase article {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 640px) {
		.hero-stage {
			padding-top: 5.5rem;
		}

		dl {
			grid-template-columns: 1fr;
		}
	}
</style>
