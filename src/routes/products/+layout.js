import { PUBLIC_BASE_URL } from '$env/static/public';
export const load = async ({ fetch, parent }) => {
	const parentData = await parent();
	const { username } = parentData;
	const title = 'Featured products';
	const response = await fetch(`${PUBLIC_BASE_URL}/featured-products`);
	const featuredProducts = await response.json();
	return { username, title, featuredProducts };
};
