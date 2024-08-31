import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Nav from "@/app/_components/nav";
import RegisterInterest from "@/app/register-interest/register-interest";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3563.webp" />
			<MainContent>
				<Nav />
				<RegisterInterest />
			</MainContent>
		</>
	);
}
