import "@/styles/globals.css";
import { bodyFont } from "@/styles/fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
	title: "Bala Yoga",
	description: "Mindfulness and Wellbeing",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" className={bodyFont.className}>
			<GoogleTagManager gtmId="GTM-TMJ3SHG6" />
			<body className="relative">{children}</body>
		</html>
	);
}
