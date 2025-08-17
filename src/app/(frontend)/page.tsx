import { About } from '@/app/(frontend)/about';
import { Adults } from '@/app/(frontend)/adults';
import { Badge } from '@/app/(frontend)/badge';
import { Contact } from '@/app/(frontend)/contact';
import { Family } from '@/app/(frontend)/family';
import { Kids } from '@/app/(frontend)/kids';
import { Schools } from '@/app/(frontend)/schools';
import { Testimonials } from '@/app/(frontend)/testimonials';
import Glow from '@/app/_components/glow';
import Socials from '@/app/_components/socials';
import { Header } from '@/payload/globals/header/Header';

export default async function HomePage() {
	// const headers = await getHeaders();
	// const payloadConfig = await config;
	// const payload = await getPayload({ config: payloadConfig });
	// const { user } = await payload.auth({ headers });

	return (
		<>
			<div className="flex flex-col items-center gap-8 lg:gap-12">
				<Header />
				<main className="m-2 flex max-w-[1000px] flex-col gap-8 md:m-4 lg:gap-12">
					<About />
					<Kids />
					<Family />
					<Schools />
					<Adults />
					<Testimonials />
				</main>
				<footer className="flex w-full justify-center bg-[#402B87]">
					<div className="space-between my-12 flex max-w-[1000px] flex-col gap-4 px-8 md:flex-row md:px-12">
						<div className="flex-1">
							<Contact />
							<Socials />
						</div>
						<div className="basis-1/2 pt-6">
							<Badge />
						</div>
					</div>
				</footer>
			</div>
			<Glow />
		</>
	);
}
