<script>
	export let posts = [];
	import { formatDate } from '$lib/assets/js/formatDate';

</script>

<ul class="minimal-posts-list">
	<h4>Bài viết gần đây</h4>
	{#each posts as post}
		<li class="minimal-post-item">
			<a href="/blog/{post.slug}" class="no-underline">
                <p class="published-date">{formatDate(post.date)}</p>
				<h2 class="post-title">{post.title}</h2>
			</a>
		</li>
	{/each}
</ul>

<style>
	h4 {
		margin: 1rem 0;
	}
	.minimal-posts-list {
		list-style: none;
		padding: 0;
		max-width: 800px; 
		margin: 0 auto;
	}

	.minimal-post-item {
		margin-bottom: 1.5rem;
		padding: 0;
		/* border-bottom: 1px solid var(--grey-light, #ddd); */
	}

	.post-title {
		font-size: inherit;
		color: inherit;
		margin: 0;
        color: var(--accent);
        font-weight: normal;
	}

	.minimal-posts-list :global(.published-date) {
		font-size: 0.9rem;
		color: var(--grey, #666);
		margin: 0;
        /* padding: 0 !important;  */
	}

	.no-underline {
		text-decoration: none;
		color: inherit;
	}
</style>
