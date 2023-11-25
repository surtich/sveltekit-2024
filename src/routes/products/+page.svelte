<a href="/">Home</a>

<h1>Product list</h1>
{#each Array(10) as _, i}
	<div>
		<a href="products/{i + 1}">Product {i + 1}</a>
	</div>
{/each}
