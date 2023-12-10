<script>
	import Header from '$lib/components/header.svelte';
</script>

<svelte:head>
	<title>Impressum | Shunux Stuxnet</title>
	<meta name="description" content="Imprint | legally required content." />
	<meta property="og:title" content="Impressum - Shunux Stuxnet" />
	<meta
		property="og:description"
		content="Impressum | legally required content."
	/>
</svelte:head>

<Header title="Impressum" subtitle="Some notable organizations I've secured." />

<section class="container p-8 mx-auto">
	<div class="border-box">
		<div class="email-columns">
			<p>Indian Government</p>
			<p>US Government</p>
			<p>UK Government</p>
		</div>
		<div class="email-columns">
			<p>Brazil Government</p>
			<p>Argentina Government</p>
			<p>Thailand Government</p>
		</div>
		<div class="email-columns">
			<p>Drexel University</p>
			<p>Stanford</p>
			<p>Harvard</p>
		</div>
		<div class="email-columns">
			<p>University of Illinois</p>
			<p>University of Pennsylvania</p>
			<p>Columbia University</p>
		</div>
		<div class="email-columns">
			<p>Yale University</p>
			<p>Indian Institute of Science</p>
			<p>VIT Bhopal University</p>
		</div>
		<div class="email-columns">
			<p>Drexel University</p>
			<p>Institute Of Mental Health & Neuro Sciences</p>
			<p>Kazakhastan Development Bank</p>
		</div>
		<div class="email-columns">
			<p>Microsoft</p>
			<p>NASA</p>
			<p>Nokia</p>
		</div>
		<div class="email-columns">
			<p>Shell</p>
			<p>Planet Art</p>
			<p>Natrulis</p>
		</div>
		<div class="email-columns">
			<p>...</p>
			<p>...</p>
			<p>...</p>
		</div>
	</div>
</section>

<style>
	.border-box {
		border: 10px solid;
		border-left-color: #FF9933; /* Saffron color */
		border-bottom-color: #00FF00; /* Light green color */
		border-right-color: #00FF00; /* Light green color */
		border-top-color: #FF9933; /* Saffron color */
		padding: 10px;
	}

	.email-columns {
		column-count: 3;
		column-gap: 20px;
	}
</style>