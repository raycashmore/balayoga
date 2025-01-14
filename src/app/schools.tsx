import { headerFont } from "@/styles/fonts";

export function Schools() {
	return (
		<section className="flex flex-col gap-4 rounded-[32px] bg-[#fff] p-8 text-[#1A1A1A] opacity-80">
			<h2 className={headerFont.className}>Schools</h2>
			<p></p>
			<button
				type="submit"
				className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
			>
				Contact me
			</button>
		</section>
	);
}
