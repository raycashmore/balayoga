import BannerImage from '@/app/_components/banner-image';
import Logo from '@/app/_components/logo';

export function Hero() {
	return (
		<header className="relative">
			<BannerImage imgSrc="/IMG_3676.webp" />
			<div className="absolute top-[15%] left-1/2 w-full max-w-[1000px] -translate-x-1/2 transform lg:px-8">
				<Logo className="h-40 w-auto pl-16 md:h-60 lg:h-72" />
			</div>
		</header>
	);
}
