import Back from "@/app/_components/back";
import Link from "next/link";

export default function Nav() {
	return (
		<Link href="/" className="py-4 text-xl text-white">
			<Back />
		</Link>
	);
}
