import { error, json } from '@sveltejs/kit';

export const POST = async ({ request, cookies }) => {
	const data = await request.json();

	if (!data.username) {
		throw error(400, 'Username is required!');
	}

	if (!data.password) {
		throw error(400, 'Password is required!');
	}

	cookies.set('token', 'token_Value', {
		path: '/' // ya que sino lo fija en /api y sólo será válidas en esa ruta
	});

	return json(
		{ name: data.username, id: 1 },
		{
			status: 200
		}
	);
};
