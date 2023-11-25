import { json } from '@sveltejs/kit';

import { comments } from '$lib/comments.js';

export function GET({ params }) {
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	return json(comment);
}
