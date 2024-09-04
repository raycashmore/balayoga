import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Title from "@/app/_components/title";
import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3676.webp" align="right" className="min-h-[360px]" />
			<div className="visible absolute left-8 top-4 flex lg:hidden">
				<Title />
			</div>
			<MainContent>
				<div className="flex flex-1 flex-col">
					<div className="flex flex-1 flex-col justify-center gap-2 text-3xl font-extralight text-white">
						<Link href="about" className="hover:underline">
							About
						</Link>
						<Link href="adults-yoga" className="hover:underline">
							Adults yoga
						</Link>
						<Link href="kids-yoga" className="hover:underline">
							Kids yoga
						</Link>
						<Link href="register-interest" className="hover:underline">
							Register interest
						</Link>
						<Link href="contact" className="hover:underline">
							Contact
						</Link>
					</div>
				</div>
			</MainContent>
		</>
	);
}
