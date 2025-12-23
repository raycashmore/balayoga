import { BlogPage } from '@/app/(frontend)/blog/blog-page';
import PostsList from '@/app/(frontend)/blog/posts-list';
import type { Post } from '@/payload-types';
import { LivePreviewListener } from '@/payload/components/LivePreviewListener';
import { headerFont } from '@/styles/fonts';
import { draftMode } from 'next/headers';
import type { PaginatedDocs } from 'payload';
import React from 'react';

type PostProps = {
	allPosts: PaginatedDocs;
	post: Post | null;
};

export default async function Post({ allPosts, post }: PostProps) {
	const { isEnabled: draft } = await draftMode();

	return (
		<>
			{draft && <LivePreviewListener />}

			<div className="flex min-h-screen w-full justify-center overflow-hidden bg-[#EEEBF7]">
				<div className="flex max-w-[1200px] px-2">
					<aside className="hidden min-w-[240px] flex-col gap-4 p-4 pt-[100px] lg:flex">
						<div className="fixed w-[220px] flex-col">
							<h2 className={headerFont.className}>
								<span className="text-[24pt]">Blog</span>
							</h2>
							<PostsList posts={allPosts} />
						</div>
					</aside>
					<article>
						<div className="content px-0 pt-2 pb-2 md:px-2 lg:px-4 lg:pt-24 lg:pb-12">{post && <BlogPage post={post} />}</div>
					</article>
				</div>
			</div>
		</>
	);
}
