const site = 'https://dungtran.me'; // change this to reflect your domain
const categories = [
	'marketing',
	'principles',
	'performance marketing',
	'branding',
	'sveltekit',
	'web',
	'css',
	'markdown'
]; // replace with your actual categories
const posts = ['my-marketing-principles', 'performance-vs-brand', 'syntax-highlighting-example']; // populate this with all your actual post slugs

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const body = sitemap(posts, categories);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (posts, categories) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  <url>
    <loc>${site}/</loc>
    <lastmod>2024-11-15T15:35:56+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>${site}/blog</loc>
    <lastmod>2024-11-15T15:35:56+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>${site}/contact</loc>
    <lastmod>2024-11-15T15:35:56+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  ${posts
		.map(
			(post) => `
  <url>
    <loc>${site}/blog/${post}</loc>
    <lastmod>2024-11-15T15:35:56+00:00</lastmod>
    <priority>0.80</priority>
  </url>`
		)
		.join('')}
  ${categories
		.map(
			(category) => `
  <url>
    <loc>${site}/blog/category/${encodeURIComponent(category)}</loc>
    <lastmod>2024-11-15T15:35:56+00:00</lastmod>
    <priority>0.64</priority>
  </url>`
		)
		.join('')}
</urlset>`;
