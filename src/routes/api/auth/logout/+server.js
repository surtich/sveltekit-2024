import { json } from '@sveltejs/kit';

export const POST = async ({ cookies }) => {
	console.log('logout');
	cookies.delete('token', {
		path: '/'
	});

	return json(
		{ success: true },
		{
			status: 200
		}
	);
};
