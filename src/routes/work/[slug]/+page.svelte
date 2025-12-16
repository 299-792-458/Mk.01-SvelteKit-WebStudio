<script lang="ts">
	import { onMount } from 'svelte';
	import PageSection from '$lib/components/ui/PageSection.svelte';
	import Surface from '$components/ui/Surface.svelte';
	import Reveal from '$lib/components/motion/Reveal.svelte';
	import TextReveal from '$lib/components/motion/TextReveal.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { project, related } = data;
	const projectContent = project.content;

	let activeSection = '';
	let scrollY = 0;

	// Intersection Observer for Table of Contents
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ rootMargin: '-20% 0px -50% 0px' }
		);

		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:window bind:scrollY />

<div class="case-study-wrap">
	<!-- Sticky Progress / TOC Rail -->
	<aside class="toc-rail hidden lg:block" style:opacity={scrollY > 600 ? 1 : 0}>
		<div class="toc-inner">
			<span class="toc-label">Contents</span>
			<nav>
				<button 
					class:active={activeSection === 'overview'} 
					on:click={() => scrollTo('overview')}
				>
					Overview
				</button>
				<button 
					class:active={activeSection === 'outcomes'} 
					on:click={() => scrollTo('outcomes')}
				>
					Outcomes
				</button>
				<button 
					class:active={activeSection === 'process'} 
					on:click={() => scrollTo('process')}
				>
					Process
				</button>
				{#each projectContent.chapters as chapter, i}
					<button 
						class:active={activeSection === `chapter-${i}`} 
						on:click={() => scrollTo(`chapter-${i}`)}
					>
						{chapter.title}
					</button>
				{/each}
			</nav>
			<div class="toc-progress">
				<div 
					class="progress-bar" 
					style:height={`${Math.min(100, (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)}%`}
				></div>
			</div>
		</div>
	</aside>

	<!-- Hero Section -->
	<PageSection id="overview" tone="contrast" padding="xl">
		<div class="space-y-8 relative z-10">
			<a href="/work" class="link-cta mb-8 inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
				Back to Index
			</a>

			<div class="space-y-6 max-w-4xl">
				<div class="flex flex-wrap gap-3 mb-4">
					{#each project.tags as tag}
						<span class="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold uppercase tracking-widest text-primary">
							{tag}
						</span>
					{/each}
				</div>
				
				<h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
					<TextReveal text={project.title} type="word" />
				</h1>
				
				<p class="text-xl md:text-2xl text-base-content/70 max-w-2xl leading-relaxed">
					{project.summary}
				</p>

				<div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-base-content/10">
					<div>
						<span class="text-xs uppercase tracking-widest text-base-content/50 block mb-1">Client</span>
						<span class="font-medium">{project.client ?? 'Confidential'}</span>
					</div>
					<div>
						<span class="text-xs uppercase tracking-widest text-base-content/50 block mb-1">Year</span>
						<span class="font-medium">{project.year}</span>
					</div>
					<div>
						<span class="text-xs uppercase tracking-widest text-base-content/50 block mb-1">Industry</span>
						<span class="font-medium">{project.industry}</span>
					</div>
					<div>
						<span class="text-xs uppercase tracking-widest text-base-content/50 block mb-1">Services</span>
						<span class="font-medium">{projectContent.services?.[0] ?? 'Design'}</span>
					</div>
				</div>
			</div>
		</div>
	</PageSection>

	<!-- Cinematic Media Hero -->
	<section class="w-full px-4 md:px-8 -mt-12 md:-mt-20 relative z-0">
		<div class="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-base-content/10 relative">
			{#if projectContent.hero.video}
				<video autoplay muted playsinline loop class="w-full h-full object-cover">
					<source src={projectContent.hero.video} type="video/mp4" />
				</video>
			{:else}
				<Image
					src={`/images/work/${project.slug}-hero.jpg`}
					alt={project.title}
					className="w-full h-full object-cover"
				/>
			{/if}
			<div class="absolute inset-0 bg-gradient-to-t from-base-100/90 via-transparent to-transparent pointer-events-none"></div>
			<div class="absolute bottom-8 left-8 right-8 text-center md:text-left">
				<h2 class="text-2xl md:text-4xl font-bold text-base-content mb-2">{projectContent.hero.headline}</h2>
				<p class="text-base-content/80 text-lg">{projectContent.hero.subheadline}</p>
			</div>
		</div>
	</section>

	<!-- Outcomes Grid -->
	<PageSection id="outcomes" tone="default">
		<div class="grid gap-12 lg:grid-cols-[1fr_minmax(0,1.5fr)]">
			<div class="space-y-6">
				<span class="eyebrow text-primary">Key Outcomes</span>
				<h2 class="text-3xl font-semibold">Impact by the numbers.</h2>
				<p class="text-base-content/70 text-lg">
					We don't just ship pixels; we ship performance. Here's how this project moved the needle.
				</p>
			</div>
			
			<div class="grid gap-4 sm:grid-cols-2">
				{#each projectContent.kpis as kpi}
					<Surface variant="glass" padding="lg" class="flex flex-col justify-between h-full">
						<div>
							<p class="text-xs uppercase tracking-widest text-base-content/50 mb-2">{kpi.label}</p>
							<p class="text-4xl font-bold text-base-content">{kpi.value}</p>
						</div>
						{#if kpi.description}
							<p class="text-sm text-base-content/70 mt-4 border-t border-base-content/10 pt-4">{kpi.description}</p>
						{/if}
					</Surface>
				{/each}
			</div>
		</div>
	</PageSection>

	<!-- Process / Timeline -->
	<PageSection id="process" tone="subtle">
		<div class="max-w-4xl mx-auto space-y-12">
			<div class="text-center space-y-4">
				<span class="eyebrow text-secondary">The Journey</span>
				<h2 class="text-4xl font-bold">From concept to launch.</h2>
			</div>

			<div class="relative border-l border-base-content/10 ml-4 md:ml-0 space-y-12">
				{#each projectContent.chapters as chapter, i}
					<section id={`chapter-${i}`} class="pl-8 md:pl-12 relative group">
						<span class="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-base-content/20 group-hover:bg-primary transition-colors ring-4 ring-base-100"></span>
						
						<Reveal delay={i * 0.1}>
							<div class="grid md:grid-cols-[1fr_2fr] gap-8">
								<div class="space-y-2">
									<span class="text-xs font-mono text-primary/80">0{i + 1}</span>
									<h3 class="text-2xl font-bold">{chapter.title}</h3>
									<p class="text-sm text-base-content/60">{chapter.id}</p>
								</div>
								<div class="space-y-4">
									<p class="text-lg leading-relaxed text-base-content/80">{chapter.description}</p>
									{#if i === 0} 
										<!-- Contextual visual for first chapter if avail -->
										<div class="h-48 rounded-xl bg-base-300/50 border border-base-content/5 mt-4"></div>
									{/if}
								</div>
							</div>
						</Reveal>
					</section>
				{/each}
			</div>
		</div>
	</PageSection>

	<!-- Related Work -->
	<PageSection id="related" tone="contrast">
		<div class="flex items-center justify-between mb-12">
			<h2 class="text-3xl font-bold">Next up</h2>
			<a href="/work" class="btn btn-outline">View all work</a>
		</div>
		
		<div class="grid gap-8 md:grid-cols-2">
			{#each related as item}
				<a href={`/work/${item.slug}`} class="group relative block rounded-2xl overflow-hidden aspect-[4/3] bg-base-200">
					<!-- Placeholder for related image -->
					<div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
					<div class="absolute inset-0 p-8 flex flex-col justify-end z-10">
						<h3 class="text-2xl font-bold text-base-content translate-y-4 group-hover:translate-y-0 transition-transform">{item.title}</h3>
						<p class="text-base-content/70 opacity-0 group-hover:opacity-100 transition-opacity delay-75">{item.summary}</p>
					</div>
				</a>
			{/each}
		</div>
	</PageSection>
</div>

<style>
	.toc-rail {
		position: fixed;
		left: 2rem;
		top: 50%;
		transform: translateY(-50%);
		z-index: 50;
		transition: opacity 0.4s ease;
	}

	.toc-inner {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-left: 1rem;
		border-left: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
	}

	.toc-progress {
		position: absolute;
		left: -1px;
		top: 0;
		bottom: 0;
		width: 1px;
		background: rgba(255, 255, 255, 0.1);
	}

	.progress-bar {
		width: 2px;
		background: var(--primary);
		margin-left: -0.5px;
		transition: height 0.1s linear;
	}

	.toc-label {
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-size: 0.7rem;
		color: var(--base-content);
		opacity: 0.5;
		margin-bottom: 0.5rem;
	}

	nav button {
		display: block;
		text-align: left;
		font-size: 0.85rem;
		color: var(--base-content);
		opacity: 0.6;
		transition: all 0.2s ease;
		padding: 0.2rem 0;
	}

	nav button:hover {
		opacity: 1;
		transform: translateX(4px);
	}

	nav button.active {
		opacity: 1;
		color: var(--primary);
		font-weight: 500;
	}
</style>