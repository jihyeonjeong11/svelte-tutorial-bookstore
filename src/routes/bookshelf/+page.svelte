<script>
	import Book from '../../components/book/Book.svelte';
	import Button from '../../components/button/Button.svelte';
	import Purchase from '../../components/purchase/purchase.svelte';
	let title = '';
	let price = 0;
	let description = '';
	let purchases = [];
	let books = [];
	function setTitle(event) {
		title = event.target.value;
	}

	function addBook() {
		const newBook = {
			title: title,
			price: price,
			description: description
		};
		books = books.concat(newBook);
	}

	function purchaseBook(event) {
		const selectedTitle = event.detail;
		purchases = purchases.concat({
			...books.find((book) => book.title === selectedTitle)
		});
	}
</script>

<h1>Book Store</h1>

<section>
	<h2>Add New Book</h2>
	<div>
		<label for="title">Title</label>
		<input type="text" id="title" value={title} on:input={setTitle} />
	</div>

	<div>
		<label for="price">Price</label>
		<input type="number" id="price" bind:value={price} />
	</div>

	<div>
		<label for="description">Description</label>
		<textarea rows="3" id="description" bind:value={description} />
	</div>

	<Button on:click={addBook}>ADD Book</Button>
</section>

<section>
	<h2>Stock</h2>
	{#if books.length === 0}
		<p>No books in stock.</p>
	{:else}
		{#each books as book}
			<Book
				bookTitle={book.title}
				bookPrice={book.price}
				bookDescription={book.description}
				on:buy={purchaseBook}
			/>
		{/each}
	{/if}
</section>

<section>
	<Purchase books={purchases} />
</section>

<style>
	h1 {
		color: purple;
	}
	section {
		margin: auto;
		width: 30rem;
	}
	label,
	input,
	textarea {
		width: 100%;
	}
</style>
