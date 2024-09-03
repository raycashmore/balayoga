import Back from "@/app/_components/back";
import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";
import ContactForm from "@/app/contact/contact-form";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3563.webp" />
			<MainContent>
				<Back />
				<ContactForm />
			</MainContent>
		</>
	);
}
