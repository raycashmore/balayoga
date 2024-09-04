import Logo from "@/app/_components/logo";
import Title from "@/app/_components/title";

export default function Header() {
	return (
		<header className="lg:flex-grow-1 absolute left-8 top-8 hidden lg:relative lg:left-0 lg:top-0 lg:flex lg:justify-between">
			<Title />
			<div className="hidden text-white lg:block">
				<Logo />
			</div>
		</header>
	);
}
