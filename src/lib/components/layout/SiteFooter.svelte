<script lang="ts">
	const quickLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Journal' },
		{ href: '/#capabilities', label: 'Capabilities' }
	];

	const resources = [
		{ href: '/blog', label: 'Articles' }
		// { href: '/blog/explorations', label: 'Explorations', soon: true },
		// { href: '/rss.xml', label: 'RSS', soon: true },
		// { href: '/colophon', label: 'Colophon', soon: true }
	];

	const socials = [
		{ href: 'https://github.com/', label: 'GitHub' },
		{ href: 'https://dribbble.com/', label: 'Dribbble' },
		{ href: 'https://x.com/', label: 'X' },
		{ href: 'mailto:studio@mk1.dev', label: 'Email' }
	];
</script>

<footer class="border-t border-base-300/60 bg-base-200/50 text-base-content/90">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
		<div class="space-y-4">
			<div class="flex items-center gap-3">
				<span
					class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-base-100 shadow-xl"
				>
					Mk
				</span>
				<div>
					<p class="text-lg font-semibold">Mk.01 SvelteKit Studio</p>
					<p class="text-sm text-base-content/70">
						Creative lab for purposeful digital experiences.
					</p>
				</div>
			</div>
			<p class="text-sm leading-relaxed text-base-content/70">
				Crafting joyful web products, immersive narratives, and tools that empower makers across the
				globe.
			</p>
			<div class="flex gap-3 text-sm">
				<span class="badge badge-outline border-primary/40 text-primary"
					>Available for collaborations</span
				>
				<span class="badge badge-outline border-secondary/40 text-secondary">Remote-first</span>
			</div>
		</div>

		<div class="space-y-3">
			<h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60">Navigate</h3>
			<ul class="space-y-2 text-sm">
				{#each quickLinks as link}
					<li>
						<a href={link.href} class="transition-colors hover:text-primary">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="space-y-3">
			<h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60">
				Resources
			</h3>
			<ul class="space-y-2 text-sm">
				{#each resources as link}
					<li class="flex items-center gap-2">
						<a href={link.href} class="transition-colors hover:text-primary">
							{link.label}
						</a>
						{#if link.soon}
							<span class="badge badge-xs bg-base-300 text-[0.6rem] uppercase tracking-widest"
								>Soon</span
							>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<div class="space-y-3">
			<h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60">Connect</h3>
			<p class="text-sm text-base-content/70">
				studio@mk1.dev<br />
				Global / Remote · Seoul ↔ San Francisco
			</p>
			<ul class="flex flex-wrap gap-3 text-sm">
				{#each socials as link}
					<li>
						<a href={link.href} class="transition-colors hover:text-primary" rel="noreferrer">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="border-t border-base-300/60">
		<div
			class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-base-content/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
		>
			<p>© {new Date().getFullYear()} Mk.01 SvelteKit Studio. Crafted with SvelteKit & Tailwind.</p>
			<div class="flex gap-4">
				<a href="/privacy">Privacy</a>
				<a href="/terms">Terms</a>
			</div>
		</div>
	</div>
</footer>
