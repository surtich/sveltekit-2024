<script>
	import { page } from '$app/stores';
	import { goto, beforeNavigate } from '$app/navigation';

	const { lang = 'en' } = $page.params;

	const greetings = {
		en: 'Hello!',
		es: '¡Hola!',
		fr: 'Bonjour!'
	};

	const greeting = greetings[lang];

	let placingOrder = false;

	beforeNavigate((navigation) => {
		console.log('before navigation', navigation, navigation?.to?.route?.id);
		if (navigation?.to?.route?.id === '/products') {
			if (!placingOrder) {
				navigation.cancel();
				alert('You must place an order first!');
			}
		}
	});

	function handleClick() {
		placingOrder = true;
		setTimeout(() => {
			goto('/products');
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
