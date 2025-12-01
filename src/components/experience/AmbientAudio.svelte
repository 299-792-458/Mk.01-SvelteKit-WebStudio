<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { experienceStore } from '$services/experience';
	import { derived } from 'svelte/store';

const isPlayingStore = derived(experienceStore, ($experience) => $experience.isAmbientAudioPlaying);

let isPlaying = false;
let audioElement: HTMLAudioElement | null = null;

	// Host locally to avoid hotlink errors; place file in static/audio/...
	const ambienceSrc = '/audio/cyberpunk-city-ambient.mp3';

function toggle() {
	experienceStore.toggleAmbientAudio();
}

onMount(() => {
	const unsubscribe = isPlayingStore.subscribe((value) => {
		isPlaying = value;

		if (!audioElement) return;

		if (value) {
			audioElement
				.play()
				.catch(() => experienceStore.toggleAmbientAudio());
		} else {
			audioElement.pause();
		}
	});

	if (audioElement) {
		audioElement.volume = 0.35;
		audioElement.loop = true;
	}

	return () => {
		unsubscribe();
		audioElement?.pause();
	};
});
</script>

<button class="ambient-toggle" type="button" on:click={toggle}>
	<span class="pulse" aria-hidden="true"></span>
	{#if isPlaying}
		<span class="label">Ambient on</span>
	{:else}
		<span class="label">Ambient off</span>
	{/if}
</button>

<audio bind:this={audioElement} src={ambienceSrc} preload="auto"></audio>

<style>
	.ambient-toggle {
		position: fixed;
		right: 1.5rem;
		bottom: 1.5rem;
		z-index: 120;
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.1rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(9, 13, 31, 0.55);
		color: rgba(226, 232, 255, 0.9);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.28em;
		cursor: pointer;
		backdrop-filter: blur(12px);
		box-shadow: 0 12px 28px rgba(5, 8, 22, 0.35);
	}

	.pulse {
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 999px;
		background: radial-gradient(circle, rgba(47, 93, 255, 0.9), rgba(47, 93, 255, 0.2));
		position: relative;
	}

	.pulse::after {
		content: '';
		position: absolute;
		inset: -0.35rem;
		border-radius: inherit;
		border: 2px solid rgba(47, 93, 255, 0.4);
		animation: ripple 2.2s ease-out infinite;
	}

	.label {
		white-space: nowrap;
	}

	@keyframes ripple {
		0% {
			transform: scale(0.6);
			opacity: 0.9;
		}

		100% {
			transform: scale(1.4);
			opacity: 0;
		}
	}

	@media (max-width: 640px) {
		.ambient-toggle {
			right: 1rem;
			bottom: 1rem;
			gap: 0.5rem;
			padding: 0.6rem 0.9rem;
			letter-spacing: 0.2em;
		}
	}
</style>
