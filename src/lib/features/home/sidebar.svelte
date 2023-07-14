<!-- Some TECH Tags -->

<div class="flex flex-wrap mt-4 gap-4">
	<a href="blog" class="button tag-button tag-button--vue"> Java </a>
	<a href="/blog" class="button tag-button tag-button--css"> OSINT </a>
	<a href="/blog" class="button tag-button tag-button--vue"> Web Pentesting </a>
	<a href="/blog" class="button tag-button tag-button--react"> Golang </a>
	<a href="/blog" class="button tag-button tag-button--vue"> Bash </a>
	<a href="/blog" class="button tag-button tag-button--vue"> Python </a>
</div>
<div id="leetcode-data" class="mt-4">
    <h2 class="data-heading">Shunux's LeetCode Data</h2>
    <div id="leetcode-content" class="data-container">
        <p class="loading-text">Loading...</p>
    </div>
</div>


<style lang="postcss">
	.data-heading {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .data-container {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 1rem;
    }

    .loading-text {
        font-style: italic;
        color: #999;
    }
	.latest-post {
		@apply no-underline my-8 block;
	}

	.latest-post:hover .latest-post__title {
		@apply underline underline-offset-2;
	}

	.latest-post__date {
		@apply opacity-50 text-sm;
	}

	.latest-post__title {
		@apply mt-0 leading-6;
	}
	#leetcode-data {
        margin-top: 4rem;
    }
</style>
<script>
    // Fetch LeetCode Data and Update the DOM
    if (typeof document !== 'undefined') {
        fetch('https://leetcode-stats-api.herokuapp.com/shunux')
            .then(response => response.json())
            .then(data => {
                // Extract the desired fields from the data
                const {
                    totalSolved,
                    totalQuestions,
                    easySolved,
                    totalEasy,
                    mediumSolved,
                    totalMedium,
                    hardSolved,
                    totalHard,
                    acceptanceRate,
                    ranking,
                    contributionPoints
                } = data;
                
                // Create an object with the filtered data
                const filteredData = {
                    totalSolved,
                    totalQuestions,
                    easySolved,
                    totalEasy,
                    mediumSolved,
                    totalMedium,
                    hardSolved,
                    totalHard,
                    acceptanceRate,
                    ranking,
                    contributionPoints
                };

                // Update the DOM with the filtered data
                const leetCodeDataContainer = document.getElementById('leetcode-content');
                leetCodeDataContainer.innerHTML = `
                    <pre>${JSON.stringify(filteredData, null, 2)}</pre>
                `;
            })
            .catch(error => {
                console.error('Error fetching LeetCode data:', error);
                const leetCodeDataContainer = document.getElementById('leetcode-content');
                leetCodeDataContainer.innerHTML = `
                    <p>Error loading LeetCode data. Please try again later.</p>
                `;
            });
    }
</script>