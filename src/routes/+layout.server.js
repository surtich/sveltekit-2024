export const load = async ({ cookies }) => {
	const token = cookies.get('token');

	// se obtiene el usuario del token. aquí lo simulamos.
	const user = { name: 'pepe', id: 1 };

	return {
		username: token ? user.name : null
	};
};
