<script>
	import { onMount } from 'svelte';
	import { loaderDelay, navLinks } from '../../utils/variables';
	import { fade, slide, fly } from 'svelte/transition';

	// creating orderly wave transition effect
	// https://brittanychiang.com/
	// https://github.com/bchiang7/v4/blob/main/src/components/nav.js

	export let isHome; // /landing임.
	// isMount

	let loaded = false;

	function fadeSlide(node, { delay = 0, ...options }) {
		const slideTrans = slide(node, { delay, ...options });
		const fadeTrans = fade(node, { delay, ...options });
		return {
			delay: delay,
			duration: options.duration,
			css: (t) => `
        ${slideTrans.css(t)} 
        ${fadeTrans.css(t)}
		
      `
		};
	}

	function load() {
		loaded = true;
	}

	onMount(() => {
		load();
	});
</script>

<header class="flexBetween">
	<nav class="flexBetween">
		<div>logo</div>
		<div class="ol-wrapper">
			<ol class="flexBetween">
				{#if loaded}
					{#each navLinks as link, i}
						<li transition:fly={{ y: -100, duration: 500, delay: i * 300 }}>
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
		//padding: 0px 50px 0px 50px;
		//padding: 1rem;
		width: 100%;
		height: var(--nav-height);
		//background-color: var(--dark-navy);

		filter: none !important;
		pointer-events: auto !important;
		user-select: auto !important;
		background-color: rgba(10, 25, 47, 0.85);
		backdrop-filter: blur(10px);
		transition: var(--transition);
		justify-content: center;
		@media (max-width: 1080px) {
			padding: 0 40px;
		}
		@media (max-width: 768px) {
			padding: 0 25px;
		}
	}

	nav {
		position: relative;
		width: 90%;
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

	ol {
		gap: 2rem;
		li::marker {
			color: var(--green);
		}
		li {
			transition-delay: 0ms;
			margin: 0px 5px;
			a {
				text-decoration: none;
				color: var(--slate);
			}
		}
	}
</style>
