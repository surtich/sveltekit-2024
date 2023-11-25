<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title || 'SvelteKit demo'}</title>
</svelte:head>

<header class="layout-header">
	<a href="/">Home</a>
	<a href="/products">Products</a>
	<a href="/address">Address</a>
	<a href="/stocks">Stocks</a>
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
