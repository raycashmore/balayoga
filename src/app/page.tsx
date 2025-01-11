import BannerImage from "@/app/_components/banner-image";
import Logo from "@/app/_components/logo";
import Socials from "@/app/_components/socials";
import { About } from "@/app/about";
import { Adults } from "@/app/adults";
import { Kids } from "@/app/kids";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center gap-16">
			<BannerImage imgSrc="/IMG_3676.webp" />
			<div className="visible absolute left-[100px] top-[60px] flex w-[260px]">
				<Logo />
			</div>
			<div className="m-4 flex max-w-[1000px] flex-col gap-16">
				<About />
				<Kids />
				<Adults />
				<Socials />
			</div>
		</main>
	);
}
