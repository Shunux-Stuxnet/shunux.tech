<script>
	import Name from './name.svelte'
</script>

<!-- <section class="hero"> -->
<section class="px-12 pt-0 pb-16">
	<div class="hero -rotate-3">
		<div class="container main-padding">
			<!-- My Name -->
			<div class="title">
				<Name />
			</div>
			<div class="intro">
				<!-- Intro -->
				<p class="intro__paragraph">
					<span class="rainbow font-medium whitespace-nowrap">
						coder/ethical hacker/developer
					</span>
					<span> based in </span>
					<span class="german-color-change">INDIA 🇮🇳ॐ</span>
					<a href="/imprint">doing 👨🏻‍💻</a> several stuffs and
					<a href="/work">skilling ✏️</a> for the competitive world. Feel free to
					<a class="whitespace-nowrap" href="mailto:nitya.nandjha2020@vitbhopal.ac.in">
						get in touch 📫
					</a>
					or get to
					<a class="whitespace-nowrap" href="/about">know me 👋</a>
					first.
				</p>
				<center><a class="marker-link mt-4" href="/easter">Go to terminal website</a></center>

			</div>
		</div>
	</div>
</section>



<style lang="postcss">
	.title {
		@apply flex flex-col items-center overflow-visible w-full max-w-[420px];
	}

	.intro {
		@apply select-none;
		max-width: 380px;
	}

	.intro__paragraph {
		@apply text-xl text-center block font-thin leading-normal;
	}

	.intro__paragraph a {
		@apply underline underline-offset-2 font-medium;
	}

	.intro__paragraph a:hover {
		@apply no-underline text-pink;
	}

	.hero .container {
		@apply mx-auto flex flex-col items-center gap-8 relative;
		max-width: 1440px;
	}

	@screen md {
		.hero .container {
			@apply flex-row items-end;
		}

		.title {
			width: 45vw;
			max-width: 620px;
		}

		.title,
		.intro__paragraph {
			@apply text-left;
		}

		.title {
			margin-bottom: -1.75vw;
		}
	}
</style>
