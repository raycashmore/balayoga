"use client";

import { headerFont } from "@/styles/fonts";
import Image from "next/image";
import { useState } from "react";

export function Kids() {
	const [kidsExpanded, setKidsExpanded] = useState(false);
	const [teensExpanded, setTeensExpanded] = useState(false);

	return (
		<section className="flex flex-col gap-4 rounded-[32px] bg-[#FBF9F5] p-8 text-[#1A1A1A] opacity-90">
			<h2 className={headerFont.className}>Kids and teens yoga</h2>

			<div>
				<p className="pb-2 text-xl font-black">Term 1, 2025</p>
			</div>

			<div>
				<p className="py-2 font-black text-black">
					Program for 7-12 year olds: <br />
					Building Inner Strength, Resilience, and Self-Belief
				</p>
				<Image
					src="/kids.jpg"
					alt=""
					width={320}
					height={320}
					className="float-none m-0 mt-0 rounded-xl pb-4 md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				<p className="py-3">
					This program is designed for primary school children, helping them cultivate resilience and self-belief, and empowering
					them with tools to help navigate challenges.
				</p>

				{!kidsExpanded && (
					<a onClick={() => setKidsExpanded(true)} className="mt-2 text-[#2763D3] underline">
						Program includes...
					</a>
				)}

				{kidsExpanded && (
					<>
						<div>
							<p className="pb-2">
								<a onClick={() => setKidsExpanded(false)}>Program includes:</a>
							</p>
							<ul className="list-disc leading-6">
								<li className="ml-8">Breathing exercises to calm the mind and increase focus</li>
								<li className="ml-8">Breathing exercises to release anger and reduce tension</li>
								<li className="ml-8">Mindfulness exercises to foster self-awareness and teach emotional self-regulation</li>
								<li className="ml-8">Partner poses to build trust, connection and cooperation</li>
								<li className="ml-8">Yoga games to burn off excess energy and prepare the body for relaxation</li>
								<li className="ml-8">
									Visualisation and relaxation techniques to find the inner calm as a pathway to happiness
								</li>
								<li className="ml-8">Yoga poses to develop physical strength, balance and flexibility</li>
								<li className="ml-8">
									Yoga therapy movements to promote bodily balance by improving organ function and addressing structural
									imbalances
								</li>
								<li className="ml-8">Affirmations to cultivate a positive mindset and boost self-confidence</li>
							</ul>
						</div>
						<div>
							<p className="py-3">Bonuses:</p>
							<ul className="list-disc leading-6">
								<li className="ml-8">Weekly handouts for easy access to the techniques learned in the class</li>
								<li className="ml-8">Weekly recipe for a nutritious after-school pick-me-up snack</li>
							</ul>
						</div>
					</>
				)}
				<form action="https://book.squareup.com/classes/bro8gvstcef3zz/location/L2Y5ECFR9ASJT/classes" className="mt-4">
					<button
						type="submit"
						className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
					>
						Book classes
					</button>
				</form>
			</div>

			<div className="mt-4 md:mt-0">
				<p className="py-2 font-black text-black">
					Program for 12-17 year olds: <br />
					Building Resilience, Confidence, and Self-Acceptance
				</p>
				<Image
					src="/teens.jpg"
					alt=""
					width={320}
					height={320}
					className="float-none m-0 mt-0 rounded-xl pb-4 md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				<p className="py-3">
					Empower your teens with this program designed to build resilience, confidence, and self-acceptance. This transformative
					journey equips teens with tools to navigate stress, peer pressure, and the digital world while fostering a positive
					self-image and strong interpersonal connections.
				</p>
				<div>
					{!teensExpanded && (
						<a onClick={() => setTeensExpanded(true)} className="mt-2 text-[#2763D3] underline">
							Program includes...
						</a>
					)}

					{teensExpanded && (
						<>
							<p className="pb-2">
								<a onClick={() => setTeensExpanded(false)}>Program includes:</a>
							</p>
							<ul className="list-disc leading-6">
								<li className="ml-8">Breathing exercises to reduce stress and anxiety by calming the body and mind</li>
								<li className="ml-8">Mindfulness techniques to promote emotional self-regulation</li>
								<li className="ml-8">
									Concentration and meditation practices to strengthen the brain’s frontal lobes, making teens resilient
									to negative influences of technology and peer pressure
								</li>
								<li className="ml-8">Partner yoga poses to build trust, cooperation, and connection</li>
								<li className="ml-8">
									Reflection activities to foster self-love and self-belief by recognising their unique strengths
								</li>
								<li className="ml-8">
									Affirmations and gratitude practices to support positive body image and boost self-esteem
								</li>
								<li className="ml-8">Yoga poses to develop physical strength, balance and flexibility</li>
								<li className="ml-8">
									Yoga therapy movements to promote bodily balance by improving organ function and addressing structural
									imbalances
								</li>
							</ul>
							<p className="py-3">Bonuses:</p>
							<ul className="list-disc leading-6">
								<li className="ml-8">
									My Wellbeing Journal as a personal space for reflections and introspections throughout the program and
									beyond
								</li>
								<li className="ml-8">Weekly handouts for easy access to the techniques learned in the class</li>
							</ul>
						</>
					)}
				</div>

				{/*<form action="https://square.link/u/5f3YQcpB">*/}
				<form action="https://book.squareup.com/classes/bro8gvstcef3zz/location/L2Y5ECFR9ASJT/classes" className="mt-4">
					<button
						type="submit"
						className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
					>
						Book classes
					</button>
				</form>
			</div>

			{/*<script src="https://app.squareup.com/appointments/buyer/widget/9o2g7qr7u1979a/L2Y5ECFR9ASJT.js"></script>*/}
		</section>
	);
}
