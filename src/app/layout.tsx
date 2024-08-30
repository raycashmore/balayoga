import "@/styles/globals.css";

import { Manrope } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Bala Yoga",
	description: "Mindfulness and Wellbeing",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={font.className}>
			<body className="text-white">
				<header className="absolute left-16 top-16">
					<h1 className="text-4xl">BALA YOGA</h1>
				</header>

				{children}

				<div
					className="absolute left-[-75%] top-[-75%] -z-10 block h-[150vh] w-[150vw] rounded-full"
					style={{
						background: "radial-gradient(circle at 50% 50%, rgba(116, 196, 246, 0.7), rgba(116, 196, 246, 0) 60%)",
					}}
				></div>
			</body>
		</html>
	);
}
