<script>
	export let data;
	const { title, products, Component: Product } = data;
</script>

<h1>{title}</h1>

{#each products as product}
	<Product {product} />
{/each}
