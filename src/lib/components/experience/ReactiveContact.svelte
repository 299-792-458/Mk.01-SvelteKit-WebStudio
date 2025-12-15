<script lang="ts">
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let status: 'idle' | 'sending' | 'sent' = 'idle';
	let name = '';
	let email = '';
	let message = '';

	onMount(() => {
		const inputs = container.querySelectorAll('input, textarea');
		inputs.forEach((el) => {
			el.addEventListener('focus', () => pulse(el as HTMLElement));
		});
	});

	function pulse(element: HTMLElement) {
		animate(
			element.parentElement!,
			{
				filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'],
				scale: [1, 1.01, 1]
			},
			{ duration: 0.6, easing: 'ease-out' }
		);
	}

	async function submit() {
		status = 'sending';
		await new Promise((r) => setTimeout(r, 900));
		status = 'sent';
		animate(container, { scale: [1, 1.02, 1], opacity: [1, 0.9, 1] }, { duration: 0.5 });
	}
</script>

<div class="contact-shell" bind:this={container}>
	<div class="grid gap-4 md:grid-cols-2">
		<label class="field">
			<span>Name</span>
			<input bind:value={name} placeholder="Your name" />
			<div class="field-glow"></div>
		</label>
		<label class="field">
			<span>Email</span>
			<input bind:value={email} placeholder="you@domain.com" />
			<div class="field-glow"></div>
		</label>
	</div>
	<label class="field">
		<span>Message</span>
		<textarea rows="4" bind:value={message} placeholder="Tell me about the launch, product, or experiment."></textarea>
		<div class="field-glow"></div>
	</label>
	<button class="cta" on:click|preventDefault={submit} disabled={status !== 'idle'}>
		{status === 'idle' ? 'Initiate contact' : status === 'sending' ? 'Deploying…' : 'Signal sent'}
	</button>
</div>

<style>
	.contact-shell {
		position: relative;
		padding: 1.2rem;
		border-radius: 1.4rem;
		background: linear-gradient(135deg, rgba(10, 12, 24, 0.92), rgba(12, 12, 20, 0.96));
		border: 1px solid rgba(124, 247, 255, 0.16);
		box-shadow:
			0 30px 80px rgba(0, 0, 0, 0.55),
			inset 0 0 0 1px rgba(255, 255, 255, 0.04);
		color: #d7eaff;
		overflow: hidden;
	}

	.field {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding: 0.75rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.field input,
	.field textarea {
		background: transparent;
		border: none;
		outline: none;
		color: #eaf7ff;
		font-size: 1rem;
	}

	.field-glow {
		position: absolute;
		inset: -1px;
		border-radius: inherit;
		pointer-events: none;
		background: radial-gradient(circle at 20% 30%, rgba(124, 247, 255, 0.12), transparent 40%),
			radial-gradient(circle at 80% 70%, rgba(255, 70, 201, 0.12), transparent 35%);
		opacity: 0;
		transition: opacity 200ms ease;
		filter: blur(12px);
	}

	.field:focus-within .field-glow {
		opacity: 1;
	}

	.cta {
		margin-top: 0.5rem;
		width: 100%;
		padding: 0.9rem 1rem;
		border-radius: 0.9rem;
		border: 1px solid rgba(255, 70, 201, 0.4);
		background: linear-gradient(120deg, rgba(255, 70, 201, 0.16), rgba(124, 247, 255, 0.14));
		color: #fff;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-weight: 700;
	}
	.cta:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
