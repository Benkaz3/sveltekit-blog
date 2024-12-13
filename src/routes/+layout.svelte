<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '../lib/assets/js/store.js';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { siteTitle, siteURL, siteImage, siteDescription } from '$lib/config.js';
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	
	$: currentPage.set(data.path);
	console.log(data.path)

	const isBlogPost = data.path?.startsWith('/blog/');

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>


<svelte:head>
	<link rel="stylesheet" href="/css/vars.css" />
	<link rel="stylesheet" href="/css/root.css" />
	<link rel="stylesheet" href="/css/fonts.css" />
	<link rel="stylesheet" href="/css/typography.css" />
	<link rel="stylesheet" href="/css/layout.css" />
	<link rel="stylesheet" href="/css/components.css" />
	<link rel="stylesheet" href="/css/header-and-footer.css" />
	<link rel="stylesheet" href="/css/forms.css" />
	<link rel="stylesheet" href="/css/animation.css" />
	<link rel="stylesheet" href="/css/utilities.css" />
	<link rel="stylesheet" href="/css/code.css" />
	<link rel="stylesheet" href="/css/prism.css" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title={siteTitle}
		href="{siteURL}/api/rss.xml"
	/>
	{#if !isBlogPost}
		<meta property="og:title" content={siteTitle} />
		<meta property="og:description" content={siteDescription} />
		<meta property="og:image" content={siteImage} />
		<meta property="og:url" content={siteURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={siteImage} />
	{/if}
</svelte:head>


<div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
