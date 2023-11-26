<script>
	import { page } from '$app/stores';
	export let form;

	$: console.log('form', form); // accesible solo en /login
	$: console.log('page', $page.form, $page.status); // accesible en cualquier componente
</script>

{#if form?.success}
	<p style="color: green;">You are now logged in!</p>
{/if}

<form method="POST">
	<label for="username">Username</label><br />
	<input type="text" name="username" id="username" placeholder="Username" />
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
