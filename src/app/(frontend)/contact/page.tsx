import { ContactCard } from '@/app/_components/contact-card';
import { Socials } from '@/app/_components/socials';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Contact'
};

export default function Page() {
	return (
		<div className="flex min-h-dvh w-[calc(100%-16px)] max-w-[480px] flex-col items-center justify-center pt-24 pb-8 lg:pt-[98px]">
			<ContactCard />
			<Socials />
		</div>
	);
}
