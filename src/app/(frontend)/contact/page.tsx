import { ContactCard } from '@/app/_components/contact-card';

export default function Page() {
	return (
		<div className="flex h-screen items-center justify-center py-16">
			<ContactCard visible={true} />
		</div>
	);
}
