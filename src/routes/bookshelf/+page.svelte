<script>
    import Book from "../../components/book/Book.svelte"
    let title = '';
    let price = 0;
    let description = '';
    // function setTitle(event){
    //     title = event.target.value;
    // }
</script>
<style>
    h1 {
        color: purple;

    }
    section{
        margin: auto;
        width :30rem;

    }
    label,input,textarea{width: 100%}
</style>
<section>
    <div> 
        <label for="title">Title</label>
        <input type="text" id="title" bind:value={title} />
    </div>
    <div>
        <label for="price">Price</label>
        <input type="number" id="price" bind:value={price}/>
    </div>
    <div>
        <label for="description">Description</label>
        <textarea rows="3" id="description" bind:value={description}/>
    </div>
</section>
<Book bookTitle={title} bookPrice={price} bookDescription={description}/>