import type { Post } from '@/payload-types';

export type BlogListPost = Pick<Post, 'id' | 'slug' | 'title' | 'publishedAt'>;

export const blogListSelect = {
	title: true,
	slug: true,
	publishedAt: true
} as const;
