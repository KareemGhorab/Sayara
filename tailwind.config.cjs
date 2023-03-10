/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					300: '#F32827',
					500: '#c51a19',
				},
			},
			fontFamily: {
				sayara: ['var(--font-sayara)'],
			},
			fontSize: {
				'10xl': '10rem',
			},
		},
	},
	plugins: [],
}
