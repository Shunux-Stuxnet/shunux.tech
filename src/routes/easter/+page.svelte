<script>
	import Header from '$lib/components/header.svelte'
</script>
<Header title="👀" subtitle="hmmm..." />
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
		iframe {
			width: 100%;
			height: 100%;
			border: none;
		}
	</style>
</svelte:head>

<Header title="My Terminal" subtitle="let's dive in" />

<div class="ds-prose container">
	<iframe src="https://terminal.shunux.me/"></iframe>
</div>