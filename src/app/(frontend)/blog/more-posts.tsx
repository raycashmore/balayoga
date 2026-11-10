import type { BlogListPost } from '@/app/(frontend)/blog/blog-list-post';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import { bodyFont, headerFont } from '@/styles/fonts';
import Link from 'next/link';

type MorePostsProps = {
	posts: BlogListPost[];
	currentSlug?: string | null;
};

export function MorePosts({ posts, currentSlug }: MorePostsProps) {
	const otherPosts = posts.filter(({ slug }) => slug !== currentSlug);
	if (otherPosts.length === 0) return null;

	return (
		<nav aria-labelledby="more-posts-heading" className="border-rule border-t pt-6">
			<h2 id="more-posts-heading" className={`${bodyFont.className} text-ink-muted m-0 pb-2 text-xs font-semibold tracking-[0.14em] uppercase`}>
				More from the blog
			</h2>
			<ul className="divide-bala-purple-light flex flex-col divide-y">
				{otherPosts.map(({ id, slug, title, publishedAt }) => (
					<li key={id}>
						<Link href={`/blog/${slug}`} className="flex flex-col gap-1 py-3">
							<span className={`${headerFont.className} text-ink text-xl leading-[26px]`}>{title}</span>
							{publishedAt && (
								<time dateTime={publishedAt} className="text-ink-muted text-[13px]">
									{formatDateTime(publishedAt)}
								</time>
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
