<script>
	import { siteAuthor } from '$lib/config';
	// import NavItems from './NavItems.svelte';
</script>

<footer>
	<nav>
		<ul>
			<li>
	<a 
		href="/api/rss.xml" 
		target="_blank" 
		aria-label="RSS Feed" data-sveltekit-reload>
		rss
	</a>
</li>
<li>
	<a href="https://github.com/Benkaz3/sveltekit-blog" 
	   target="_blank" 
	   rel="noopener noreferrer" 
	   aria-label="GitHub Source Code">
		source
	</a>
</li>

		</ul>
	</nav>


	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>