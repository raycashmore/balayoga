import type { Post } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { formatAuthors } from '@/payload/utils/formatAuthors';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import React from 'react';

export function BlogPage({ post }: { post: Post }) {
	const { populatedAuthors, publishedAt, title, content } = post;

	const hasAuthors = populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== '';

	return (
		<div>
			<div className="absolute top-[133px] left-[360px] min-h-screen w-[1018px] rounded-xl bg-[rgba(251,249,245,0.9)]" />

			<div className="absolute top-[208px] left-[465px] w-[808px] text-4xl text-black">
				<p className="mb-0">{title}</p>
			</div>

			{hasAuthors && (
				<div className="absolute top-[338px] left-[537px]">
					<p className="text-sm font-bold whitespace-nowrap text-black">{formatAuthors(populatedAuthors)}</p>
					{publishedAt && (
						<p className="mt-2 text-sm font-normal whitespace-nowrap text-black">
							<time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
						</p>
					)}
				</div>
			)}

			<div className="absolute top-[437px] left-[464px] w-[827px] text-lg font-normal text-neutral-900">
				<RichText className="mx-auto max-w-[48rem]" data={content} enableGutter={false} />
			</div>
		</div>
	);
}
