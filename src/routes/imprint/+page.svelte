<script>
	import Header from '$lib/components/header.svelte'
</script>

<svelte:head>
	<title>Impressum | Dennis Smuda</title>
	<meta name="description" content="Imprint | legally required content." />
	<meta property="og:title" content="Impressum - Dennis Smuda" />
	<meta
		property="og:description"
		content="Impressum | legally required content."
	/>
</svelte:head>

<Header title="Impressum" subtitle="muss halt" />

<section class="container p-8 mx-auto">
	<div class="ds-prose">
		<iframe src="https://terminal.shunux.me/" width="100%" height="300">
		  <p>Your browser does not support iframes.</p>
		</iframe>
	</div>
</section>
