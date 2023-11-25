<script>
	import { page } from '$app/stores';

	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';

	console.log('page', $page);
</script>

{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Header />
{/if}
<slot />
{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Footer />
{/if}
