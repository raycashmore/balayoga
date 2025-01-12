import Glow from "@/app/_components/glow";
import Socials from "@/app/_components/socials";
import { About } from "@/app/about";
import { Adults } from "@/app/adults";
import { Header } from "@/app/header";
import { Kids } from "@/app/kids";

export default function HomePage() {
	return (
		<>
			<div className="flex flex-col items-center gap-8 lg:gap-12">
				<Header />
				<main className="m-4 flex max-w-[1000px] flex-col gap-12">
					<About />
					<Kids />
					<Adults />
					<Socials />
				</main>
			</div>
			<Glow />
		</>
	);
}
