import { ContactCard } from '@/app/_components/contact-card';
import Socials from '@/app/_components/socials';

export default function Page() {
	return (
		<div className="flex h-screen flex-col items-center justify-center py-4 pt-16 lg:py-16">
			<ContactCard visible={true} />
			<Socials />
		</div>
	);
}
