<script>
	import NavItems from './NavItems.svelte';
	import LinkedInIcon from './LinkedInIcon.svelte';
</script>

<!-- Updated Navbar -->
<nav class="main-nav">
	<NavItems />
	<div class="icon-container">
		<LinkedInIcon href="https://www.linkedin.com/in/dungtran83/" />
	</div>
</nav>

<style>
.icon-container {
	margin-left: auto;
	display: flex;
	align-items: center;
	padding: 0.35rem;
	border: 1px solid var(--grey);
	border-radius: 5px;
}
</style>
