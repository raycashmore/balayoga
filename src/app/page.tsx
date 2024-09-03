import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3676.webp" align="right" />
			<MainContent>
				<div className="flex flex-1 flex-col">
					<div className="flex flex-1 flex-col justify-center gap-2 text-3xl font-extralight text-white">
						<Link href="about" className="hover:underline">
							About
						</Link>
						<Link href="kids-yoga" className="hover:underline">
							Kids yoga
						</Link>
						<Link href="adults-yoga" className="hover:underline">
							Adults yoga
						</Link>
						<Link href="register-interest" className="hover:underline">
							Register interest
						</Link>
						<Link href="contact" className="hover:underline">
							Contact
						</Link>
					</div>
					<div className="mt-6 border-l-2 pl-3">
						<p className="opacity-70">
							<span className="text-xl">Bala:</span>
							<br />A Sanskrit word meaning “young,” “powerful,” “strength of mind,” and “child-like,” among other things.
							Embracing the essence of bala, we share the transformative practice of yoga with both kids and adults, fostering
							strong bodies and a mindset of curiosity and inner balance.
						</p>
					</div>
				</div>
			</MainContent>
		</>
	);
}
