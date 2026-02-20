import { ContactCard } from '@/app/_components/contact-card';
import Socials from '@/app/_components/socials';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Contact'
};

export default function Page() {
	return (
		<div className="flex h-screen min-w-[300px] w-full max-w-[600px] flex-col items-center justify-center px-2 py-4 pt-16 sm:px-4 lg:py-16">
			<ContactCard visible={true} />
			<Socials />
		</div>
	);
}
