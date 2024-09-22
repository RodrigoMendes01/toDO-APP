import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				"blue-gradient": "linear-gradient(to right, #0796D3, #53C0F0)",
				"red-gradient": "linear-gradient(to right, #D30707, #F05353)"
			},
			colors: {
				main: "#FFFFFF",
				black: "#000000",
				hover: "#F7F9FD",
				warn: "#dc2626"
			},
		},
	},
	plugins: [],
}
export default config;
