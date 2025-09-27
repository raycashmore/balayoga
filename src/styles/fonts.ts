import { DM_Serif_Text, Libre_Franklin } from 'next/font/google';

const bodyFont = Libre_Franklin({ subsets: ['latin'] });

const headerFont = DM_Serif_Text({
	subsets: ['latin'],
	variable: '--font-heading',
	weight: '400'
});

export { bodyFont, headerFont };
