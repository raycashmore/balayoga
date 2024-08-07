import Logo from "@/app/logo";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-[#5EDDE6] text-white">
			<div className="fixed bottom-0 left-0 right-0 top-0" style={{ filter: "blur(40px)" }}>
				<div
					className="absolute bottom-0 right-0 block h-[120vw] w-[120vw] rounded-full"
					style={{
						backgroundImage:
							"radial-gradient(circle farthest-corner at 50% 50%, rgba(141, 86, 255, 1), rgba(141, 86, 255, 0) 60%)",
					}}
				></div>
				<div
					className="absolute left-0 top-0 block h-[120vw] w-[120vw] rounded-full"
					style={{
						backgroundImage:
							"radial-gradient(circle farthest-corner at 50% 50%, rgba(141, 86, 255, 1), rgba(141, 86, 255, 0) 60%)",
					}}
				></div>
			</div>

			<div className="container z-10 flex flex-col items-center justify-center gap-12 px-4 py-16">
				<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
					<Logo /> Bala <span className="text-[hsl(280,100%,70%)]">Yoga</span>
				</h1>
			</div>

			<div className="rad z-10 h-screen w-3/4 rounded-2xl bg-white opacity-60">Lorem ipsum</div>
		</main>
	);
}
