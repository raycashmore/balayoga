import Footer from '@/app/_components/footer';
import Glow from '@/app/_components/glow';
import { Hero } from '@/app/_components/hero';
import { MobileHomeNav } from '@/app/_components/mobile-home-nav';
import { BlockRenderer } from '@/payload/blocks/BlockRenderer';
import { fetchPageBySlug } from '@/payload/utils/fetchPageBySlug';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: {
		absolute: 'Bala Yoga'
	}
};

export function HomePageContent({ layout }: { layout: NonNullable<Awaited<ReturnType<typeof fetchPageBySlug>>>['layout'] }) {
	return (
		<>
			<div className="flex flex-col items-center gap-14 lg:gap-20">
				<div className="flex flex-col">
					<Hero />
					<MobileHomeNav />
				</div>
				<main className="flex w-[calc(100%-16px)] max-w-[984px] flex-col gap-14 lg:w-[calc(100%-48px)] lg:gap-20">
					<BlockRenderer layout={layout} />
				</main>
				<footer className="bg-bala-purple-dark flex w-full justify-center">
					<Footer />
				</footer>
			</div>
			<Glow />
		</>
	);
}

export default async function HomePage() {
	const page = await fetchPageBySlug('home');
	if (!page) return notFound();

	return <HomePageContent layout={page.layout} />;
}
