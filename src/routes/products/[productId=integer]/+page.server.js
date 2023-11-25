import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { productId } = params;
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	if (response.status === 404) {
		throw error(404, { message: 'Product not found', hint: 'Try a different product' });
	}
	console.log('response', response.status);
	const product = await response.json();
	const title = 'Product details';
	return { title, product };
};

export const prerender = 'auto';
