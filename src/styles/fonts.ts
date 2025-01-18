import { DM_Serif_Text, Inter } from "next/font/google";

const bodyFont = Inter({ subsets: ["latin"] });

const headerFont = DM_Serif_Text({
	subsets: ["latin"],
	variable: "--font-heading",
	weight: "400",
});

export { bodyFont, headerFont };
