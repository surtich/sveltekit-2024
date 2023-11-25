import Product from './product.svelte';

export const load = async (loadEvent) => {
	console.log('Load function called in page.js');
	const { data } = loadEvent;
	const notification = 'End of season sale!';
	return { ...data, Component: Product, notification };
};

export const ssr = true;
export const csr = true;
