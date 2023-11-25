import { redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { productId } = params;
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	if (response.status === 404) {
		throw redirect(307, '/products');
	}
	console.log('response', response.status);
	const product = await response.json();
	const title = 'Product details';
	const notification = 'End of 50% off sale!';
	return { notification, title, product };
};

export const prerender = 'auto';
