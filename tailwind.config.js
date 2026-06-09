/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Space Grotesk',
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
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--brand)',
          light: 'var(--brand)',
          dark: 'var(--brand-strong)',
        },
        secondary: {
          DEFAULT: 'var(--accent)',
          light: 'var(--bg-elevated)',
          dark: 'var(--border)',
        },
      },
    },
  },
  plugins: [],
};
