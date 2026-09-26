/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Sora', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brandDark: '#0A2A33',
        brandCard: '#123E4A',
        brandAccent: '#FFB020',
        brandBlue: '#3A86FF',
        ivory: '#FAF6EE',
        ink: '#0A2A33',
        gold: '#FFB020',
      },
    },
  },
  plugins: [],
}