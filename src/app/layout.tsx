import "@/styles/globals.css";
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

				<header className="absolute left-16 top-16">
					<Link href="/">
						<h1 className="bg-bala-purple px-4 py-2 text-5xl font-extralight text-white lg:bg-transparent lg:p-0">BALA YOGA</h1>
					</Link>
				</header>

				<div
					className="absolute left-[-75%] top-[-75%] -z-10 block h-[150dvh] w-[150dvw] rounded-full"
					style={{
						background: "radial-gradient(circle at 50% 50%, rgba(116, 196, 246, 0.7), rgba(116, 196, 246, 0) 60%)",
					}}
				></div>
			</body>
		</html>
	);
}
