<script>
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;
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
	<title>{title}</title>
	<meta name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
</svelte:head>

<article class="post">
	{#if coverImage}
		<img
			class="cover-image"
			src={coverImage}
			alt=""
			style="aspect-ratio: {coverWidth} / {coverHeight};"
			width={coverWidth}
			height={coverHeight}
		/>
	{/if}

	<h1>{title}</h1>

	<div class="meta">
		<p><strong>Published:</strong> {formatDate(date)}</p>
		{#if updated && updated !== date}
			<p><strong>Updated:</strong> {formatDate(updated)}</p>
		{/if}
	</div>

	<section class="svelte-content">
		<svelte:component this={PostContent} />
	</section>

	{#if categories}
		<aside class="post-category">
			<h6>Tags</h6>
			<ul class="post-category__categories">
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">{category}</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	<a href="/blog" class="back-to-parent">Back to Blog</a>
</article>

<style>
	/* Blog post container */
	.post {
		max-width: 42rem;
		margin: 2rem auto;
		padding: 0 !important;
		line-height: 1.8;
		font-family: var(--primaryFont, sans-serif);
		color: var(--ink, #333);
		background-color: var(--paper, #fff);
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	/* Title */
	h1 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		color: var(--accent, #333);
	}

	/* Meta information */
	.meta {
		margin-bottom: 2rem;
		font-size: 0.9rem;
		color: var(--grey, #666);
	}

	.meta p {
		margin: 0.5rem 0;
	}

	/* Content styling */
	.svelte-content {
		margin-top: 2rem;
	}

	.svelte-content :global(h2),
	.svelte-content :global(h3) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--white, #444);
	}

	.svelte-content :global(p) {
		margin: 1rem 0;
	}

	/* Categories and tags */
	.post-category {
		margin-top: 2rem;
		font-size: 0.9rem;
	}

	.post-category h6 {
		font-size: 0.85rem;
		color: var(--grey, #444);
		margin-bottom: 0.5rem;
	}

	.post-category__categories {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.post-category__categories li {
		font-size: 0.85rem;
	}

	.post-category__categories li a {
		text-decoration: none;
		color: var(--accent, #0070f3);
	}

	/* Back to Blog link */
	.back-to-parent {
		display: inline-block;
		margin-top: 2rem;
		text-decoration: none;
		color: var(--accent, #0070f3);
		position: relative;
		padding-left: 1.5rem;
	}

	.back-to-parent::before {
		content: '⟵';
		position: absolute;
		left: 0;
		font-size: 1rem;
		top: 0;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.post {
			padding: 1.5rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
