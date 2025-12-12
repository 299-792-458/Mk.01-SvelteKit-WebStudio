<script lang="ts">
	import QuantumField from './QuantumField.svelte';
	import NeonGridHero from './NeonGridHero.svelte';
</script>

<div class="absolute inset-0 -z-10 h-[100vh] w-full overflow-hidden">
	<div class="absolute inset-0 opacity-90 transition duration-1000 ease-in-out will-change-transform">
		<NeonGridHero />
	</div>
	<div class="absolute inset-0 mix-blend-screen opacity-70 blur-[0.5px] transition duration-1000 ease-in-out hover:opacity-100">
		<QuantumField />
	</div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,247,255,0.12),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,70,201,0.12),transparent_40%),linear-gradient(145deg,#04040a,#02030a_50%,#05060f)] opacity-70"></div>
</div>
