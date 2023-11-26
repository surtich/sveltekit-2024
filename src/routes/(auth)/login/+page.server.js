import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	async login({ request, cookies, url }) {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username) {
			return fail(400, { usernameMissing: true });
		}

		if (!password) {
			return fail(400, { passwordMissing: true, username });
		}

		cookies.set('token', 'token_value', { path: '/' });

		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	},
	logout: ({ cookies, url }) => {
		cookies.delete('token', { path: '/' });
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	}
};
