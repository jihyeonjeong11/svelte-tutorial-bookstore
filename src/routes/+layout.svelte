<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	</footer>
</div>

<style>
	.app {
		min-height: 100vh;
		/* display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 1fr auto; 
		왜 main width가 안먹히지???
		*/

		width: 100vw;
	}

	main {
		margin: 0;
		box-sizing: border-box;
	}

	/* padding: 1rem; margin: 0 auto; */
	/* 
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
