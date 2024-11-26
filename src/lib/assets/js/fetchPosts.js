import { postsPerPage } from '$lib/config';

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '', tag = '' } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	// Sort posts by date (newest first)
	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Filter by category if provided
	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
	}

	// Filter by tag if provided
	if (tag) {
		sortedPosts = sortedPosts.filter((post) => post.tags && post.tags.includes(tag));
	}

	// Apply offset
	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	// Apply limit
	if (limit && limit < sortedPosts.length && limit !== -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	// Format the posts for export
	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth,
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories,
		tags: post.tags // Include tags in the final output
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPosts;
