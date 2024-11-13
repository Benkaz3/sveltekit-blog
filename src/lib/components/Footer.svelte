<script>
	import { siteAuthor } from '$lib/config';
	// import NavItems from './NavItems.svelte';
</script>

<footer>
	<nav>
		<ul>
			<li><a href="/api/rss.xml" data-sveltekit-reload>rss</a></li>
			<li><a href="/">home</a></li>
		</ul>
	</nav>
	
	<!-- <nav>
		<NavItems />
	</nav> -->

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>