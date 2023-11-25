<script>
	import { goto, invalidateAll } from '$app/navigation';

	let username = '';
	let password = '';

	const handleSubmit = async () => {
		const response = await fetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		});

		const data = await response.json();

		if (response.ok) {
			goto('/');
			invalidateAll();
		} else {
			alert(data.message);
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="username">Username</label><br />
	<input bind:value={username} type="text" name="username" id="username" placeholder="Username" />

	<br /><br />

	<label for="password">Password</label><br />
	<input bind:value={password} type="text" name="password" id="password" placeholder="Password" />

	<br /><br />
	<button type="submit">Login</button>
</form>
