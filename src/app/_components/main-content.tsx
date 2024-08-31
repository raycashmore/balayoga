import { type ReactNode } from "react";

export default function MainContent({ children }: { children: ReactNode }) {
	return (
		<main className="lg:flex-grow-1 flex flex-1 flex-col px-16 pt-8 lg:w-1/2 lg:justify-center">
			<div className="flex flex-col text-3xl font-extralight">{children}</div>
		</main>
	);
}
