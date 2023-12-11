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
			width: calc(100% - 4px); /* Adjusted for 2px gap on each side */
			height: calc(100% - 4px); /* Adjusted for 2px gap on each side */
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid pink;
			margin: 2px; /* 2px margin for the gap */
		}
		iframe {
			width: 150%;
			height: 200px;
			border: none;
		}
	</style>
</svelte:head>

<Header title="My Terminal" subtitle="let's dive in" />

<div class="ds-prose container">
	<iframe src="https://terminal.shunux.me/"></iframe>
</div>
