import { PUBLIC_BASE_URL } from '$env/static/public';
export const load = async (serverLoadEvent) => {
	console.log('Load function called in page.server.js');
	const { fetch } = serverLoadEvent;
	const title = 'List of available products';
	const response = await fetch(`${PUBLIC_BASE_URL}/products`);
	const products = await response.json();
	return { title, products };
};

export const prerender = true;
