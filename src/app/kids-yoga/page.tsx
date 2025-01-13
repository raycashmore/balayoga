import Back from "@/app/_components/back";
import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3691.webp" />{" "}
			<MainContent>
				<Back />
				<p className="pb-2 text-xl font-black">Term 1, 2025</p>
				<aside className="rounded-lg bg-white p-6 font-medium text-black opacity-80">
					<p className="font-black text-black">
						Program for 7-12 year olds: Building Inner Strength, Resilience, and Self-Belief
					</p>
					<table className="my-4">
						<tbody>
							<tr>
								<td>Time:</td>
								<td>Monday 4 - 5 pm (from 10 February 2025)</td>
							</tr>
							<tr>
								<td className="pr-3">Location:</td>
								<td>Hills Yoga Studio, 261 Old Northern Road, Castle Hill</td>
							</tr>
							<tr>
								<td>Cost:</td>
								<td>$180 for the term (9 weeks), $20 trial</td>
							</tr>
						</tbody>
					</table>
					<p className="text-black">Active kids vouchers accepted.</p>
					<p className="text-black">
						To register for the term or book a trial,{" "}
						<Link href="contact" className="underline">
							send a message
						</Link>
						.
					</p>
				</aside>
				<p>
					This program is designed for primary school children, helping them cultivate resilience and self-belief, and empowering
					them with tools to help navigate challenges.{" "}
				</p>
				<div className="text-white">
					<p className="pb-2">Program includes:</p>
					<ul className="list-disc leading-6">
						<li className="ml-8">Breathing exercises to calm the mind and increase focus</li>
						<li className="ml-8">Breathing exercises to release anger and reduce tension</li>
						<li className="ml-8">Mindfulness exercises to foster self-awareness and teach emotional self-regulation</li>
						<li className="ml-8">Partner poses to build trust, connection and cooperation</li>
						<li className="ml-8">Yoga games to burn off excess energy and prepare the body for relaxation</li>
						<li className="ml-8">Visualisation and relaxation techniques to find the inner calm as a pathway to happiness</li>
						<li className="ml-8">Yoga poses to develop physical strength, balance and flexibility</li>
						<li className="ml-8">
							Yoga therapy movements to promote bodily balance by improving organ function and addressing structural
							imbalances
						</li>
						<li className="ml-8">Affirmations to cultivate a positive mindset and boost self-confidence</li>
					</ul>
				</div>
				<div className="text-white">
					<p className="pb-2">Bonuses:</p>
					<ul className="list-disc leading-6">
						<li className="ml-8">Weekly handouts for easy access to the techniques learned in the class</li>
						<li className="ml-8">Weekly recipe for a nutritious after-school pick-me-up snack</li>
					</ul>
				</div>
				<aside className="mt-8 rounded-lg bg-white p-6 font-medium text-black opacity-80">
					<p className="font-black text-black">
						Program for 12-17 year olds: Building Resilience, Confidence, and Self-Acceptance{" "}
					</p>
					<table className="my-4">
						<tbody>
							<tr>
								<td>Time:</td>
								<td>Monday 5:15 - 6:15 pm (from 10 February 2025)</td>
							</tr>
							<tr>
								<td className="pr-3">Location:</td>
								<td>Hills Yoga Studio, 261 Old Northern Road, Castle Hill</td>
							</tr>
							<tr>
								<td>Cost:</td>
								<td>$180 for the term (9 weeks), $20 trial</td>
							</tr>
						</tbody>
					</table>
					<p className="text-black">Active kids vouchers accepted.</p>
					<p className="text-black">
						To register for the term or book a trial,{" "}
						<Link href="contact" className="underline">
							send a message
						</Link>
						.
					</p>
				</aside>
				<p>
					Empower your teens with this program designed to build resilience, confidence, and self-acceptance. This transformative
					journey equips teens with tools to navigate stress, peer pressure, and the digital world while fostering a positive
					self-image and strong interpersonal connections.
				</p>
				<div className="text-white">
					<p className="pb-2">Program includes:</p>
					<ul className="list-disc leading-6">
						<li className="ml-8">Breathing exercises to reduce stress and anxiety by calming the body and mind</li>
						<li className="ml-8">Mindfulness techniques to promote emotional self-regulation</li>
						<li className="ml-8">
							Concentration and meditation practices to strengthen the brain’s frontal lobes, making teens resilient to
							negative influences of technology and peer pressure
						</li>
						<li className="ml-8">Partner yoga poses to build trust, cooperation, and connection</li>
						<li className="ml-8">
							Reflection activities to foster self-love and self-belief by recognising their unique strengths
						</li>
						<li className="ml-8">Affirmations and gratitude practices to support positive body image and boost self-esteem</li>
						<li className="ml-8">Yoga poses to develop physical strength, balance and flexibility</li>
						<li className="ml-8">
							Yoga therapy movements to promote bodily balance by improving organ function and addressing structural
							imbalances
						</li>
					</ul>
				</div>
				<div className="text-white">
					<p className="pb-2">Bonuses:</p>
					<ul className="list-disc leading-6">
						<li className="ml-8">
							My Wellbeing Journal as a personal space for reflections and introspections throughout the program and beyond
						</li>
						<li className="ml-8">Weekly handouts for easy access to the techniques learned in the class</li>
					</ul>
				</div>
			</MainContent>
		</>
	);
}
