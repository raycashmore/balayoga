import Logo from "@/app/logo";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-[#5EDDE6] text-white">
			<div
				className="fixed bottom-0 left-0 right-0 top-0"
				style={{
					backgroundColor: "hsla(183,73%,63%,.2)",
					backgroundImage:
						"radial-gradient(at 43% 68%, hsla(37,74%,71%,1) 0px, transparent 50%)," +
						"radial-gradient(at 0% 49%, hsla(205,79%,69%,1) 0px, transparent 50%)," +
						"radial-gradient(at 91% 12%, hsla(219,69%,69%,1) 0px, transparent 50%)," +
						"radial-gradient(at 66% 88%, hsla(10,95%,69%,1) 0px, transparent 50%)," +
						"radial-gradient(at 80% 50%, hsla(37,62%,76%,1) 0px, transparent 50%)," +
						"radial-gradient(at 88% 62%, hsla(213,81%,64%,1) 0px, transparent 50%)," +
						"radial-gradient(at 72% 82%, hsla(203,88%,71%,1) 0px, transparent 50%)",
				}}
			></div>

			<div className="container z-10 flex h-3/4 flex-col items-center justify-center gap-32 px-4 py-16">
				<Logo />
			</div>

			<div className="rad z-10 h-screen w-3/4 rounded-2xl bg-white opacity-80">
				<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
					Bala <span className="text-[hsl(280,100%,70%)]">Yoga</span>
				</h1>
			</div>
		</main>
	);
}
