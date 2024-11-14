/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = "Dũng Trần | The Marketing Technologist's Playbook";
export const siteDescription =
	'Meet Dũng—a seasoned marketer turned tech enthusiast, blending branding, consumer psychology, and creative strategy with a dash of computer science. Get ready for data-driven insights and cutting-edge digital marketing solutions that are shaking things up in Vietnam’s fast-paced market. Stay tuned for fresh perspectives on how tech is rewriting the marketing playbook.';
export const siteURL = 'example.com';
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter';
export const siteAuthor = "- Dũng Trần | The Marketing Technologist's Playbook";

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'blog',
		route: '/blog'
	},
	{
		title: 'about',
		route: '/about'
	},
	{
		title: 'contact',
		route: '/contact'
	}
];
