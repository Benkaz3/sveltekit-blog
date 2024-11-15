import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

export const GET = async () => {
	const hostname = 'https://dungtran.me'; // Replace with your actual domain

	// Static routes
	const staticRoutes = [
		{ url: '/', changefreq: 'daily', priority: 1.0 },
		{ url: '/contact', changefreq: 'monthly', priority: 0.7 },
		{ url: '/about', changefreq: 'monthly', priority: 0.7 }
	];

	// Fetch blog posts and extract categories and tags (future-proofing for tags)
	const postsDir = path.resolve('src/lib/posts');
	const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));

	const blogRoutes = files.map((file) => {
		const filePath = path.join(postsDir, file);
		const post = import(filePath); // Dynamically import the post file

		return post.then((content) => {
			const metadata = content.metadata; // Access the metadata directly
			const slug = file.replace('.md', '');
			const routes = [{ url: `/blog/${slug}`, changefreq: 'weekly', priority: 0.8 }];

			// Add routes for categories if any
			if (metadata.category) {
				routes.push({
					url: `/blog/category/${metadata.category}`,
					changefreq: 'monthly',
					priority: 0.7
				});
			}

			// Future-proof: Add routes for tags if they exist in metadata
			if (metadata.tags && Array.isArray(metadata.tags)) {
				metadata.tags.forEach((tag) => {
					routes.push({
						url: `/blog/tag/${tag}`,
						changefreq: 'monthly',
						priority: 0.7
					});
				});
			}

			return routes;
		});
	});

	const allRoutes = [...staticRoutes, ...(await Promise.all(blogRoutes)).flat()];

	// Generate sitemap
	const stream = new SitemapStream({ hostname });
	const data = await streamToPromise(Readable.from(allRoutes).pipe(stream));

	return new Response(data, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
