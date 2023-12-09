import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brown: '#593122',
        brownLight: '#8C5B3F',
        secondary : '#436073',
        accent: '#BF9169',
        black: '#0A0B0D',
        grayLight: '#eae7de',
        gray: '#88898C',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
