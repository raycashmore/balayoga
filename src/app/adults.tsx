import { headerFont } from "@/styles/fonts";
import Image from "next/image";

export function Adults() {
	return (
		<section className="flex flex-col gap-4 rounded-[32px] bg-[#DBE2F0] bg-opacity-80 p-8 pb-12 text-[#1A1A1A] md:px-12">
			<a id="adults-yoga" />
			<h2 className={`${headerFont.className} pb-4 leading-none`}>Adults yoga</h2>

			<div className="flex flex-col gap-8 sm:flex-row">
				<aside>
					<Image src="/s2.webp" alt="" width={200} height={200} className="h-auto w-48 rounded-xl object-cover" />
				</aside>
				<div className="flex-[1]">
					<p className="pb-4">
						Develop a stronger body and mind with Hatha yoga classes that will allow you to slow down and focus on yourself. We
						hold postures for a few rounds of breath to improve the whole body strength, balance and flexibility. Feel recharged
						and more connected to yourself through mindfulness practices and breathing exercises. Options are offered throughout
						the class allowing you to choose more beginner or advanced practice to suit your needs.
					</p>
					<p className="pb-4">
						Each week focuses on stretching and strengthening different parts of the body, alongside breathing exercises to
						enhance your well-being. And you will love the relaxation part the most!
					</p>
					<p className="pb-4">
						Every Wednesday at 6:45 - 7:45 pm at{" "}
						<a href="https://maps.app.goo.gl/JNVHnHpJ9aSz9Gku9" target="_blank" className="underline">
							Hawkins Hall, Thornleigh
						</a>
						.
					</p>
					<form
						action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes"
						className="flex justify-center sm:justify-start"
					>
						<button
							type="submit"
							className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
						>
							Book now
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
