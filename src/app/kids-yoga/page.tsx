import Back from "@/app/_components/back";
import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3691.webp" />
			<MainContent>
				<Back />
				<p>
					Yoga is a powerful tool for fostering calmness and balance, therefore alleviating or preventing anxiety. Yoga teaches
					self-awareness through mindfulness practices, empowering children to regulate their emotions. Yoga enhances focus and
					concentration, offering a holistic approach to well-being.
				</p>
				<p>
					Yoga meets many physical, emotional, cognitive, social and spiritual needs of our children today. Studies have shown
					mental and physical health improvements when regular yoga practices are introduced to children.
				</p>
				<p>
					In the class, children will explore the mind and body connection, learning how to use breathing and mindfulness
					techniques to build inner strength and resilience. Additionally, yoga therapy exercises will be introduced to further
					enhance their well-being.
				</p>
				<div className="text-white">
					<p className="pb-2">Program includes:</p>
					<ul className="list-disc leading-6">
						<li className="ml-8">Yoga poses appropriate for the age group</li>
						<li className="ml-8">
							Breathing and mindfulness exercises - improves breathing, calms the mind, promotes emotional stability
						</li>
						<li className="ml-8">
							Story building - in a fun way this practice develops creativity and stimulates the imagination
						</li>
						<li className="ml-8">
							Yoga therapy movements - brings the body into balance by correcting functioning of organs, the body systems and
							structural imbalances
						</li>
						<li className="ml-8">Affirmations, reflection and relaxation</li>
						<li className="ml-8">Yoga games</li>
						<li className="ml-8">Handouts with home practice </li>
					</ul>
				</div>
				<div>
					<p>
						<strong>Term 3, 2024:</strong>
					</p>
					<p>
						<strong>Primary school children aged 7-12</strong>
					</p>
					<p>
						Thursday 4 - 5 pm at Hills Yoga Studio, 261 Old Northern Road, Castle Hill
						<br />
						Cost is $200 for 10 weeks (option to join anytime during the term)
						<br />
						Trial $20
						<br />
						Active kids vouchers accepted
					</p>
				</div>
				<div>
					<p>
						<strong>Term 4, 2024: </strong>
						<br />
						<Link href="register-interest" className="underline">
							Register your interest for your preferred days
						</Link>
					</p>
				</div>
			</MainContent>
		</>
	);
}
