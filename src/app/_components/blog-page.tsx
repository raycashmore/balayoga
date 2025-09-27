import type { Post } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { formatAuthors } from '@/payload/utils/formatAuthors';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import { headerFont } from '@/styles/fonts';
import React from 'react';

export function BlogPage({ post }: { post: Post }) {
	const { populatedAuthors, publishedAt, title, content } = post;

	const hasAuthors = populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== '';

	return (
		<div className="rounded-xl bg-[rgba(251,249,245,0.9)] px-20 py-12">
			<div className="py-8">
				<h3 className={`${headerFont.className} mb-0 text-4xl text-black`}>{title}</h3>

				{hasAuthors && (
					<div>
						<p className="text-sm font-bold whitespace-nowrap text-black">{formatAuthors(populatedAuthors)}</p>
						{publishedAt && (
							<p className="mt-2 text-sm font-normal whitespace-nowrap text-black">
								<time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
							</p>
						)}
					</div>
				)}
			</div>

			<div className="text-[1rem] font-normal text-neutral-900">
				<RichText className="mx-auto" data={content} enableGutter={false} />
			</div>
		</div>
	);
}
