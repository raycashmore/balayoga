import '@/styles/globals.css';
import { Nav } from '@/payload/globals/nav/Nav';
import { bodyFont } from '@/styles/fonts';
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { type Metadata } from 'next';
import { type ReactNode } from 'react';

const isProd = process.env.VERCEL_ENV === 'production';

export const metadata: Metadata = {
	title: 'Bala Yoga',
	description: 'Mindfulness and Wellbeing',
	icons: [{ rel: 'icon', url: '/favicon.png' }]
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" className={bodyFont.className}>
			{isProd && <GoogleTagManager gtmId="GTM-TMJ3SHG6" />}
			<body className="relative">
				<Nav />
				{children}
				{isProd && <Analytics />}
			</body>
		</html>
	);
}
