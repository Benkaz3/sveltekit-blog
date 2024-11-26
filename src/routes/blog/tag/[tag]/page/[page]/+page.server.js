import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ url, params, fetch }) => {
	const page = parseInt(params.page) || 1;
	const { tag } = params;

	// Prevents duplication of page 1 as the index page
	if (page <= 1) {
		redirect(301, `/blog/tag/${tag}`);
	}

	let offset = page * postsPerPage - postsPerPage;

	// Adjusted to count total posts for the given tag
	const totalPostsRes = await fetch(`${url.origin}/api/posts/count?tag=${tag}`);
	const total = await totalPostsRes.json();
	const { posts } = await fetchPosts({ tag, offset, page });

	return {
		posts,
		page,
		tag,
		totalPosts: total
	};
};
