/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c72963',
        'primary-hover': '#da4078',
        secondary: '#D63AF9',
        purple: {
          light: '#A855F7',
          DEFAULT: '#9333EA',
          dark: '#7C3AED',
        },
        blue: {
          light: '#00bfe7',
          DEFAULT: '#0366d6',
          dark: '#0B132B',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #9333EA 0%, #7C3AED 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0B132B 0%, #1C2541 100%)',
      },
    },
  },
  plugins: [],
}
