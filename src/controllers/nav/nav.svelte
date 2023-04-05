<script>
	import { onMount } from 'svelte';
	import { loaderDelay, navLinks } from '../../utils/variables';
	import { fade, slide } from 'svelte/transition';

	// creating orderly wave transition effect
	// https://brittanychiang.com/
	// https://github.com/bchiang7/v4/blob/main/src/components/nav.js

	export let isHome; // /landing임.
	// isMount

	let loaded = false;

	function fadeSlide(node, options) {
		const slideTrans = slide(node, options);
		return {
			duration: options.duration,
			css: (t) => `
				${slideTrans.css(t)}
				opacity: ${t};
			`
		};
	}

	function load() {
		loaded = true;
	}

	onMount(() => {
		load()
	});
	console.log(loaded)
</script>

<header class="flexBetween">
	<nav class="flexBetween">
		<div>logo</div>
		<div class="ol-wrapper">
			<ol class="flexBetween">
				{#if loaded}
					{#each navLinks as link}
						<li transition:fadeSlide={{ duration: 1000 }}>
							<a href={link.url}>{link.name}</a>
						</li>
					{/each}
				{/if}
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
		background-color: rgba(10, 25, 47, 1);

		filter: none !important;
		pointer-events: auto !important;
		user-select: auto !important;
		//background-color: rgba(10, 25, 47, 0.85);
		//backdrop-filter: blur(10px);
		transition: var(--transition);
		@media (max-width: 1080px) {
			padding: 0 40px;
		}
		@media (max-width: 768px) {
			padding: 0 25px;
		}
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

	.ol-wrapper {
		display: flex;
		align-items: center;
	}
</style>
