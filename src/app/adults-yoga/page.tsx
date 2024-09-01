import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Nav from "@/app/_components/nav";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/banner.webp" align="right" />
			<MainContent>
				<p className="text-white">Adults Yoga...</p>
				<Nav />
			</MainContent>
		</>
	);
}
