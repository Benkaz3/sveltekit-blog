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
	<p><b>dungtran.me</b> là nơi tôi chia sẻ kinh nghiệm làm marketing. Blog có hai nội dung chính.
		Thứ nhất là những bài viết về góc nhìn của riêng tôi về câu chuyện, tin tức, 
		công nghệ mới trong lĩnh vực marketing. 
		Và hai là những hướng dẫn chi tiết cho những mảng có tính technical ví dụ như Atrribution Modeling,
		FB pixel, Conversion APIs v.v.. 
	</p>
	<p>Tôi đã dành 4 năm để học về Khoa học Máy tính với mục tiêu làm cầu nối
		giữa sáng tạo và công nghệ. Hi vọng rằng trải nghiệm mới trong tech
		sẽ có ích trong việc tạo ra nội dung MarTech gần gũi, dễ hiểu cho 
		các marketer từ newbies đến pros. 
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
