<script>
	export let posts = []

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<p class="published-date">{formatDate(post.date)}</p>
				<a href="/blog/{post.slug}" class="no-underline">
					<!-- <img
					src={post.coverImage}
					alt=""
					width={post.coverWidth}
					height={post.coverHeight}
					style="ratio: {post.coverWidth} / {post.coverHeight}"
					/> -->
					<h2 class="padding-bottom-sm">
						{post.title}
					</h2>
					<p>{post.categories}</p>
				</a>
			</article>

			<p>{post.excerpt}</p>
		</li>
	{/each}
</ul>