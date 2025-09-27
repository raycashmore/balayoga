import { About } from '@/app/(frontend)/about';
import Footer from '@/app/(frontend)/footer';
import { Testimonials } from '@/app/(frontend)/testimonials';
import Glow from '@/app/_components/glow';
import { Hero } from '@/app/_components/hero';

export default async function HomePage() {
	// const headers = await getHeaders();
	// const payloadConfig = await config;
	// const payload = await getPayload({ config: payloadConfig });
	// const { user } = await payload.auth({ headers });

	return (
		<>
			<div className="flex flex-col items-center gap-8 lg:gap-12">
				<Hero />
				<main className="m-2 flex max-w-[1000px] flex-col gap-8 md:m-4 lg:gap-12">
					<About />
					<Testimonials />
				</main>
				<footer className="bg-bala-purple-dark flex w-full justify-center">
					<Footer />
				</footer>
			</div>
			<Glow />
		</>
	);
}
