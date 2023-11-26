import { redirect } from '@sveltejs/kit';

export const load = async ({ parent, url }) => {
	const { username } = await parent();

	if (!username) {
		throw redirect(303 /*temporal redirect */, `/login?redirectTo=${url.pathname}`);
	}
	const newsAPIKey = 'YOUR_NEWS_API_KEY';
	console.log(newsAPIKey);
	/** Make API call using API key to fetch news data */
	const news = [
		{ id: 1, title: 'News 1' },
		{ id: 2, title: 'News 2' },
		{ id: 3, title: 'News 3' }
	];

	return { news };
};
