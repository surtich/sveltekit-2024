<script>
	import { page } from '$app/stores';

	const { lang = 'en' } = $page.params;

	const greetings = {
		en: 'Hello!',
		es: '¡Hola!',
		fr: 'Bonjour!'
	};

	const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>
