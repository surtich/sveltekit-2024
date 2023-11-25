<script>
	import { page } from '$app/stores';

	const { slug } = $page.params;
	const paths = slug.split('/');
</script>

<h1>Viewing Docs For</h1>
{#each paths as path}
	<h2>{path}</h2>
{/each}
