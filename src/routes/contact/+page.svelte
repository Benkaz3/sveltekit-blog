<svelte:head>
	<title>Let’s Chat!</title>
	<meta name="description" content="Don’t be shy—drop me a line and let’s connect!" />
</svelte:head>

<section>
	<h1>Get in touch!</h1>
	<p>
		Got a question, a proposal, or just feel like saying hey? I’m all ears!
		Drop me a line anytime—I’d love to connect.
	</p>
	<p>
		Email: 
		<a href="mailto:tran.dung@hotmail.com">tran.dung@hotmail.com</a>
	</p>
</section>

<style>
	h1 {
		margin-bottom: 1rem;
	}
	p {
		font-size: 1rem;
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}
	a {
		color: var(--accent); /* A medium blue for the link */
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	section {
		max-width: 600px;
		margin: 0 auto;
	}
</style>
