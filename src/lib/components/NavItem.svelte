<script>
	import { currentPage } from '../assets/js/store'; // Keep track of current page

	export let href;

	// Check if the current page matches the href for active state
	$: isCurrentPage = $currentPage.startsWith(href);
</script>

<li>
	<a
		{href}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<slot />
	</a>
</li>
