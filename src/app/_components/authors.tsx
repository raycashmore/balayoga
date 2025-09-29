import { formatDateTime } from '@/payload/utils/formatDateTime';
import Image from 'next/image';
import React from 'react';

type AuthorProps = {
	publishedAt?: string | null;
	authors?: string | null;
	thumbnail?: string | null;
};

export function Authors({ publishedAt, authors, thumbnail }: AuthorProps) {
	return (
		<div className="flex items-center gap-4">
			<div className="h-[60px] w-[60px]">
				{thumbnail && <Image src={thumbnail} alt="Author profile picture" width="60" height="60" />}
			</div>
			<div className="flex flex-col gap-1">
				<div className="text-sm font-bold whitespace-nowrap text-black">{authors}</div>
				{publishedAt && (
					<div className="text-sm font-normal whitespace-nowrap text-black">
						<time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
					</div>
				)}
			</div>
		</div>
	);
}
