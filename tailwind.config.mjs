/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {

				/**
			 	* Color Palette - Team Colors
			 	*/
				'scarlett': '#E41C38',
				'cream': '#FDF2D9',
				'baby-blue': '#7BAFD4',
				'purple': '#461D7C',
				'tiger-gold': '#FDD023',
				'royal': '#004687',
				'gold': '#BD9B60',
				'nautical-blue': '#002244',
				'patriot-red': '#C60C30',
				'century-silver': '#B0B7BC',
				'midnight-blue': '#0C2340',
				'lake-blue': '#236192',
				'moonlight': '#9EA2A2',
				'aurora-green': '#78BE20',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
