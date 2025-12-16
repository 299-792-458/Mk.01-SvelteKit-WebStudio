<script lang="ts">
	import Magnetic from '$lib/components/motion/Magnetic.svelte';

	const links = [
		{ title: 'Work', href: '/work' },
		{ title: 'Labs', href: '/labs' },
		{ title: 'About', href: '/about' },
		{ title: 'Contact', href: '/contact' }
	];

	const socials = [
		{ label: 'Twitter', href: '#' },
		{ label: 'GitHub', href: '#' },
		{ label: 'LinkedIn', href: '#' },
		{ label: 'Instagram', href: '#' }
	];

	const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
</script>

<footer class="mt-auto border-t border-base-content/10 bg-base-100 pt-16 pb-8 text-base-content transition-colors duration-300">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] mb-16">
		<!-- Brand & Status -->
		<div class="flex flex-col gap-4">
			<div class="font-display text-3xl font-extrabold tracking-tight">Mk.01</div>
			<div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-base-content/60">
				<span class="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px] shadow-primary animate-pulse"></span>
				<span>Systems Nominal</span>
			</div>
			<p class="font-mono text-xs text-base-content/40">{time}</p>
		</div>

		<!-- Navigation -->
		<nav class="flex flex-col gap-6">
			<span class="text-xs uppercase tracking-[0.15em] text-base-content/40">Index</span>
			<ul class="flex flex-col gap-3">
				{#each links as link}
					<li>
						<Magnetic>
							<a href={link.href} class="text-lg font-medium text-base-content transition-colors hover:text-primary">{link.title}</a>
						</Magnetic>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Socials -->
		<div class="flex flex-col gap-6">
			<span class="text-xs uppercase tracking-[0.15em] text-base-content/40">Connect</span>
			<ul class="flex flex-col gap-3">
				{#each socials as social}
					<li>
						<Magnetic>
							<a href={social.href} class="text-base text-base-content/70 transition-colors hover:text-base-content" target="_blank" rel="noreferrer">{social.label}</a>
						</Magnetic>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Newsletter / CTA -->
		<div class="flex flex-col gap-6">
			<span class="text-xs uppercase tracking-[0.15em] text-base-content/40">Stay synced</span>
			<p class="text-sm leading-relaxed text-base-content/70">
				Join the signal. No noise, just updates on new experiments and case studies.
			</p>
			<form class="flex border-b border-base-content/20 pb-2 transition-colors focus-within:border-primary" on:submit|preventDefault>
				<input 
					type="email" 
					placeholder="Enter email address" 
					required 
					class="flex-1 bg-transparent text-base text-base-content placeholder-base-content/30 outline-none"
				/>
				<button type="submit" aria-label="Subscribe" class="text-base-content transition-transform hover:translate-x-1 hover:text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
				</button>
			</form>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-base-content/5 px-8 pt-8 text-xs text-base-content/40 md:flex-row md:items-center">
		<div>© 2024 Mk.01 Studio. All rights reserved.</div>
		<div class="flex gap-6">
			<a href="/privacy" class="hover:text-base-content transition-colors">Privacy</a>
			<a href="/terms" class="hover:text-base-content transition-colors">Terms</a>
			<a href="/sitemap" class="hover:text-base-content transition-colors">Sitemap</a>
		</div>
	</div>
</footer>