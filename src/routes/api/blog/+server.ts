import { json, type RequestHandler } from '@sveltejs/kit';

import type { Model } from '$lib/types/post.d';

export const GET: RequestHandler = () => {
  const allPostFiles: Record<string, { metadata: Model.Post }> =
    import.meta.glob('./content/*.{svx,md}', { eager: true });

  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    const postPath = path.slice(10, -3); // remove "./content" + ".md"
    return {
      ...post.metadata,
      path: postPath,
    };
  });

  const posts = allPosts.filter((post) => post.published === true);

  posts.sort((a, b) => a.tagPreference - b.tagPreference);

  return json({
    posts,
  });
};