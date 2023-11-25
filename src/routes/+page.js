export const load = async ({ fetch }) => {
	console.log('Load function called in page.js in / URL');
	const response = await fetch('api/current-time');
	const currentTime = await response.text();
	return { currentTime };
};
