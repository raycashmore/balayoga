import { Card } from '@/payload/components/Card';
import { cn } from '@/payload/utils/ui';
import configPromise from '@payload-config';
import type { Metadata } from 'next/types';
import { getPayload } from 'payload';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 600;

export default async function Page() {
	const payload = await getPayload({ config: configPromise });

	const posts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: 12,
		overrideAccess: false,
		select: {
			title: true,
			slug: true,
			meta: true
		}
	});

	return (
		<div className="pt-24 pb-24">
			<div className="container mb-16">
				<div className="prose dark:prose-invert max-w-none">
					<h1>Posts</h1>
				</div>
			</div>

			<div className={cn('container')}>
				<div>
					<div className="grid grid-cols-4 gap-x-4 gap-y-4 sm:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8 xl:gap-x-8">
						{posts?.docs?.map((result, index) => {
							if (typeof result === 'object' && result !== null) {
								return (
									<div className="col-span-4" key={index}>
										<Card className="h-full" doc={result} relationTo="posts" />
									</div>
								);
							}
							return null;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export function generateMetadata(): Metadata {
	return {
		title: `Payload Website Template Posts`
	};
}
