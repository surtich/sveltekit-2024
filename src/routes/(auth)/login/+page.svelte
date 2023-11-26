<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let form;

	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

{#if form?.success}
	<p style="color: green;">You are now logged in!</p>
{/if}

<form method="POST" action={'?/login&redirectTo=' + redirectTo} use:enhance>
	<label for="username">Username</label><br />
	<input
		type="text"
		name="username"
		id="username"
		placeholder="Username"
		value={form?.username || ''}
	/>

	<br />
	{#if form?.usernameMissing}
		<p style="color: red;">Username is required!</p>
	{/if}
	<br />

	<label for="password">Password</label><br />
	<input type="text" name="password" id="password" placeholder="Password" />

	<br />
	{#if form?.passwordMissing}
		<p style="color: red;">Password is required!</p>
	{/if}
	<br />
	<button type="submit">Submit</button>
</form>
