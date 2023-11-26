import { PUBLIC_BASE_URL } from '$env/static/public';
export const load = async (loadEvent) => {
	console.log(
		'Load function called in page.js in /stocks accesing PUBLIC_BASE_URL ',
		PUBLIC_BASE_URL
	);
	const { fetch, depends } = loadEvent;
	depends('stocks:actively-trading');
	const response = await fetch(`${PUBLIC_BASE_URL}/stocks`);
	const stocks = await response.json();
	return { stocks };
};
