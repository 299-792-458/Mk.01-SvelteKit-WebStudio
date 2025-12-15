<script lang="ts">
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

<footer class="site-footer">
	<div class="footer-grid">
		<!-- Brand & Status -->
		<div class="brand-col">
			<div class="logo">Mk.01</div>
			<div class="status-indicator">
				<span class="dot pulse"></span>
				<span>Systems Nominal</span>
			</div>
			<p class="time">{time}</p>
		</div>

		<!-- Navigation -->
		<nav class="nav-col">
			<span class="col-label">Index</span>
			<ul>
				{#each links as link}
					<li><a href={link.href} class="nav-link">{link.title}</a></li>
				{/each}
			</ul>
		</nav>

		<!-- Socials -->
		<div class="social-col">
			<span class="col-label">Connect</span>
			<ul>
				{#each socials as social}
					<li><a href={social.href} class="social-link" target="_blank" rel="noreferrer">{social.label}</a></li>
				{/each}
			</ul>
		</div>

		<!-- Newsletter / CTA -->
		<div class="cta-col">
			<span class="col-label">Stay synced</span>
			<p class="cta-text">
				Join the signal. No noise, just updates on new experiments and case studies.
			</p>
			<form class="newsletter-form" on:submit|preventDefault>
				<input type="email" placeholder="Enter email address" required />
				<button type="submit" aria-label="Subscribe">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
				</button>
			</form>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="footer-bottom">
		<div class="copyright">© 2024 Mk.01 Studio. All rights reserved.</div>
		<div class="legal">
			<a href="/privacy">Privacy</a>
			<a href="/terms">Terms</a>
			<a href="/sitemap">Sitemap</a>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background: #050505;
		color: #e0e0e0;
		padding: 4rem 2rem 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		font-family: 'Manrope', sans-serif;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
		gap: 2rem;
		max-width: 1400px;
		margin: 0 auto;
		margin-bottom: 4rem;
	}

	.brand-col {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.logo {
		font-family: 'Syne', sans-serif;
		font-size: 2rem;
		font-weight: 800;
		color: #fff;
	}

	.status-indicator {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.dot {
		width: 8px;
		height: 8px;
		background: #00fff9;
		border-radius: 50%;
		box-shadow: 0 0 8px #00fff9;
	}

	.time {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.4);
	}

	.col-label {
		display: block;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: rgba(255, 255, 255, 0.4);
		margin-bottom: 1.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.nav-link {
		font-size: 1.1rem;
		font-weight: 500;
		color: #fff;
		text-decoration: none;
		transition: color 0.2s;
	}

	.nav-link:hover {
		color: #00fff9;
	}

	.social-link {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		transition: color 0.2s;
	}

	.social-link:hover {
		color: #fff;
	}

	.cta-text {
		font-size: 0.95rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 1.5rem;
	}

	.newsletter-form {
		display: flex;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 0.5rem;
		transition: border-color 0.2s;
	}

	.newsletter-form:focus-within {
		border-color: #00fff9;
	}

	.newsletter-form input {
		flex: 1;
		background: none;
		border: none;
		color: #fff;
		font-size: 1rem;
		outline: none;
	}

	.newsletter-form button {
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
		transition: transform 0.2s, color 0.2s;
	}

	.newsletter-form button:hover {
		color: #00fff9;
		transform: translateX(3px);
	}

	.footer-bottom {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.4);
	}

	.legal {
		display: flex;
		gap: 1.5rem;
	}

	.legal a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s;
	}

	.legal a:hover {
		color: #fff;
	}

	@media (max-width: 1024px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 640px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
		
		.footer-bottom {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}
	}
</style>