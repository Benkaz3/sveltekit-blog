<script>
	export let posts = []

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<ul class="posts-list">
	{#each posts as post}
		<li class="post-item">
			<article class="post-preview">
				<p class="published-date">{formatDate(post.date)}</p>
				<a href="/blog/{post.slug}" class="no-underline">
					<!-- Optional image inclusion for each post -->
					<!-- <img
					src={post.coverImage}
					alt=""
					width={post.coverWidth}
					height={post.coverHeight}
					style="aspect-ratio: {post.coverWidth} / {post.coverHeight}"
					/> -->
					<h2 class="post-title">
						{post.title}
					</h2>
				</a>
				<!-- <p class="post-categories">{post.categories.join(', ')}</p> -->
			</article>
			<p class="post-excerpt">{post.excerpt}</p>
		</li>
	{/each}
</ul>

<style>
	/* Styles for the blog list */
	.posts-list {
		list-style: none;
		padding: 0;
		max-width: 800px;
		margin: 0 auto;
	}

	.post-item {
		margin-bottom: 2rem;
		padding: 1.5rem 0 !important;
		background-color: var(--paper, #fff);
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.post-preview {
		margin-bottom: 1rem;
	}

	.published-date {
		font-size: 0.9rem;
		color: var(--grey, #666);
		margin-bottom: 0.5rem;
	}

	.post-title {
		font-size: 1.75rem;
		color: var(--accent, #333);
		margin-bottom: 0.5rem;
	}

	.post-categories {
		font-size: 0.85rem;
		color: var(--accent, #666);
		margin-bottom: 1rem;
	}

	.post-excerpt {
		color: var(--ink, #333);
		line-height: 1.6;
	}

	.no-underline {
		text-decoration: none;
		color: inherit;
	}

	/* Media queries for responsive adjustments */
	@media (max-width: 600px) {
		.post-item {
			padding: 1rem;
		}

		.post-title {
			font-size: 1.5rem;
		}
	}
</style>
