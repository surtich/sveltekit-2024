import { redirect } from '@sveltejs/kit';
import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { secretKey } from '$lib/server/secrets.js';

export const load = async ({ parent, url }) => {
	console.log(`Connecting to database with username ${DB_USER} and password ${DB_PASSWORD}`);
	console.log(`Secret key is ${secretKey}`);
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
