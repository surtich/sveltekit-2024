export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	// sveltekit fetch does not need the full url
	const response = await fetch('/api/postcodes');
	const postcodes = await response.json();
	const addressList = postcodes.map((postcode) => {
		return `${postcode.buildingName}, ${postcode.line1} ,${postcode.line2}, ${postcode.line3}, ${postcode.town}, ${postcode.country}, ${postcode.postcode}`;
	});
	return { addressList };
};
