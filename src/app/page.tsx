import Glow from "@/app/_components/glow";
import { About } from "@/app/about";
import { Adults } from "@/app/adults";
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
				<main className="m-4 flex max-w-[1000px] flex-col gap-8 lg:gap-12">
					<About />
					<Kids />
					<Schools />
					<Adults />
					<Testimonials />
				</main>
				<footer className="flex w-full justify-center bg-[#402B87]">
					<div className="m-4 flex max-w-[1000px] flex-col">
						<Contact />
					</div>
				</footer>
			</div>
			<Glow />
		</>
	);
}
