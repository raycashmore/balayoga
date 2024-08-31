import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<BannerImage imgSrc="/banner.webp" align="right" />
			<MainContent>
				<div className="flex flex-col gap-2 text-3xl font-extralight text-white">
					<Link href="about">About</Link>
					<Link href="adults-yoga">Adults</Link>
					<Link href="kids-yoga">Kids</Link>
					<Link href="register-interest">Register Interest</Link>
				</div>
			</MainContent>
		</>
	);
}
