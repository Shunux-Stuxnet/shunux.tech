<script>
	import Header from '$lib/components/header.svelte'
	import ProjectList from '$lib/features/projects/project-list.svelte'
	import CvList from '../about/cv-list.svelte'
</script>

<Header title="Experience 🏁" subtitle="projects & internships" />
<br>
<br>
<h2 class="rotated"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspInternships 💻👨‍💻⌨️</h2>
<br>
<br>
<section class="container lg:max-w-4xl mx-auto px-8">
<CvList/>
</section>
<h2 class="rotated"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspProjects 🧑‍💻🎓</h2>

<section class="container lg:max-w-4xl mx-auto px-8">
	<ProjectList />
</section>
