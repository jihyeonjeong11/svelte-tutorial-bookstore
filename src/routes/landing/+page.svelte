<script>
	import { onMount } from 'svelte';
	import Loader from '../../icons/loader.svelte';
	import anime from 'animejs';
	import Nav from '../../controllers/nav/nav.svelte';
	/*
   1. declare loaded loading true
   2. 1000ms timer
   3. get svg
   4. implement animation
   5. loaded false
   6. render main
  */
  	let loaded = true;
    function load () {
		loaded = true
	}

	
	// $: load()
	const animate = () => {
		let svgPath = document.querySelectorAll('#logo circle');
		let B = document.querySelector('#logo #B');

		try {
			const loader = anime.timeline({
				complete: () => null
			});

			loader
				.add({
					targets: svgPath,
					delay: 300,
					duration: 1500,
					easing: 'easeInOutQuart',
					strokeDashoffset: [anime.setDashoffset, 0]
				})// 됨.
				.add({
					targets: B,
					duration: 700,
					easing: 'easeInOutQuart',
					opacity: 1
				}) // 왜아ㅓㄴ되지?
				.add({
					targets: '#logo',
					delay: 500,
					duration: 300,
					easing: 'easeInOutQuart',
					opacity: 0,
					scale: 0.1
				})
				.add({
					targets: '.loader',
					duration: 200,
					easing: 'easeInOutQuart',
					opacity: 0,
					zIndex: -1
				});
		} catch (e) {
			console.log(e);
		}
	};

	onMount( () => {
		
		const timeout = setTimeout(load, 3500);
		animate();
		return () => clearTimeout(timeout);
	});
</script>

<main>
	{#if loaded === false}
		<div class="loader-wrapper">
			<div class="logo-wrapper">
				<Loader />
			</div>
		</div>
	{:else}
		<div>
			<Nav />
		</div>
	{/if}
</main>

<style>
	main {
		background-color: var(--dark-navy);
		width: 100vw;
		height: 100vh;
		
	}
	.loader-wrapper {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo-wrapper {
		width: max-content;
		max-width: 100px;
		transition: var(--transition);
	}
	/* 
	.logo-div {
		display: flex;
    justify-content: center;
    align-items: center;
	} */
	/* opacity: ${props => (props.isMounted ? 1 : 0)}; */
	/* svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    } */
	/** check layout.svelte main style*/
</style>
