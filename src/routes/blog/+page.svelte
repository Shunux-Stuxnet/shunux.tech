<script lang="ts">
	import Blog from '$lib/features/blog/index.svelte'
	import type { Model } from '$lib/types/post.d'

	export let data: { posts: [Model.Post] }
</script>

<svelte:head>
	<title>Skills | Shunux Stuxnet</title>
	<meta
		name="description"
		content="Willing to learn by doing."
	/>
	<meta property="og:title" content="Work | Dennis Smuda" />
	<meta
		property="og:description"
		content="Willing to learn by doing."
	/>
</svelte:head>

<Blog posts={data.posts} />
