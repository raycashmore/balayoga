import "@/styles/globals.css";
import Glow from "@/app/_components/glow";
import { type Metadata } from "next";

import { Manrope } from "next/font/google";
import { type ReactNode } from "react";

export const metadata: Metadata = {
	title: "Bala Yoga",
	description: "Mindfulness and Wellbeing",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" className={font.className}>
			<body>
				<div className="flex min-h-dvh flex-col lg:flex-row-reverse">{children}</div>
				<Glow />
			</body>
		</html>
	);
}
