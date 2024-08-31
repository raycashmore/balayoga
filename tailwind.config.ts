import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				"bala-purple": "#5137AC",
				"bala-blue": "#74C4F6",
			},
		},
	},
	plugins: [],
} satisfies Config;
