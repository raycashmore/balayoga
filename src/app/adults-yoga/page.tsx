import Back from "@/app/_components/back";
import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/s2.webp" align="center" />
			<MainContent>
				<Back />
				<p>
					Develop a stronger body and mind with our adult yoga classes that will allow you to slow down and focus on yourself.
					Join our Hatha yoga classes where we hold postures for a few rounds of breath to improve the whole body strength,
					balance and flexibility. Feel recharged and more connected to yourself through mindfulness practices and breathing
					exercises.
				</p>
				<p>
					Each week focuses on stretching and strengthening different parts of the body, alongside breathing exercises to enhance
					your well-being. And you will love the relaxation part the most!
				</p>
				<p>
					<strong>Monday 12:30 – 1:30 pm</strong> at Action Dance Academy, 5A Pioneer Ave, Thornleigh
				</p>
				<p>
					<strong>Wednesday 6:45 – 7:45 pm</strong> at Hawkins Hall, 2 Sefton Rd, Thornleigh
				</p>
				<p>Beginners and experienced welcomed. Variations and props are offered. Cost is $18 per class (drop in).</p>
				<p>
					To secure a spot, call 0435 440 496 or{" "}
					<Link href="contact" className="underline">
						send a message
					</Link>
					.
				</p>
			</MainContent>
		</>
	);
}
