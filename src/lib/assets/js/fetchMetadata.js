export const fetchMetadata = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	const categories = [...new Set(posts.flatMap((post) => post.categories || []))];
	const tags = [...new Set(posts.flatMap((post) => post.tags || []))];

	return { posts, categories, tags };
};
