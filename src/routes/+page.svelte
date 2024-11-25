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
	
	<h1>Về Dũng Làm Marketing</h1>
	<p><b>Dũng Làm Marketing</b> là nơi tôi chia sẻ và lưu giữ kinh nghiệm làm marketing của mình. 
		Blog xoay quanh hai chủ đề chính: </p>
		<ul>
			<li>Góc nhìn cá nhân về các câu chuyện, tin tức, và công nghệ mới trong lĩnh vực marketing.</li>
			<li>Hướng dẫn chi tiết cho các khía cạnh technical như Attribution Modeling, Facebook Pixel, Conversion API, v.v.</li>
		</ul>
	<p>Tôi đã dành 4 năm để học lập trình với mong muốn tự mày mò tìm hiểu về những công nghệ 
		được ứng dụng trong Marketing ngày nay. Với kiến thức này, tôi hi vọng sẽ mang lại những
		nội dung MarTech gần gũi và dễ hiểu cho các marketer từ newbies đến pros. Nếu bạn thấy có ích,
		hãy thường xuyên ghé <a href="https://dungtran.me">dungtran.me</a> nhé!
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
