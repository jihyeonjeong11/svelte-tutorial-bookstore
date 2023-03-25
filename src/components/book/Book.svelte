<script>
	import { createEventDispatcher } from 'svelte';
	import Button from '../button/Button.svelte';

	export let bookTitle;
	export let bookPrice;
	export let bookDescription;
	// this acts like customHTMLEvent.
	const dispatch = createEventDispatcher();
	// dispatch buy event with bookTitle param and handled to page.svelte.
	function purchaseBook() {
		dispatch('buy', bookTitle);
	}
</script>

<div>
	<h2>{bookTitle}</h2>
	<p>{bookPrice}</p>
	<p>{bookDescription}</p>
	<Button on:click={purchaseBook}>Buy</Button>
</div>

<style>
	div {
		margin: 1rem;
		padding: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}

	h2 {
		font-size: 1rem;
		margin: 0.25rem 0;
		font-weight: bold;
	}

	p {
		margin: 0.25rem 0;
	}
</style>
