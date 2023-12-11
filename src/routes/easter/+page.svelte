<script>

	import Header from '$lib/components/header.svelte'
</script>

<Header title="about me  👨🏻‍💻️" subtitle="been where done what?" />

<section class="container lg:max-w-4xl mx-auto px-8">
	<div class="ds-prose ">
		<div class="ds-prose container">
			<iframe src="https://terminal.shunux.me/"></iframe>
		</div>
		<p>
			Hey there! I'm 
			<span class="keyword">NITYA NAND JHA</span>
			, a passionate student currently studying at <em>Vellore Institute of Technology</em>.
			 With a CGPA of <em>8.60</em>, 
			 I've been immersing myself in the world of 
			 <span class="color-change font-medium">Java, problem-solving, web pentesting, OSINT, Linux, Bash Scripting, and Golang.</span>
		</p>
		<p>
			To add some extra credibility, I've earned the <span class="color-change font-medium">NSE4</span> certification from <span class="emphasis">Fortinet</span>, specializing in network security. 
			But it doesn't stop there! I've also been actively involved in various projects and internships, gaining valuable hands-on experience.

			I'm excited to bring my skills and enthusiasm to exciting projects and collaborate with awesome individuals, organizations <span class="opacity-50">... or both!</span>.
		</p>
		

		
		

		<!-- I LIke -->
		<h2 class="rotated">I like ❤️‍🔥</h2>
		<ul>
			<li>
				<div>
					bug hunting
					<span class="emoji">🐛🦉💻🐛 </span>
				</div>
			</li>
			<li>
				<div>
					writing rap lyrics
					<span class="emoji">🎶 🎸 🎹 🥁 🎧</span>
				</div>
			</li>
			<li>
				<div>
					learning new things
					<span class="emoji">🤔 📖 ✨</span>
				</div>
			</li>
			<li>
				<div>
					being part of a team
					<span class="emoji">🎩 🧢 👒 ⛑</span>
				</div>
			</li>
			<li>
				<div>
					playing vollyball
					<span class="emoji">🏐 💨</span>
				</div>
			</li>
			<li>
				<div>
					Vegan/Vegetarian Russian 
					<span class="emoji">😋🥑🍑🥦</span>
				</div>
			</li>
		</ul>
		<br>
		<br>
		<br>
		<h2 class="rotated">Contact me at 📲 🟢📞</h2>
		<ul>
			<li>
				<div>
					Email : 
					<span class="emoji"> <a href="mailto:nitya.nandjha2020@vitbhopal.ac.in"><span class="emphasis">Send me an email</span></a> </span>
				</div>
			</li>
			<li>
				<div>
					LinkdIn:
					<span class="emoji"><a href="https://www.linkedin.com/in/shunux-stuxnet/"> <span class="emphasis">Let's connect on LinkdIn</span></a>
</span>
				</div>
			</li>
			<li>
				<div>
					Github:
					<span class="emoji"><a href="https://github.com/Shunux-Stuxnet/"><span class="emphasis">Gimme a star on GitHub</span></a>
</span>
				</div>
			</li>
			<li>
				<div>
					Twitter:
					<span class="emoji"><a href="https://twitter.com/CySecDF"><span class="emphasis">Follow me on Twitter</span></a>
</span>
				</div>
			</li>
		</ul>
	</div>
</section>

<div class="main-padding" />

<style lang="postcss">
	ul li div {
		@apply w-full block text-ellipsis;
	}

	.emoji {
		@apply text-2xl;
	}
	.container {
			width: calc(100% - 4px); /* Adjusted for 2px gap on each side */
			height: calc(100% - 4px); /* Adjusted for 2px gap on each side */
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid pink;
			margin: 2px; /* 2px margin for the gap */
			overflow: hidden; /* Hide the content that overflows the box */
	}
	iframe {
		width: 100%;
		height: 100%;
		border: none;
		overflow-y: auto; /* Enable vertical scrollbar when needed */
	}
</style>
