<script>
	import Header from '$lib/components/header.svelte';
</script>

<svelte:head>
	<title>Terminal | Shunux Stuxnet</title>
	<meta name="description" content="Terminal | Shunux Stuxnet" />
	<meta property="og:title" content="Terminal | Shunux Stuxnet" />
	<meta property="og:description" content="Terminal | Shunux Stuxnet" />
	<style>
		html, body {
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.container {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid pink;
		}
		.iframe-container {
			width: 80%; /* Adjust the width as needed */
			height: 80vh; /* Adjust the height as needed */
			border: 2px solid pink; /* Same color as the outer box */
		}
		iframe {
			width: 100%;
			height: 100%;
			border: none;
		}
	</style>
</svelte:head>

<Header title="My Terminal" subtitle="let's dive in" />

<div class="ds-prose container">
	<div class="iframe-container">
		<iframe src="https://example.me/"></iframe>
	</div>
</div>
