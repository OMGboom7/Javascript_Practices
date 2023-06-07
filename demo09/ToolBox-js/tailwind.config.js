/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		colors: {
			transparent: 'transparent',
			'blue': '#1fb6ff',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#273444',
			'gray': '#8492a6',
			'gray-light': '#d3dce6',
			'black': '#000',
			'white': '#fff',
			'midnight': '#121063',
			'metal': '#565584',
			'tahiti': {
				100: '#cffafe',
				200: '#a5f3fc',
				300: '#67e8f9',
				400: '#22d3ee',
				500: '#06b6d4',
				600: '#0891b2',
				700: '#0e7490',
				800: '#155e75',
				900: '#164e63',
			},
			'silver': '#ecebff',
			'bubble-gum': '#ff77e9',
			'bermuda': '#78dcca',
			'brown': {
				50: '#fdf8f6',
				100: '#f2e8e5',
				200: '#eaddd7',
				300: '#e0cec7',
				400: '#d2bab0',
				500: '#bfa094',
				600: '#a18072',
				700: '#977669',
				800: '#846358',
				900: '#43302b',
			},
		},
		spacing: {
			px: '1px',
			0: '0',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem',
		},
		screens: {
			'sm': '640px', 'md': '768px', 'lg': '1024px', 'xl': '1280px', '2xl': '1536px', '3xl': '1600px',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		borderRadius: {
			'none': '0', 'sm': '.125rem',
			DEFAULT: '.25rem', 'lg': '.5rem', 'full': '9999px',
		},
		extend: {
			spacing: {
				'8xl': '96rem', '9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		},
		opacity: {
			'0': '0', '20': '0.2', '40': '0.4', '60': '0.6', '80': '0.8', '100': '1',
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('tailwindcss-children'),
	],
}
