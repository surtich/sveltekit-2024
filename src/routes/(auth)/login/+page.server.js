export const actions = {
	async default({ request }) {
		const form = await request.formData();
		console.log(form.get('username'), form.get('password'));
	}
};
