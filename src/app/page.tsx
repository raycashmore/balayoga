import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<BannerImage imgSrc="/banner.webp" />
			<MainContent>
				<Link href="adults-yoga">Adults</Link>
				<Link href="kids-yoga">Kids</Link>
				<Link href="register-interest">Register interest</Link>
			</MainContent>
		</>
	);
}
