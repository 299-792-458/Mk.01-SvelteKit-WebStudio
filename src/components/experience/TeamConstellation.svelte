<script lang="ts">
	export interface TeamMember {
		name: string;
		title: string;
		avatar: string;
		location: string;
		specialties: string[];
	}

	export let members: TeamMember[] = [];
</script>

<section class="constellation">
	{#each members as member, index}
		<article class="card" style={`--rotate: ${index % 2 === 0 ? '-3deg' : '2.5deg'}`}>
			<div class="avatar">
				<img src={member.avatar} alt={member.name} loading="lazy" />
			</div>
			<div class="body">
				<header>
					<h3>{member.name}</h3>
					<p>{member.title}</p>
				</header>
				<ul class="meta">
					<li>{member.location}</li>
					<li>{member.specialties.join(' · ')}</li>
				</ul>
			</div>
		</article>
	{/each}
</section>

<style>
	.constellation {
		display: grid;
		gap: 1.6rem;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}

	.card {
		position: relative;
		transform: rotate(var(--rotate));
		border-radius: 1.5rem;
		padding: 1.4rem;
		background:
			radial-gradient(120% 120% at 10% 0%, rgba(255, 107, 203, 0.18), transparent 65%),
			radial-gradient(140% 120% at 100% 100%, rgba(47, 93, 255, 0.2), rgba(9, 13, 31, 0.82));
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 24px 40px rgba(9, 13, 31, 0.38);
		backdrop-filter: blur(18px);
		display: grid;
		gap: 1rem;
		color: rgba(226, 232, 255, 0.92);
	}

	.avatar {
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 999px;
		overflow: hidden;
		border: 2px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 10px 24px rgba(5, 11, 35, 0.35);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	header h3 {
		font-size: 1.2rem;
		font-weight: 600;
	}

	header p {
		font-size: 0.85rem;
		color: rgba(226, 232, 255, 0.65);
	}

	.meta {
		margin-top: 0.6rem;
		display: grid;
		gap: 0.3rem;
		font-size: 0.8rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: rgba(226, 232, 255, 0.55);
	}
</style>
