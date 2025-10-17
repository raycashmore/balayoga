import { BlockRenderer } from '@/payload/blocks/BlockRenderer';
import { fetchPageBySlug } from '@/payload/utils/fetchPageBySlug';
import { notFound } from 'next/navigation';

export default async function CMSPage({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug: slugParts } = await params;
	const slug = slugParts?.join('/') || 'home';

	const page = await fetchPageBySlug(slug);
	if (!page) return notFound();

	return (
		<main className="container mx-auto max-w-5xl px-4 py-8">
			<BlockRenderer layout={page.layout} />
		</main>
	);
}
