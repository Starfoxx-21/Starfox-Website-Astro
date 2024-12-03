/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: '#3e3252',
				secondary: '#efefef',
				darkpurple: '#6d588f',
				pink: {
					light: '#d5a7c0',
					dark: '#bf84a7'
				}
			},
		},
	},
	plugins: [],
}