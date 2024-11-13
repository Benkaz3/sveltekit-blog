<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;

	function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<!-- <img
		class="cover-image"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/> -->

	<h1>{title}</h1>

	<div class="meta published-date">
		<b>Published:</b>
  {formatDate(date)}
		<br />
		<b>Updated:</b>
  {formatDate(updated)}
	</div>

	<svelte:component this={PostContent} />

	{#if categories}
		<aside class="post-category">
			<h6>TAGS</h6>
			<ul class="post-category__categories">
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

<style>
	/* General styles for the blog post layout */
.post {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 !important; 
  line-height: 1.8;
  font-family: var(--primaryFont, sans-serif);
  color: var(--ink, #333);
  background-color: var(--paper, #fff);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Header and title styling */
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--accent, #333);
}

.post :global(h2) {
	margin-top: 3rem; 
	margin-bottom: 1.5rem;
}

.post :global(hr) {
	height: 0.5px !important;
	padding: 0 2rem; 
}

.meta {
  font-size: 0.9rem;
  color: var(--grey, #666);
  margin-bottom: 1.5rem;
}

.published-date b {
  color: var(--accent, #666);
}

/* Post content styling */
.svelte-content :global(h2) {
  font-size: 1.75rem;
  margin-top: 2rem;
  color: var(--slate, #444);
}
.svelte-content :global(h3) {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}
.svelte-content :global(p) {
  margin: 1rem 0;
}

/* Category/tag styling */
.post-category {
  margin-top: 2rem;
  font-size: 0.9rem;
}

.post-category h6 {
  font-size: 1rem;
  color: var(--accent, #444);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.post-category__categories {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
}

.post-category__categories li {
  background-color: var(--accent, #f8c471);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.post-category__categories li a {
  color: inherit;
  text-decoration: none;
}

/* Media queries for responsive adjustments */
@media (max-width: 600px) {
  .post {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }
}

</style>