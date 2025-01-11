import Logo from "@/app/_components/logo";
import Link from "next/link";

export default function Title() {
	return (
		<Link href="/" className="text-white">
			<Logo />
		</Link>
	);
}
