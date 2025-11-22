<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { navigationConfig } from '$config/navigation.config';
	import { experienceStore } from '$services/experience';

	const sections = navigationConfig.commandPalette;

	let query = '';
	let inputElement: HTMLInputElement | null = null;

	const isOpen = derived(experienceStore, ($experience) => $experience.isCommandPaletteOpen);

	const allActions = sections.flatMap((section) =>
		section.actions.map((action) => ({
			section: section.title,
			...action
		}))
	);

	$: filteredActions =
		query.trim().length === 0
			? allActions
			: allActions.filter((action) => {
					const haystack = `${action.label} ${action.description ?? ''}`.toLowerCase();
					return haystack.includes(query.trim().toLowerCase());
				});

	function closePalette() {
		experienceStore.closeCommandPalette();
		query = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
			event.preventDefault();
			if (event.shiftKey) {
				experienceStore.toggleTheme();
				return;
			}
			if (event.altKey) {
				experienceStore.toggleAmbientAudio();
				return;
			}
			experienceStore.openCommandPalette();
		}

		if (event.key === 'Escape') {
			closePalette();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown);
	});

	$: if ($isOpen && inputElement) {
		const frame = requestAnimationFrame(() => {
			inputElement?.focus();
		});

		onDestroy(() => cancelAnimationFrame(frame));
	}
</script>

{#if $isOpen}
	<div class="palette-overlay" role="dialog" aria-modal="true">
		<button type="button" class="backdrop" on:click={closePalette} aria-label="Close palette" />
		<div class="palette">
			<header>
				<input
					bind:this={inputElement}
					type="text"
					placeholder="Search actions, pages, or ideas…"
					bind:value={query}
				/>
				<button type="button" class="close" on:click={closePalette} aria-label="Close palette">
					×
				</button>
			</header>

			<section>
				{#if filteredActions.length === 0}
					<p class="empty">No results yet. Try different keywords.</p>
				{:else}
					<ul>
						{#each filteredActions as action, index (action.href + index)}
							<li>
								<a href={action.href} on:click={closePalette}>
									<div class="meta">
										<span class="label">{action.label}</span>
										{#if action.description}
											<span class="description">{action.description}</span>
										{/if}
									</div>
									{#if action.accent}
										<span class={`accent ${action.accent}`}>{action.accent}</span>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</section>

			<footer>
				<div>
					<kbd>⌘</kbd>
					<kbd>K</kbd>
					<span>Open palette</span>
				</div>
				<div>
					<kbd>⌘</kbd>
					<kbd>⇧</kbd>
					<kbd>K</kbd>
					<span>Cycle theme</span>
				</div>
				<div>
					<kbd>⌘</kbd>
					<kbd>⌥</kbd>
					<kbd>K</kbd>
					<span>Ambient audio</span>
				</div>
			</footer>
		</div>
	</div>
{/if}

<style>
	.palette-overlay {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: grid;
		place-items: center;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		background: rgba(4, 9, 24, 0.75);
		backdrop-filter: blur(18px);
		appearance: none;
		border: none;
		padding: 0;
		margin: 0;
	}

	.palette {
		position: relative;
		z-index: 2;
		width: min(680px, 92vw);
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: radial-gradient(
			120% 140% at 50% 0%,
			rgba(47, 93, 255, 0.18),
			rgba(9, 13, 31, 0.92)
		);
		box-shadow: 0 35px 90px rgba(5, 11, 35, 0.45);
		display: grid;
		gap: 0.35rem;
		padding: 1.1rem 1.25rem 1rem;
		color: rgba(226, 232, 255, 0.96);
	}

	header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	input {
		flex: 1;
		padding: 0.85rem 1rem;
		border-radius: 14px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(9, 13, 31, 0.55);
		color: inherit;
		font-size: 0.95rem;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
	}

	input::placeholder {
		color: rgba(226, 232, 255, 0.55);
	}

	.close {
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(255, 255, 255, 0.08);
		color: inherit;
		font-size: 1.4rem;
		line-height: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	section {
		max-height: 340px;
		overflow-y: auto;
		padding-right: 0.25rem;
	}

	ul {
		display: grid;
		gap: 0.4rem;
	}

	li a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.85rem 1rem;
		border-radius: 14px;
		text-decoration: none;
		color: inherit;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid transparent;
		transition:
			transform 180ms ease,
			border 180ms ease,
			background 180ms ease;
	}

	li a:hover,
	li a:focus-visible {
		transform: translateX(4px);
		border-color: rgba(255, 255, 255, 0.18);
		background: rgba(47, 93, 255, 0.18);
	}

	.meta {
		display: grid;
		gap: 0.2rem;
	}

	.label {
		font-weight: 600;
	}

	.description {
		font-size: 0.75rem;
		color: rgba(226, 232, 255, 0.65);
	}

	.accent {
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		padding: 0.35rem 0.6rem;
		border-radius: 999px;
		color: rgba(9, 13, 31, 0.8);
		font-weight: 600;
	}

	.accent.primary {
		background: rgba(47, 93, 255, 0.75);
	}

	.accent.secondary {
		background: rgba(255, 107, 203, 0.7);
	}

	.accent.contrast {
		background: rgba(255, 255, 255, 0.8);
	}

	.empty {
		text-align: center;
		padding: 2rem 0;
		color: rgba(226, 232, 255, 0.6);
		font-size: 0.9rem;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1.2rem;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: rgba(226, 232, 255, 0.5);
	}

	footer div {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	kbd {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.4rem;
		border-radius: 6px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(9, 13, 31, 0.55);
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.7rem;
		color: rgba(226, 232, 255, 0.8);
	}
</style>
