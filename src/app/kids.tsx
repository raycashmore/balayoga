"use client";

import { headerFont } from "@/styles/fonts";
import Image from "next/image";

export function Kids() {
	return (
		<section className="flex flex-col gap-4 rounded-[32px] bg-[#fff] bg-opacity-70 p-8 text-[#1A1A1A] md:px-12">
			<a id="kids-yoga" />
			<div className="flex items-center gap-6">
				<h2 className={`${headerFont.className} pb-2 leading-tight`}>Kids and teens yoga</h2>
				<Image src="/activekids-logo.webp" alt="Active kids approved provider" width={100} height={100} />
			</div>
			<div>
				<Image
					src="/kids-yoga.webp"
					alt=""
					width={350}
					height={350}
					className="float-none m-0 mt-0 rounded-xl pb-4 md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				<p className="text-base font-bold">
					Program for kids in term 2, 2025
					<br /> Building Inner Strength, Resilience, and Self-Belief
				</p>
				<p>
					This program is designed for primary school children (7 - 12 years old), supporting their mental, physical and emotional
					health, providing them with tools to thrive in today&apos;s fast-paced world.
				</p>
				<table className="my-2">
					<tbody>
						<tr>
							<td className="align-top">Time:</td>
							<td>Monday 4 - 5 pm</td>
						</tr>
						<tr>
							<td className="pr-3 align-top">Location:</td>
							<td>
								Hills Yoga,{" "}
								<a href="https://maps.app.goo.gl/KPU2hASqv25omecUA" target="_blank" className="underline">
									261 Old Northern Road, Castle Hill
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				<form
					action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes"
					className="mt-4 flex justify-center sm:justify-start"
				>
					<button
						type="submit"
						className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
					>
						Book now
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
				<p className="text-base font-bold">
					Program for teens in term 2, 2025
					<br />
					Building Resilience, Confidence, and Self-Acceptance
				</p>
				<p>
					Empower your teens with this program designed to build resilience, confidence, and self-acceptance. This transformative
					journey equips teens with tools to navigate stress, peer pressure, and the digital world while fostering a positive
					self-image and strong interpersonal connections.
				</p>
				<table className="my-2">
					<tbody>
						<tr>
							<td className="align-top">Time:</td>
							<td>Monday 5:15 - 6:15 pm</td>
						</tr>
						<tr>
							<td className="pr-3 align-top">Location:</td>
							<td>
								Hills Yoga,{" "}
								<a href="https://maps.app.goo.gl/KPU2hASqv25omecUA" target="_blank" className="underline">
									261 Old Northern Road, Castle Hill
								</a>
							</td>
						</tr>
					</tbody>
				</table>

				{/*<form action="https://square.link/u/5f3YQcpB">*/}
				<form
					action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes"
					className="mt-4 flex justify-center sm:justify-start"
				>
					<button
						type="submit"
						className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
					>
						Book now
					</button>
				</form>
			</div>
		</section>
	);
}
