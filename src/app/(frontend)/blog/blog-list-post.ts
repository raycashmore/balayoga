import type { Post, PostsSelect } from '@/payload-types';
import type { Payload } from 'payload';

export type BlogListPost = Pick<Post, 'id' | 'slug' | 'title' | 'publishedAt'>;

const BLOG_LIST_SELECT = {
	title: true,
	slug: true,
	publishedAt: true
} as const satisfies PostsSelect<true>;

/** The most recent published posts, with just the fields the post lists render. */
export async function findBlogListPosts(payload: Payload): Promise<BlogListPost[]> {
	const result = await payload.find({
		collection: 'posts',
		limit: 12,
		sort: '-publishedAt',
		draft: false,
		overrideAccess: false,
		select: BLOG_LIST_SELECT,
		where: { _status: { equals: 'published' } }
	});

	return result.docs;
}
