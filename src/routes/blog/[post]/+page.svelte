<script>
	export let data;
	import { formatDate } from '$lib/assets/js/formatDate.js';

	const { title, excerpt, date, updated, coverImage, coverImageAlt, coverWidth, coverHeight, categories, tags } = data.meta;
	const { PostContent } = data;

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content={coverImage} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
</svelte:head>

<article class="post">
	{#if coverImage}
		<img
			class="cover-image"
			src={coverImage}
			alt={coverImageAlt}
			style="aspect-ratio: {coverWidth} / {coverHeight};"
			width={coverWidth}
			height={coverHeight}
		/>
	{/if}

	<h1>{title}</h1>

	<div class="meta">
		<p><strong>Đăng:</strong> {formatDate(date)}</p>
		{#if updated && updated !== date}
			<p><strong>Cập nhật:</strong> {formatDate(updated)}</p>
		{/if}
	</div>

	<section class="svelte-content">
		<svelte:component this={PostContent} />
	</section>

	{#if categories}
		<aside class="post-category">
			<h6>CHỦ ĐỀ</h6>
			<ul class="post-category__categories">
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">{category}</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
	{#if tags}
		<aside class="post-tag">
	<h6 class="post-tag__header">Tags</h6>
	<ul class="post-tag__list">
		{#each tags as tag}
			<li class="post-tag__item">
				<a href="/blog/tag/{tag}/" class="post-tag__link">{tag}</a>
			</li>
		{/each}
	</ul>
</aside>
	{/if}

	<a href="/blog" class="back-to-parent">Back to Blog</a>
</article>

<style>
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

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		color: var(--accent, #333);
	}

	.meta {
		margin-bottom: 2rem;
		font-size: 0.9rem;
		color: var(--grey, #666);
	}

	.meta p {
		margin: 0.5rem 0;
	}

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
		margin: 0; 
	}

	.post-category__categories li {
		font-size: 0.85rem;
	}

	.post-category__categories li a {
		text-decoration: none;
		color: var(--accent, #0070f3);
	}

	/* Tags Section */
.post-tag {
	margin-top: 2rem;
	font-size: 0.9rem;
}

.post-tag__header {
	font-size: 0.85rem;
	color: var(--grey, #444);
	margin-bottom: 0.5rem;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.05em;
}

.post-tag__list {
	list-style: none;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin: 0;
}

.post-tag__item {
	font-size: 0.85rem;
}

.post-tag__link {
	text-decoration: none;
	color: var(--accent, #0070f3);
	padding: 0.25rem 0.5rem;
	background-color: var(--dark, #f0f0f0);
	border-radius: 4px;
	transition: background-color 0.3s, color 0.3s;
}

.post-tag__link:hover {
	background-color: var(--accent, #0070f3);
	color: var(--light, #fff);
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
