import { BlockRenderer } from '@/payload/blocks/BlockRenderer';
import { LivePreviewListener } from '@/payload/components/LivePreviewListener';
import { fetchPageBySlug } from '@/payload/utils/fetchPageBySlug';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Yoga'
};

export default async function Page() {
	const { isEnabled: draft } = await draftMode();
	const page = await fetchPageBySlug('yoga');
	if (!page) return notFound();

	return (
		<>
			{draft && <LivePreviewListener />}
			<main className="content m-2 mx-auto flex max-w-[1000px] flex-col justify-center gap-8 px-2 pb-8 md:m-4 lg:gap-12 lg:pt-24">
				<BlockRenderer layout={page.layout} />
			</main>
		</>
	);
}
