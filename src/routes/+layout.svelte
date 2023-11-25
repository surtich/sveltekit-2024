<script>
	import { page } from '$app/stores';

	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	export let data;
</script>

{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Header />
{/if}
{#if $page.data.notification}
	<p>{$page.data.notification}</p>
{/if}
welcome {data.username}
<slot />
{#if $page.route.id !== '/(auth)/login' && $page.route.id !== '/(auth)/register'}
	<Footer />
{/if}
