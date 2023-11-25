<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const { lang = 'en' } = $page.params;

	const greetings = {
		en: 'Hello!',
		es: '¡Hola!',
		fr: 'Bonjour!'
	};

	const greeting = greetings[lang];

	let placingOrder = false;

	function handleClick() {
		placingOrder = true;
		setTimeout(() => {
			placingOrder = false;
			goto('/products', { replaceState: true });
		}, 2000);
	}
</script>

{#if placingOrder}
	<p>Placing order...</p>
{:else}
	<h1>{greeting}</h1>

	<a href="/blog">Blog</a>
	<a href="/docs">Docs</a>
	<a href="/products">Products</a>

	<p>Ready to order?</p>
	<button on:click={handleClick}>Place order</button>
{/if}
