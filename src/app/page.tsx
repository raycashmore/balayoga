import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<BannerImage imgSrc="/banner.webp" align="right" />
			<MainContent>
				<div className="flex flex-col gap-2 text-3xl font-extralight text-white">
					<Link href="about" className="hover:underline">
						About
					</Link>
					<Link href="adults-yoga" className="hover:underline">
						Adults
					</Link>
					<Link href="kids-yoga" className="hover:underline">
						Kids
					</Link>
					<Link href="register-interest" className="hover:underline">
						Register Interest
					</Link>
				</div>
			</MainContent>
		</>
	);
}
