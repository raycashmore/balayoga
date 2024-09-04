import Header from "@/app/_components/header";
import Socials from "@/app/_components/socials";
import { type ReactNode } from "react";

export default function MainContent({ children }: { children: ReactNode }) {
	return (
		<main className="lg:flex-grow-1 flex flex-1 flex-col gap-8 px-8 py-8 pt-8 lg:w-1/2 lg:px-16">
			<Header />
			<div className="flex flex-1 flex-col justify-between gap-8">
				<div className="flex flex-1 flex-col gap-4">{children}</div>
				<Socials />
			</div>
		</main>
	);
}
