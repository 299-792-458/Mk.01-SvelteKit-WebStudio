<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Magnetic from '$lib/components/motion/Magnetic.svelte';
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';

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

	function closeMobileMenu() {
		mobileOpen = false;
	}

	onMount(async () => {
		if (navElement) {
			const { animate } = await import('motion');
			animate(
				navElement,
				{ y: [-50, 0], opacity: [0, 1], scale: [0.9, 1] },
				{ duration: 0.8, easing: [0.16, 1, 0.3, 1] }
			);
		}
	});
</script>

<div class="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
	<nav
		bind:this={navElement}
		class="pointer-events-auto relative flex items-center gap-2 rounded-full border border-base-content/10 bg-base-100/60 p-2 shadow-glow backdrop-blur-surface transition-all duration-500 hover:scale-[1.01] hover:bg-base-100/80 supports-[backdrop-filter]:bg-base-100/40"
	>
		<!-- Logo -->
		<a
			href="/"
			class="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content shadow-lg transition-transform duration-300 hover:rotate-12"
		>
			<span class="font-display font-bold">M</span>
		</a>

		<!-- Desktop Links -->
		<div class="hidden items-center gap-1 px-4 md:flex">
			{#each navLinks as link}
				<Magnetic>
					<a
						href={link.href}
						class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-base-content/5 hover:text-primary {$page
							.url.pathname === link.href
							? 'bg-primary/10 text-primary'
							: 'text-base-content/80'}"
					>
						{link.label}
						{#if $page.url.pathname === link.href}
							<span
								class="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
							></span>
						{/if}
					</a>
				</Magnetic>
			{/each}
		</div>

		<!-- Action & Theme -->
		<div class="flex items-center gap-2 pl-2">
			<a
				href="/contact"
				class="btn btn-ghost btn-circle btn-sm hidden sm:flex"
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
			<ThemeToggle {theme} on:toggle={(e) => dispatch('themeChange', e.detail)} />

			<!-- Mobile Toggle -->
	<button
		class="btn btn-ghost btn-circle btn-sm md:hidden"
		aria-label="Toggle menu"
		on:click={() => (mobileOpen = !mobileOpen)}
	>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/></svg
				>
			</button>
		</div>
	</nav>
</div>

<!-- Mobile Menu Overlay -->
{#if mobileOpen}
	<div
		class="fixed inset-0 z-40 flex flex-col gap-4 bg-base-100/95 px-6 pt-24 backdrop-blur-xl md:hidden"
		transition:fly={{ y: -20, duration: 300 }}
	>
		{#each navLinks as link}
			<a
				href={link.href}
				class="font-display text-2xl font-bold text-base-content"
				on:click={closeMobileMenu}
			>
				{link.label}
			</a>
		{/each}
		<button class="btn btn-primary mt-8" on:click={closeMobileMenu}>Close Menu</button>
	</div>
{/if}
