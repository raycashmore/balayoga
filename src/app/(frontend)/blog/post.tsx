import type { BlogListPost } from '@/app/(frontend)/blog/blog-list-post';
import { BlogPage } from '@/app/(frontend)/blog/blog-page';
import { MorePosts } from '@/app/(frontend)/blog/more-posts';
import { PostsList } from '@/app/(frontend)/blog/posts-list';
import type { Post as PostType } from '@/payload-types';
import { LivePreviewPost } from '@/payload/components/LivePreviewPost';
import React from 'react';

type PostProps = {
	allPosts: BlogListPost[];
	isPreview?: boolean;
	post: PostType | null;
};

export function Post({ allPosts, isPreview = false, post }: PostProps) {
	const currentSlug = post?.slug;

	return (
		<div data-surface="light" className="flex min-h-screen w-full justify-center pb-2 lg:pb-20">
			<div className="page-track flex gap-10 pt-2 lg:pt-[98px]">
				<aside className="hidden w-[200px] shrink-0 lg:block">
					<div className="sticky top-[98px] flex flex-col gap-5 pt-16">
						<h2 className="text-ink-muted m-0 font-[inherit] text-xs font-semibold tracking-[0.14em] uppercase">Blog</h2>
						<PostsList posts={allPosts} currentSlug={currentSlug} />
					</div>
				</aside>
				<article className="min-w-0 flex-1">
					<div className="bg-sheet flex flex-col gap-10 rounded-[28px] px-6 pt-28 pb-10 md:px-10 lg:rounded-[32px] lg:px-14 lg:pt-16 lg:pb-18">
						{post && (isPreview ? <LivePreviewPost post={post} /> : <BlogPage post={post} />)}
						<div className="lg:hidden">
							<MorePosts posts={allPosts} currentSlug={currentSlug} />
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}
