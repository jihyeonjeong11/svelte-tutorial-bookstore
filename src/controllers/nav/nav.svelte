<script>
	import { onMount } from 'svelte';
	import { loaderDelay, navLinks, SCROLL_DOWN, SCROLL_UP } from '../../utils/variables';
	import { fade, slide, fly } from 'svelte/transition';
	import Loader from '../../icons/loader.svelte';
	import LogoIcon from '../../icons/logoIcon.svelte';

	// creating orderly wave transition effect
	// https://brittanychiang.com/
	// https://github.com/bchiang7/v4/blob/main/src/components/nav.js

	export let isHome; // /landing임.
	// scrollY position;
	export let boundaryPixel = 0;
	export let initialDirection = SCROLL_UP;
	let prevScrollY = 0;
	let y = 0;
	let direction = initialDirection;
	// header show/hide feature
	let headerClass = 'show';
	// throttler
	let tick = false;

	// isMount
	let loaded = false;

	function load() {
		loaded = true;
	}

	onMount(() => {
		load();
	});

	// function deriveClass(y, prevY) {
	// 	if (!tick) {
	// 		tick = true;

	// 		if (y < boundaryPixel) {
	// 			tick = false;
	// 			return 'show';
	// 		}

	// 		if (Math.abs(prevY) <= boundaryPixel) {
	// 			tick = false;
	// 			return headerClass;
	// 		}

	// 		if (prevY < 0) {
	// 			tick = false;
	// 			return 'show';
	// 		}
	// 		tick = false;

	// 		return 'hide';
	// 	}
	// }

	function deriveClass(y, prevY) {
		if (!tick) {
			tick = true;
			const threshold = boundaryPixel || 0;
			console.log(Math.abs(y - prevY), y, prevY);
			if (Math.abs(y - prevY) < threshold) {
				tick = false;
				return headerClass;
			}
			let scrollStatus = y > prevY ? SCROLL_DOWN : SCROLL_UP;
			tick = false;
			console.log(scrollStatus);
			prevScrollY = y > 0 ? y : 0;
			return scrollStatus === SCROLL_DOWN ? 'hide' : 'show';
		}
	}

	function updateClass(y) {
		return deriveClass(y, prevScrollY);
	}

	$: headerClass = updateClass(y);
</script>

<header class={headerClass}>
	<nav class="flexBetween">
		<div class="logo" tabIndex="-1">
			<a href="/" aria-label="home">
				<LogoIcon />
			</a>
		</div>
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

<svelte:window bind:scrollY={y} />

<style lang="scss">
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
	span {
		color: white;
	}
	.show {
		height: var(--nav-scroll-height);
		transform: translateY(0px);
		background-color: rgba(10, 25, 47, 0.85);
		box-shadow: 0 10px 30px -10px var(--navy-shadow);
	}
	.hide {
		height: var(--nav-scroll-height);
		transform: translateY(calc(var(--nav-scroll-height) * -1));
		box-shadow: 0 10px 30px -10px var(--navy-shadow);
	}
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
