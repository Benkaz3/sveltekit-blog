<!-- Renders posts listed by tag -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription, postsPerPage } from '$lib/config';

	export let data;
	const { page, tag, totalPosts, posts } = data;

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Blog tag {tag} - page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

{#if posts && posts.length}
	<h1>
		Tag: {tag}
		<br />
		<small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
	</h1>
	<Pagination currentPage={page} {totalPosts} path="/blog/tag/{tag}/page" />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} path="/blog/tag/{tag}/page" />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>
{/if}
