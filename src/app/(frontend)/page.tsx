import Footer from '@/app/_components/footer';
import Glow from '@/app/_components/glow';
import { Hero } from '@/app/_components/hero';
import { MobileHomeNav } from '@/app/_components/mobile-home-nav';
import { BlockRenderer } from '@/payload/blocks/BlockRenderer';
import { fetchPageBySlug } from '@/payload/utils/fetchPageBySlug';
import { notFound } from 'next/navigation';

export default async function HomePage() {
	const page = await fetchPageBySlug('home');
	if (!page) return notFound();

	return (
		<>
			<div className="flex flex-col items-center gap-8 lg:gap-12">
				<div className="flex flex-col">
					<Hero />
					<MobileHomeNav />
				</div>
				<main className="m-2 flex max-w-[1000px] flex-col gap-8 px-2 md:m-4 lg:gap-12">
					<BlockRenderer layout={page.layout} />
				</main>
				<footer className="bg-bala-purple-dark flex w-full justify-center">
					<Footer />
				</footer>
			</div>
			<Glow />
		</>
	);
}
