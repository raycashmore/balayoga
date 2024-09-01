import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Nav from "@/app/_components/nav";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3691.webp" />
			<MainContent>
				<p className="text-white">Kids Yoga...</p>
				<Nav />
			</MainContent>
		</>
	);
}
