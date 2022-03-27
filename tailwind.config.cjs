const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'neutral': {
				100: '#FFFDFA',
				300: '#F5F3FF',
				600: '#475569',
				900: '#0F172A',
			},
			'accent': '#7C3AED',
			'secondary': '#75E3EA',
			'accent-dark': '#6225cc',
			'accent-light': '#c5a3ff',
		},
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
		},
		letterSpacing: {
			large: '0.2em'
		},
		screens: {
			'xs': '425px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontSize: {
				'5xl': ['2.75rem', '1'],
			},
			maxHeight: {
				'100': '32rem',
				'104': '36rem',
			}
		}
	},

	plugins: []
};

module.exports = config;
