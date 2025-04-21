/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B46C1',
          dark: '#553C9A',
          light: '#9F7AEA',
        },
        secondary: {
          DEFAULT: '#D53F8C',
          dark: '#B83280',
          light: '#ED64A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};