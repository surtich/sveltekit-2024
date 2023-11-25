// import { redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { productId } = params;
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	if (response.status === 404) {
		return {
			status: 404,
			error: new Error(`Product with id ${productId} not found`)
		};
	}
	console.log('response', response.status);
	const product = await response.json();
	const title = 'Product details';
	return { title, product };
};

export const prerender = 'auto';
