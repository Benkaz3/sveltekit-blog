import { fetchMetadata } from '$lib/assets/js/fetchMetadata';

const site = 'https://dungtran.me';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const { posts, categories, tags } = await fetchMetadata();

	const postSlugs = posts.map((post) => post.slug);

	const body = sitemap(postSlugs, categories, tags);

	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (postSlugs, categories, tags) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>${site}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>${site}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.80</priority>
  </url>
  ${postSlugs
		.map(
			(slug) => `
  <url>
    <loc>${site}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.80</priority>
  </url>`
		)
		.join('')}
  ${categories
		.map(
			(category) => `
  <url>
    <loc>${site}/blog/category/${encodeURIComponent(category)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.64</priority>
  </url>`
		)
		.join('')}
  ${tags
		.map(
			(tag) => `
  <url>
    <loc>${site}/blog/tag/${encodeURIComponent(tag)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.64</priority>
  </url>`
		)
		.join('')}
</urlset>`;
