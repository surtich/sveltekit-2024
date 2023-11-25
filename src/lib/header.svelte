<script>
	import { page } from '$app/stores';
</script>

<div class="tall"></div>
<svelte:head>
	<title>{$page.data.title || 'SvelteKit demo'}</title>
</svelte:head>

<header class="layout-header">
	<a href="/">Home</a>
	<a href="/products" data-sveltekit-preload-code="viewport">Products</a>
	<a href="/address">Address</a>
	<a href="/stocks">Stocks</a>
</header>

<style>
	.tall {
		height: 100vh;
	}
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
