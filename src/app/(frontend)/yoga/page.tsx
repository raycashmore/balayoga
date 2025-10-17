import { BlockRenderer } from '@/payload/blocks/BlockRenderer';
import { fetchPageBySlug } from '@/payload/utils/fetchPageBySlug';
import { notFound } from 'next/navigation';

export default async function Page() {
	const page = await fetchPageBySlug('yoga-slug');
	if (!page) return notFound();

	return (
		<main className="m-2 mx-auto flex max-w-[1000px] flex-col justify-center gap-8 pt-14 pb-8 md:m-4 lg:gap-12 lg:pt-24">
			<BlockRenderer layout={page.layout} />
		</main>
	);
}
