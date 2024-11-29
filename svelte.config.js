import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: [
				'*',
				'/api/posts/page/*',
				'/blog/category/*/page/',
				'/blog/category/*/page/*',
				'/blog/category/page/',
				'/blog/category/page/*',
				'/blog/tag/*/page/',
				'/blog/tag/*/page/*',
				'/blog/tag/page/',
				'/blog/tag/page/*',
				'/blog/page/',
				'/blog/page/*'
			],
			handleHttpError: ({ status, path }) => {
				if (status === 404) {
					console.warn(`404 on prerendered route: ${path}`);
					return;
				}
				throw new Error(`${status} at ${path}`);
			}
		}
	}
};

export default config;
