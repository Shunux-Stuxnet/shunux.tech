export namespace Model {
	export type Post = {
	  path: string;
	  slug: string;
	  isPrivate: boolean;
	  published: boolean;
	  title: string;
	  description: string;
	  createdAt: string;
	  tags: { name: string; value: string }[];
	  tagPreference: number;
	}
}