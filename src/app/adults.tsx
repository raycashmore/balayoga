import { headerFont } from "@/styles/fonts";

export function Adults() {
	return (
		<section className="flex flex-col gap-4 rounded-[32px] bg-[#fff] p-8 text-[#1A1A1A] opacity-80">
			<h2 className={headerFont.className}>Adults yoga</h2>
			<p>
				Develop a stronger body and mind with our adult yoga classes that will allow you to slow down and focus on yourself. Join
				our Hatha yoga classes where we hold postures for a few rounds of breath to improve the whole body strength, balance and
				flexibility. Feel recharged and more connected to yourself through mindfulness practices and breathing exercises.{" "}
			</p>
			<p>
				Each week focuses on stretching and strengthening different parts of the body, alongside breathing exercises to enhance your
				well-being. And you will love the relaxation part the most!{" "}
			</p>
			<form action="https://book.squareup.com/classes/bro8gvstcef3zz/location/L2Y5ECFR9ASJT/classes">
				<button
					type="submit"
					className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
				>
					Book classes
				</button>
			</form>
		</section>
	);
}
