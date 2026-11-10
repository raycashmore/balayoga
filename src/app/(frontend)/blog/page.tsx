import { findBlogListPosts } from '@/app/(frontend)/blog/blog-list-post';
import { Post } from '@/app/(frontend)/blog/post';
import configPromise from '@payload-config';
import type { Metadata } from 'next/types';
import { getPayload } from 'payload';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 600;

export function generateMetadata(): Metadata {
	return {
		title: 'Blog'
	};
}

export default async function Page() {
	const payload = await getPayload({ config: configPromise });

	const [latest, allPosts] = await Promise.all([
		payload.find({
			collection: 'posts',
			depth: 1,
			limit: 1,
			sort: '-publishedAt',
			draft: false,
			overrideAccess: false,
			where: { _status: { equals: 'published' } }
		}),
		findBlogListPosts(payload)
	]);

	return <Post post={latest.docs[0] ?? null} allPosts={allPosts} />;
}
