<script>
	export let data;
	const { title, products } = data;
</script>

<h1>{title}</h1>

{#each products as product}
	<div>
		<a href={`/products/${product.id}`}>
			<h2>{product.title}</h2>
		</a>
		<p>{product.description}</p>
		<hr />
	</div>
{/each}
