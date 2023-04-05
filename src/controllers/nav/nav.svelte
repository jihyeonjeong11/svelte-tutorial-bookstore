<script>
	import { navLinks } from '../../utils/variables';
	import { slide } from 'svelte/transition';

	// creating orderly wave transition effect
	// https://brittanychiang.com/
	// https://github.com/bchiang7/v4/blob/main/src/components/nav.js
</script>

<header class="flexBetween">
	<nav>
		<div class="header-wrapper">
			<div>logo</div>
			<ol transition:slide>
				{#each navLinks as link}
					<li>
						<a href={link.url}>{link.name}</a>
					</li>
				{/each}
			</ol>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		z-index: 11;
		padding: 0px 50px;
		width: 100%;
		height: var(--nav-height);
		background-color: rgba(10, 25, 47, 0.85);
		filter: none !important;
		pointer-events: auto !important;
		user-select: auto !important;
		backdrop-filter: blur(10px);
		transition: var(--transition);
	}

	nav {
		position: relative;
		width: 100%;
		color: var(--lightest-slate);
		font-family: var(--font-mono);
		counter-reset: item 0;
		z-index: 12;
		.logo {
			a {
				color: var(--green);
				width: 42px;
				height: 42px;
				&:hover,
				&:focus {
					svg {
						fill: var(--green-tint);
					}
				}
				svg {
					fill: none;
					transition: var(--transition);
					user-select: none;
				}
			}
		}
	}

	/* .header-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0px 50px;
	}
	ol {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 50%;
	} */
</style>
