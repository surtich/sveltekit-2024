import { PUBLIC_BASE_URL } from '$env/static/public';

export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const mostActiveStockResponse = await fetch(`${PUBLIC_BASE_URL}/most-active-stock`);
	const topGainingStockResponse = await fetch(`${PUBLIC_BASE_URL}/top-gaining-stock`);
	const topLosingStockResponse = await fetch(`${PUBLIC_BASE_URL}/top-losing-stock`);

	return {
		mostActiveStock: mostActiveStockResponse.json(),
		topGainingStock: topGainingStockResponse.json(),
		topLosingStock: topLosingStockResponse.json()
	};
};
