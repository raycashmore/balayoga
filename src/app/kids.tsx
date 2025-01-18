"use client";

import { headerFont } from "@/styles/fonts";
import Image from "next/image";

export function Kids() {
	return (
		<section className="flex flex-col gap-4 rounded-[32px] bg-[#fff] bg-opacity-70 p-8 text-[#1A1A1A]">
			<h2 className={`${headerFont.className} pb-2 leading-none`}>Kids and teens yoga</h2>
			<div>
				<Image
					src="/kids-yoga.webp"
					alt=""
					width={350}
					height={350}
					className="float-none m-0 mt-0 rounded-xl pb-4 md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				<p className="py-2 text-base font-bold">
					Program for kids in term 1, 2025
					<br /> Building Inner Strength, Resilience, and Self-Belief
				</p>
				<p className="py-3">
					This program is designed for primary school children (7 - 12 years old), supporting their mental, physical and emotional
					health, providing them with tools to thrive in today's busy world.
				</p>
				<table className="my-2">
					<tbody>
						<tr>
							<td>Time:</td>
							<td>Monday 4 - 5 pm starting 10 February 2025</td>
						</tr>
						<tr>
							<td className="pr-3">Location:</td>
							<td>Hills Yoga, 261 Old Northern Road, Castle Hill</td>
						</tr>
						<tr>
							<td>Cost:</td>
							<td>$180</td>
						</tr>
					</tbody>
				</table>
				<form action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes" className="mt-4">
					<button
						type="submit"
						className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
					>
						Book trial
					</button>
				</form>
			</div>

			<div className="mt-4 md:mt-0">
				<Image
					src="/teens-yoga.webp"
					alt=""
					width={350}
					height={350}
					className="float-none m-0 mt-0 rounded-xl pb-4 md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				<p className="py-2 text-base font-bold">
					Program for teens in term 1, 2025
					<br />
					Building Resilience, Confidence, and Self-Acceptance
				</p>
				<p className="py-3">
					Empower your teens with this program designed to build resilience, confidence, and self-acceptance. This transformative
					journey equips teens with tools to navigate stress, peer pressure, and the digital world while fostering a positive
					self-image and strong interpersonal connections.
				</p>
				<table className="my-2">
					<tbody>
						<tr>
							<td>Time:</td>
							<td>Monday 5:15 - 6:15 pm starting 10 February 2025</td>
						</tr>
						<tr>
							<td className="pr-3">Location:</td>
							<td>Hills Yoga, 261 Old Northern Road, Castle Hill</td>
						</tr>
						<tr>
							<td>Cost:</td>
							<td>$180</td>
						</tr>
					</tbody>
				</table>

				{/*<form action="https://square.link/u/5f3YQcpB">*/}
				<form action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes" className="mt-4">
					<button
						type="submit"
						className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
					>
						Book trial
					</button>
				</form>
			</div>

			{/*<script src="https://app.squareup.com/appointments/buyer/widget/9o2g7qr7u1979a/L2Y5ECFR9ASJT.js"></script>*/}
		</section>
	);
}
