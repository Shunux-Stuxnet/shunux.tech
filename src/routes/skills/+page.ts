import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`/api/skills`)
	const data = await res.json()

	return { posts: data.posts }
}
