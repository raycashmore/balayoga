import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				// Make CSS variables available as Tailwind classes
				white: 'var(--color-white)',
				black: 'var(--color-black)',
				'bala-purple-light': 'var(--color-bala-purple-light)',
				'bala-purple': 'var(--color-bala-purple)',
				'bala-purple-dark': 'var(--color-bala-purple-dark)',
				'bala-blue': 'var(--color-bala-blue)',
				'button-primary': 'var(--color-button-primary)'
			}
		}
	},
	plugins: []
} satisfies Config;
