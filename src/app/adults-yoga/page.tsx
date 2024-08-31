import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/banner.webp" />
			<MainContent>
				<h1>Adults Yoga</h1>
				<Link href="/">Home</Link>
			</MainContent>
		</>
	);
}
