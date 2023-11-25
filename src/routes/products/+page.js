import Product from './product.svelte';

export const load = async (loadEvent) => {
	const { data } = loadEvent;
	return { ...data, Component: Product };
};
