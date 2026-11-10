import type { BlogListPost } from '@/app/(frontend)/blog/blog-list-post';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import Link from 'next/link';

type PostsListProps = {
	posts: BlogListPost[];
	currentSlug?: string | null;
};

export function PostsList({ posts, currentSlug }: PostsListProps) {
	return (
		<ul className="flex flex-col gap-0.5">
			{posts.map(({ id, slug, title, publishedAt }) => {
				const isCurrent = slug === currentSlug;
				return (
					<li key={id}>
						<Link
							href={`/blog/${slug}`}
							aria-current={isCurrent ? 'page' : undefined}
							className={[
								'flex flex-col gap-1 border-l-2 py-2.5 pl-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bala-purple',
								isCurrent ? 'border-bala-purple' : 'border-transparent hover:border-rule'
							].join(' ')}
						>
							<span className={`text-sm leading-5 ${isCurrent ? 'text-ink font-semibold' : 'text-ink-soft font-medium'}`}>
								{title}
							</span>
							{publishedAt && (
								<time dateTime={publishedAt} className="text-ink-muted text-xs">
									{formatDateTime(publishedAt)}
								</time>
							)}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
