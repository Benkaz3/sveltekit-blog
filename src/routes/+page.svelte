<script>
	import { siteTitle } from '$lib/config';
	import MinimalPostsList from '$lib/components/MinimalPostsList.svelte';
		import { siteDescription } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
		<meta data-key="description" name="description" content={siteDescription}>

</svelte:head>

<section class="intro-section">
	
	<h1>Về Dũng Làm MarTech</h1>
	<p>Blog <a href="https://dungtran.me">dungtran.me</a> là góc cafe anh chị em làm marketing lui tới, chia 
		sẻ chuyện làm nghề. Quan trọng hơn, tôi cũng muốn nó là nơi gỡ rối "kỹ thuật" cho rất nhiều marketer còn lúng túng
		"bơi trong công nghệ". </p>
		
	<p>Nội dung chính của blog sẽ xoay quanh các chủ đề kỹ thuật khó gặm - từ tracking đến phân tích dữ liệu và tự dộng hoá. Hi vọng với 
		hướng tiếp cận gần gũi, đơn giản blog sẽ phần nào có ích cho công việc của các bạn. 
	</p>
	<MinimalPostsList posts={data.posts} />
</section>



<style>
	.intro-section {
		background-color: var(--paper, #fff);
		padding: 0 !important;
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
	.intro-section :global(h1) {
		font-size: 2rem;
		color: var(--accent, #333);
		margin-bottom: 2.5rem !important;
	}

	.intro-section a {
		color: var(--accent);
		text-decoration: none;
	}

	.intro-section li {
		font-size: 1rem;
	}

	.intro-section :global(p) {
		font-size: 1rem;
		color: var(--ink, #666);
		line-height: 1.8;
		margin-bottom: 1rem;
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
