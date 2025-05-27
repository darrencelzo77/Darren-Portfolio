/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#4a4e69',
          light: '#5c6080',
          dark: '#3e3b50',
        },
        secondary: {
          DEFAULT: '#f2e9e4',
          light: '#faf7f5',
          dark: '#e0d7d2',
        },
      },
    },
  },
  plugins: [],
};
