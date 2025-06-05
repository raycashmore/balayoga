import Glow from "@/app/_components/glow";
import Socials from "@/app/_components/socials";
import { About } from "@/app/about";
import { Adults } from "@/app/adults";
import { Badge } from "@/app/badge";
import { Contact } from "@/app/contact";
import { Header } from "@/app/header";
import { Kids } from "@/app/kids";
import { Schools } from "@/app/schools";
import { Testimonials } from "@/app/testimonials";

export default function HomePage() {
	return (
		<>
			<div className="flex flex-col items-center gap-8 lg:gap-12">
				<Header />
				<main className="m-2 flex max-w-[1000px] flex-col gap-8 md:m-4 lg:gap-12">
					<About />
					<Kids />
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
