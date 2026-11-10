import { BlockRenderer } from '@/payload/blocks/BlockRenderer';
import { fetchPageBySlug } from '@/payload/utils/fetchPageBySlug';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Yoga'
};

export function YogaPageContent({ layout }: { layout: NonNullable<Awaited<ReturnType<typeof fetchPageBySlug>>>['layout'] }) {
	return (
		<main className="content flex w-[calc(100%-16px)] max-w-[984px] flex-col gap-2 pt-24 pb-2 lg:w-[calc(100%-48px)] lg:gap-8 lg:pt-[98px] lg:pb-20">
			<BlockRenderer layout={layout} />
		</main>
	);
}

export default async function Page() {
	const page = await fetchPageBySlug('yoga');
	if (!page) return notFound();

	return <YogaPageContent layout={page.layout} />;
}
