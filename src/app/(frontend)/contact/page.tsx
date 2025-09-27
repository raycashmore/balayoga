import { ContactCard } from '@/app/_components/contact-card';

export default function Page() {
	return (
		<div className="flex h-screen items-center justify-center">
			<ContactCard visible={true} />
		</div>
	);
}
