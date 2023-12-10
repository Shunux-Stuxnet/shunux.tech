<script lang="ts">
	import Skills from '$lib/features/skills/index.svelte'
	import type { Model } from '$lib/types/post.d'

	export let data: { posts: [Model.Post] }
</script>

<svelte:head>
	<title>Writing | Shunux Stuxnet</title>
	<meta
		name="description"
		content="The Skills that I've gaines in my Journey"
	/>
	<meta property="og:title" content="Work | Shunux Stuxnet" />
	<meta
		property="og:description"
		content="My Experience."
	/>
</svelte:head>

<Skills posts={data.posts} />
