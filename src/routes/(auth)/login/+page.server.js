import { fail } from '@sveltejs/kit';

export const actions = {
	async default({ request, cookies }) {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username) {
			return fail(400, { usernameMissing: true });
		}

		if (!password) {
			return fail(400, { passwordMissing: true });
		}

		cookies.set('token', 'token_value', { path: '/' });

		return { success: true };
	}
};
