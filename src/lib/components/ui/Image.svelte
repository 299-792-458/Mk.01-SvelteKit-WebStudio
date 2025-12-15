<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;
	export let className = '';
	export let loading: 'lazy' | 'eager' = 'lazy';

	let isLoaded = false;
	let imgElement: HTMLImageElement;

	function handleLoad() {
		isLoaded = true;
	}

	onMount(() => {
		if (imgElement?.complete) {
			handleLoad();
		}
	});
</script>

<div class={`image-wrapper ${className}`}>
	<img
		bind:this={imgElement}
		{src}
		{alt}
		{loading}
		class={`main-img ${isLoaded ? 'loaded' : ''}`}
		on:load={handleLoad}
	/>
	<div class={`placeholder ${isLoaded ? 'hidden' : ''}`} aria-hidden="true"></div>
</div>

<style>
	.image-wrapper {
		position: relative;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.05); /* Placeholder bg */
	}

	.main-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s ease-out;
		transform: scale(1.05); /* Slight zoom out effect */
	}

	.main-img.loaded {
		opacity: 1;
		transform: scale(1);
	}

	.placeholder {
		position: absolute;
		inset: 0;
		background: linear-gradient(110deg, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 70%);
		background-size: 200% 100%;
		animation: shimmer 1.5s linear infinite;
		transition: opacity 0.4s ease;
	}

	.placeholder.hidden {
		opacity: 0;
		pointer-events: none;
	}

	@keyframes shimmer {
		0% { background-position: 200% 0; }
		100% { background-position: -200% 0; }
	}
</style>
