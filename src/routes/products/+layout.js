export const load = async ({ fetch, parent }) => {
	const parentData = await parent();
	const { username } = parentData;
	const title = 'Featured products';
	const response = await fetch('http://localhost:4000/featured-products');
	const featuredProducts = await response.json();
	console.log('>>>>>>', username);
	return { username, title, featuredProducts };
};
