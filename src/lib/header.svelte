<script>
	import { page } from '$app/stores';
	import { goto, invalidateAll, preloadData } from '$app/navigation';
</script>

<svelte:head>
	<title>{$page.data.title || 'SvelteKit demo'}</title>
</svelte:head>

<header class="layout-header">
	<a href="/">Home</a>
	<a href="/products">Products</a>
	<a href="/address">Address</a>
	<a href="/stocks">Stocks</a>
	<a href="/news">News</a>
	{#if !$page.data.username}
		<a href="/login">Login</a>
	{:else}
		<!--Al no estar en la ruta de login el action tiene que indicar la ruta y la acción-->
		<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}">
			<button type="submit">Logout</button>
		</form>
	{/if}
	<button
		on:mouseover={async () => {
			await preloadData('/products');
		}}
		on:focus={async () => {
			await preloadData('/products');
		}}
		on:click={() => goto('/products')}>Goto products</button
	>
</header>

<style>
	a {
		color: #e9c46a;
		text-decoration: none;
	}
	.layout-header {
		background-color: #264653;
		color: #f4a261;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>
