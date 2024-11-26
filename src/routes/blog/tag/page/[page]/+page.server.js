import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async ({ fetch, params }) => {
	const page = parseInt(params.page) || 1;

	// Redirect to /blog/tag if the page number is 1
	if (page <= 1) {
		redirect(301, '/blog/tag');
	}

	const offset = page * postsPerPage - postsPerPage;

	// Fetch the total number of posts with tags
	const totalPostsRes = await fetch('/api/posts/tags/count');
	const total = await totalPostsRes.json();

	// Fetch posts for the current page with tags
	const { posts } = await fetchPosts({ offset, page, filterBy: 'tags' });

	return {
		posts,
		page,
		totalPosts: total
	};
};
