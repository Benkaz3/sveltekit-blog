import { error } from '@sveltejs/kit';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async () => {
	try {
		const ReadMeFile = await import('../../README.md');
		const ReadMe = ReadMeFile.default;
		const { posts } = await fetchPosts({ offset: 0, limit: 3 });

		return {
			ReadMe,
			posts
		};
	} catch (err) {
		error(500, err);
	}
};
