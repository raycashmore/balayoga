import PostsList from '@/app/(frontend)/blog/posts-list';
import { BlogPage } from '@/app/_components/blog-page';
import type { Post } from '@/payload-types';
import { headerFont } from '@/styles/fonts';
import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next/types';
import { getPayload } from 'payload';
import React, { cache } from 'react';

export const dynamic = 'force-static';
export const revalidate = 600;

export function generateMetadata(): Metadata {
	return {
		title: `Bala Yoga: Blog`
	};
}

export default async function Page() {
	const payload = await getPayload({ config: configPromise });

	const allPosts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: 12,
		overrideAccess: false,
		select: {
			title: true,
			slug: true,
			meta: true
		},
		sort: 'createdAt'
	});

	const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
		const { isEnabled: draft } = await draftMode();
		const payload = await getPayload({ config: configPromise });
		const result = await payload.find({
			collection: 'posts',
			draft,
			limit: 1,
			overrideAccess: draft,
			pagination: false,
			where: {
				slug: {
					equals: slug
				}
			}
		});
		return result.docs?.[0] || null;
	});

	const latestPost = allPosts?.docs.at(0) as Post;
	const latestPostBody = latestPost?.slug ? await queryPostBySlug({ slug: latestPost.slug }) : null;

	return (
		<div className="flex justify-center overflow-hidden bg-[#EEEBF7]">
			<div className="flex max-w-[1280px] px-2">
				<aside className="mt-20 flex min-w-[240px] flex-col gap-4 p-4">
					<div className="fixed w-[220px] flex-col">
						<h2 className={headerFont.className}>
							<span className="text-[24pt]">Blog</span>
						</h2>
						<PostsList posts={allPosts} />
					</div>
				</aside>
				<article>
					<div className="px-4 pt-24 pb-12">{latestPostBody && <BlogPage post={latestPostBody} />}</div>
				</article>
			</div>
		</div>
	);
}
