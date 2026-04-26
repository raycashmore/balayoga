import { HomePageContent } from '@/app/(frontend)/page';
import { YogaPageContent } from '@/app/(frontend)/yoga/page';
import { BlockRenderer } from '@/payload/blocks/BlockRenderer';
import { LivePreviewListener } from '@/payload/components/LivePreviewListener';
import { fetchPageBySlug } from '@/payload/utils/fetchPageBySlug';
import { draftMode } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

type Args = {
	params: Promise<{
		slug?: string;
	}>;
};

export default async function PreviewPage({ params: paramsPromise }: Args) {
	const { isEnabled } = await draftMode();
	if (!isEnabled) {
		redirect('/');
	}

	const { slug = '' } = await paramsPromise;
	const page = await fetchPageBySlug(slug, { draft: true });

	if (!page) return notFound();

	return (
		<>
			<LivePreviewListener />
			{slug === 'home' ? (
				<HomePageContent layout={page.layout} />
			) : slug === 'yoga' ? (
				<YogaPageContent layout={page.layout} />
			) : (
				<main className="content m-2 mx-auto flex max-w-[1000px] flex-col justify-center gap-8 px-2 pb-8 md:m-4 lg:gap-12 lg:pt-24">
					<BlockRenderer layout={page.layout} />
				</main>
			)}
		</>
	);
}
