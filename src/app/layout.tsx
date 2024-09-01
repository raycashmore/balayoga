import "@/styles/globals.css";
import Facebook from "@/app/_components/facebook";
import Instagram from "@/app/_components/instagram";
import Logo from "@/app/_components/logo";
import { type Metadata } from "next";

import { Manrope } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Bala Yoga",
	description: "Mindfulness and Wellbeing",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={font.className}>
			<body>
				<div className="flex min-h-dvh flex-col lg:flex-row-reverse">{children}</div>

				<header className="lg:flex-grow-1 absolute left-8 top-8 flex flex-1 items-center justify-between lg:left-0 lg:top-0 lg:w-1/2 lg:px-16 lg:py-8">
					<Link href="/" className="bg-bala-purple px-4 py-2 text-white lg:bg-transparent lg:p-0">
						<h1 className="text-5xl font-extralight">BALA YOGA</h1>
						<div className="font-extralight tracking-widest">MINDFULNESS & WELLBEING</div>
					</Link>
					<div className="hidden text-white lg:block">
						<Logo />
					</div>
				</header>

				<div className="absolute bottom-0 flex gap-2 p-8 lg:px-16 lg:py-8">
					<a href="https://www.facebook.com/balayogamindfulnessandwellbeing">
						<Facebook />
					</a>
					<a href="https://www.instagram.com/balayoga_mindfulnesswellbeing">
						<Instagram />
					</a>
				</div>

				<div className="absolute left-0 top-0 -z-10 block h-[100dvh] w-[100dvw] overflow-visible rounded-full">
					<div
						className="absolute left-[-100%] top-[-80%] -z-10 block h-[200dvh] w-[200dvw] overflow-visible rounded-full lg:top-[-100%]"
						style={{
							background: "radial-gradient(circle at 50% 50%, rgba(116, 196, 246, 0.7), rgba(116, 196, 246, 0) 60%)",
						}}
					/>
				</div>
			</body>
		</html>
	);
}
