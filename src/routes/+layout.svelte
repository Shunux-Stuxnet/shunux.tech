<script lang="ts">
	import { spring, type Spring } from 'svelte/motion'

	import BackgroundShape from '$lib/components/background-shape.svelte'
	import Navbar from '$lib/features/navbar/index.svelte'
	import Footer from '$lib/features/footer/index.svelte'

	import '../styles/base.css'
	import '../styles/tailwind.css'
	import '../styles/app.css'

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.12,
			damping: 0.225
		}
	)

	let size = spring(10, {
		stiffness: 0.15
	})

	function onMouseMove(e: MouseEvent) {
		coords.set({ x: e.clientX, y: e.clientY })
		const target = e.target as HTMLElement
		const currentTag = target.tagName.toLowerCase()

		if (currentTag === 'button' || currentTag === 'a') {
			size.set(25)
		} else {
			size.set(10)
		}
	}
</script>

<svelte:head>
	<meta
		name="google-site-verification"
		content="MnZwv5dTsjKhFTywABLA1PUBvNxWHIM109Vt4kZ3oA8"
	/>
	<link rel="canonical" href="https://shunux.tech/" />
	<meta property="og:url" content="https://shunux.tech" />
</svelte:head>

<div
	class="app-wrapper"
	on:mousemove={(e) => {
		onMouseMove(e)
	}}
	on:mousedown={() => size.set(50)}
	on:mouseup={() => size.set(10)}
>
	<BackgroundShape size={$size} coords={$coords} />

	<main class="relative">
		<Navbar />

		<slot />

		<Footer />
	</main>
</div>

<style lang="postcss" global>
	body {
		@apply bg-white text-black relative min-h-screen;
		@apply dark:bg-black dark:text-white;
		@apply transition-colors duration-700 overflow-x-hidden;
	}

	body::-webkit-scrollbar {
		@apply z-50 w-1;
	}

	body::-webkit-scrollbar-track {
		/* @apply bg-gray; */
	}

	body::-webkit-scrollbar-thumb {
		@apply bg-orange outline-orange;
	}
</style>
