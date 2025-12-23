import { Baloo_Paaji_2, DM_Serif_Text, Libre_Franklin } from 'next/font/google';

const bodyFont = Libre_Franklin({ subsets: ['latin'] });

const headerFont = DM_Serif_Text({
	subsets: ['latin'],
	variable: '--font-heading',
	weight: '400'
});

const logoFont = Baloo_Paaji_2({
	subsets: ['latin'],
	variable: '--font-logo',
	weight: '400',
	display: 'swap'
});

export { bodyFont, headerFont, logoFont };
