/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
    },
  },
  plugins: [],
}