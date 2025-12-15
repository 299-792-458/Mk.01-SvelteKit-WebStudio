<script lang="ts">
	import '../app.css';
	import AppShell from '$lib/components/layout/AppShell.svelte';
	import SmoothScroll from '$lib/components/layout/SmoothScroll.svelte';
	import SonicIdentity from '$lib/components/experience/SonicIdentity.svelte';
	import FluidBackground from '$lib/components/experience/FluidBackground.svelte';
	import ArchitecturalGrid from '$lib/components/experience/ArchitecturalGrid.svelte';
	import LiquidCursor from '$lib/components/experience/LiquidCursor.svelte';
	import Preloader from '$lib/components/experience/Preloader.svelte';
	import FPSCounter from '$lib/components/debug/FPSCounter.svelte';
	import ScrollProgress from '$lib/components/ui/ScrollProgress.svelte';
	import { siteConfig } from '$lib/config/site';
	import { buildSeo, type SeoResult } from '$lib/utils/seo';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { experienceStore } from '$services/experience';
	import { onMount } from 'svelte';

	export let data: {
		seo?: SeoResult;
	};

	let isLoaded = false;
	
	// Konami Code Logic
	const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
	let konamiIndex = 0;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === konamiCode[konamiIndex]) {
			konamiIndex++;
			if (konamiIndex === konamiCode.length) {
				experienceStore.toggleDevMode();
				konamiIndex = 0;
				// Optional: Play a success sound if SonicIdentity allows specific triggers
			}
		} else {
			konamiIndex = 0;
		}
	}

	function serializeJsonLd(payload: Record<string, unknown> | null) {
		if (!payload) return '';
		return JSON.stringify(payload).replace(/</g, '\\u003C');
	}

	$: currentSeo = data?.seo ?? buildSeo({ path: $page.url.pathname });
	$: jsonLdMarkup =
		currentSeo?.jsonLd != null
			? `<script type="application/ld+json">${serializeJsonLd(currentSeo.jsonLd)}<\/script>`
			: '';
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<title>{currentSeo.title}</title>
	<meta name="description" content={currentSeo.description} />
	<link rel="canonical" href={currentSeo.canonical} />
	{#if currentSeo.robots}
		<meta name="robots" content={currentSeo.robots} />
	{/if}
	<meta name="author" content={siteConfig.name} />
	{#each currentSeo.meta as meta}
		<meta name={meta.name} content={meta.content} />
	{/each}
	{#each currentSeo.openGraph as og}
		<meta property={og.property} content={og.content} />
	{/each}
	{#each currentSeo.twitter as twitter}
		<meta name={twitter.name} content={twitter.content} />
	{/each}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdMarkup}
</svelte:head>

{#if $experienceStore.isDevMode}
	<div class="fixed top-4 right-4 z-[100] badge badge-error gap-2 shadow-xl animate-pulse font-mono text-xs">
		DEV_MODE_ACTIVE
	</div>
{/if}

{#if isLoaded && (!$experienceStore.isPerformanceMode || $experienceStore.isDevMode)}
	<FPSCounter />
{/if}

<Preloader bind:loaded={isLoaded} />

<SmoothScroll>
	<SonicIdentity>
		<FluidBackground />
		<ArchitecturalGrid />
		<LiquidCursor />
		{#if isLoaded}
			<AppShell>
				{#key $page.url.pathname}
					<div 
						in:fly={{ y: 20, duration: 600, delay: 200, easing: cubicOut }} 
						out:fly={{ y: -20, duration: 400, easing: cubicOut }}
						class="page-transition-wrap"
					>
						<slot />
					</div>
				{/key}
			</AppShell>
		{/if}
	</SonicIdentity>
</SmoothScroll>

<style>
	.page-transition-wrap {
		/* Ensures transitions don't break layout flow */
		width: 100%;
		/* position: absolute;  <-- Careful with absolute, can break document flow/height.
		   For simple crossfades, a grid wrapper might be better, or just rely on the delay to handle overlap implicitly.
		   Here we use standard flow but cross-fade via delay. */
	}
</style>