import Link from "next/link";

export default function Title() {
	return (
		<Link href="/" className="bg-bala-purple px-4 py-2 text-white lg:bg-transparent lg:p-0">
			<h1 className="text-5xl font-extralight">BALA YOGA</h1>
			<div className="font-extralight tracking-widest">MINDFULNESS & WELLBEING</div>
		</Link>
	);
}
