/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = "Meta Mắm | Marketing Insights by Dũng Trần";
export const siteDescription =
	'Struggling to make sense of Vietnam’s fast-paced digital market? Meta Mắm by Dũng Trần delivers actionable marketing strategies that blend consumer psychology, cutting-edge tech, and creative branding to help you dominate the competition and drive real results. Stay ahead of the curve with insights that turn tech into a marketing superpower.';
export const siteURL = 'https://www.dungtran.me';  // Your actual domain URL
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter';
export const siteAuthor = "- Dũng Trần | The Marketing Technologist";

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'home',
		route: '/'
	},
	{
		title: 'blog',
		route: '/blog'
	},

	{
		title: 'contact',
		route: '/contact'
	}
];
