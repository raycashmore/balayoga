import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/banner.webp" />
			<MainContent>
				<Link href="/">Home</Link>
				<h1>Register interest</h1>
			</MainContent>
		</>
	);
}
