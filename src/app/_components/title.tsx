import Logo from "@/app/_components/logo";
import Link from "next/link";

export default function Title() {
	return (
		<header className="lg:flex-grow-1 absolute left-8 top-8 flex lg:relative lg:left-0 lg:top-0 lg:justify-between">
			<Link href="/" className="bg-bala-purple px-4 py-2 text-white lg:bg-transparent lg:p-0">
				<h1 className="text-5xl font-extralight">BALA YOGA</h1>
				<div className="font-extralight tracking-widest">MINDFULNESS & WELLBEING</div>
			</Link>
			<div className="hidden text-white lg:block">
				<Logo />
			</div>
		</header>
	);
}
