<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Magnetic from '$lib/components/motion/Magnetic.svelte';
	import { page } from '$app/stores';
	import { fly, fade, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let theme: 'studio-light' | 'studio-dark' = 'studio-light';
	const dispatch = createEventDispatcher<{ themeChange: 'studio-light' | 'studio-dark' }>();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Journal' }
	];

	let mobileOpen = false;
	let navElement: HTMLElement;
	let y = 0;

	$: isScrolled = y > 20;

	function closeMobileMenu() {
		mobileOpen = false;
	}

	onMount(async () => {
		if (navElement) {
			const { animate } = await import('motion');
			animate(
				navElement,
				{ y: [-50, 0], opacity: [0, 1] },
				{ duration: 0.8, easing: [0.16, 1, 0.3, 1] }
			);
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<div class="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center pt-4 transition-all duration-500 ease-out"
	class:pt-2={isScrolled}
>
	<nav
		bind:this={navElement}
		class="pointer-events-auto relative flex items-center gap-2 rounded-full border border-base-content/5 p-1.5 shadow-sm backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
		class:bg-base-100-80={!isScrolled}
		class:bg-base-100-95={isScrolled}
		class:shadow-glow={!isScrolled}
		class:shadow-lg={isScrolled}
		style:width={isScrolled ? 'auto' : '100%'}
		style:max-width={isScrolled ? 'fit-content' : '42rem'}
		style:padding-left={isScrolled ? '0.75rem' : '0.5rem'}
		style:padding-right={isScrolled ? '0.75rem' : '0.5rem'}
	>
		<!-- Logo -->
		<a
			href="/"
			class="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content shadow-inner transition-transform duration-300 hover:rotate-12"
		>
			<span class="font-display font-bold text-lg">M</span>
		</a>

		<!-- Desktop Links -->
		<div class="hidden items-center gap-1 px-2 md:flex">
			{#each navLinks as link}
				<Magnetic>
					<a
						href={link.href}
						class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-base-content/5 hover:text-primary {$page
							.url.pathname === link.href
							? 'text-primary'
							: 'text-base-content/70'}"
					>
						{link.label}
						{#if $page.url.pathname === link.href}
							<div
								in:fade={{ duration: 200 }}
								class="absolute inset-0 -z-10 rounded-full bg-base-content/5"
							></div>
						{/if}
					</a>
				</Magnetic>
			{/each}
		</div>

		<!-- Action & Theme -->
		<div class="flex items-center gap-2 pl-2 border-l border-base-content/10 ml-1">
			<a
				href="/contact"
				class="btn btn-circle btn-sm btn-ghost transition-all hover:bg-primary/10 hover:text-primary hidden sm:flex"
				aria-label="Contact"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-5 w-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					/>
				</svg>
			</a>

			<!-- Mobile Toggle -->
			<button
				class="btn btn-circle btn-sm btn-ghost md:hidden"
				aria-label="Toggle menu"
				on:click={() => (mobileOpen = !mobileOpen)}
			>
				<div class="flex flex-col gap-1">
					<span class="block h-0.5 w-5 bg-current transition-transform" class:rotate-45={mobileOpen} class:translate-y-1.5={mobileOpen}></span>
					<span class="block h-0.5 w-5 bg-current transition-opacity" class:opacity-0={mobileOpen}></span>
					<span class="block h-0.5 w-5 bg-current transition-transform" class:rotate-45={mobileOpen} class:-translate-y-1.5={mobileOpen} class:-rotate-45={mobileOpen}></span>
				</div>
			</button>
		</div>
	</nav>
</div>

<!-- Mobile Menu Overlay -->
{#if mobileOpen}
	<div
		class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-base-100/95 backdrop-blur-2xl md:hidden"
		transition:fade={{ duration: 200 }}
	>
		<nav class="flex flex-col items-center gap-6">
			{#each navLinks as link, i}
				<a
					href={link.href}
					class="font-display text-4xl font-bold text-base-content hover:text-primary transition-colors"
					in:fly={{ y: 20, delay: 100 + i * 50, duration: 400, easing: cubicOut }}
					on:click={closeMobileMenu}
				>
					{link.label}
				</a>
			{/each}
		</nav>
		
		<div in:fly={{ y: 20, delay: 300, duration: 400 }} class="absolute bottom-12 flex flex-col items-center gap-4">
			<a href="/contact" class="btn btn-primary btn-lg rounded-full px-12" on:click={closeMobileMenu}>
				Start Project
			</a>
			<button class="btn btn-ghost btn-sm" on:click={closeMobileMenu}>Close</button>
		</div>
	</div>
{/if}
