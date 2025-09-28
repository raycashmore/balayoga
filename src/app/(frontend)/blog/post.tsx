import { BlogPage } from '@/app/(frontend)/blog/blog-page';
import PostsList from '@/app/(frontend)/blog/posts-list';
import type { Post } from '@/payload-types';
import { headerFont } from '@/styles/fonts';
import type { PaginatedDocs } from 'payload';
import React from 'react';

type PostProps = {
	allPosts: PaginatedDocs;
	post: Post | null;
};

export default function Post({ allPosts, post }: PostProps) {
	return (
		<div className="flex justify-center overflow-hidden bg-[#EEEBF7]">
			<div className="flex max-w-[1280px] px-2">
				<aside className="mt-20 hidden min-w-[240px] flex-col gap-4 p-4 lg:flex">
					<div className="fixed w-[220px] flex-col">
						<h2 className={headerFont.className}>
							<span className="text-[24pt]">Blog</span>
						</h2>
						<PostsList posts={allPosts} />
					</div>
				</aside>
				<article>
					<div className="px-0 pt-16 pb-12 md:px-2 lg:px-4 lg:pt-24">{post && <BlogPage post={post} />}</div>
				</article>
			</div>
		</div>
	);
}
