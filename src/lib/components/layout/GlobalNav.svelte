<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	type Theme = 'studio-light' | 'studio-dark';

	export let theme: Theme = 'studio-light';

	const dispatch = createEventDispatcher<{ themeChange: Theme }>();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Journal' }
	];

	let mobileOpen = false;

	function closeMobileMenu() {
		mobileOpen = false;
	}
</script>

<header class="sticky top-0 z-40 border-b border-base-300/60 bg-base-100/80 backdrop-blur">
	<nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
		<a href="/" class="flex items-center gap-2 text-lg font-semibold tracking-tight">
			<span
				class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-primary text-base-100 shadow-lg"
			>
				Mk
			</span>
			<span class="hidden sm:inline-flex flex-col leading-tight">
				<span class="text-sm uppercase tracking-[0.35em] text-base-content/60">Studio</span>
				<span class="text-lg font-semibold">Mk.01 SvelteKit</span>
			</span>
			<span class="sm:hidden text-lg font-semibold">Mk.01 Studio</span>
		</a>

		<div class="hidden items-center gap-6 text-sm font-medium md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-sm hidden sm:inline-flex">
				Start a Project
			</a>

			<div class="hidden md:block">
				<ThemeToggle {theme} on:toggle={(event) => dispatch('themeChange', event.detail)} />
			</div>

			<button
				type="button"
				class="btn btn-ghost btn-sm md:hidden"
				on:click={() => (mobileOpen = !mobileOpen)}
				aria-expanded={mobileOpen}
				aria-controls="mobile-menu"
			>
				<span class="sr-only">Toggle navigation</span>
				{#if mobileOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</nav>

	{#if mobileOpen}
		<div id="mobile-menu" class="border-t border-base-300/60 bg-base-100/95 md:hidden">
			<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
				<div class="flex flex-col gap-3 text-base font-medium">
					{#each navLinks as link}
						<a
							href={link.href}
							class="rounded-lg px-3 py-2 transition-colors hover:bg-base-200/80"
							on:click={closeMobileMenu}
						>
							{link.label}
						</a>
					{/each}
					<a
						href="mailto:studio@mk1.dev"
						class="btn btn-primary btn-sm mt-2"
						on:click={closeMobileMenu}
					>
						Start a Project
					</a>
					<div class="mt-2">
						<ThemeToggle {theme} on:toggle={(event) => dispatch('themeChange', event.detail)} />
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
