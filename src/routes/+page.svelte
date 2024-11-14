<script>
	import { siteTitle } from '$lib/config';
	import PostsList from '$lib/components/PostsList.svelte';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<!-- Render the README.md content -->
<section class="intro-section">
	<svelte:component this={data.ReadMe} />
</section>

<!-- Display a list of latest blog posts -->
<!-- <section class="latest-posts">
	<PostsList {posts} />
</section> -->

<style>
	/* Global Styles for the homepage */
	.intro-section {
		background-color: var(--paper, #fff);
		padding: 3rem 1.5rem;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		max-width: 900px;
		margin: 0 auto;
	}

	.latest-posts {
		margin-top: 2rem;
		max-width: 900px;
		margin: 2rem auto;
	}

	/* Headings & Text Styles */
	.intro-section h1 {
		font-size: 2rem;
		color: var(--accent, #333);
		margin-bottom: 3.5rem;
	}

	.intro-section p {
		font-size: 1rem;
		color: var(--ink, #666);
		line-height: 1.8;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.intro-section {
			padding: 2rem 1rem;
		}

		.intro-section h1 {
			font-size: 1.75rem;
		}
	}
</style>
