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
        brandDark: '#0B132B',
        brandCard: '#1C2541',
        brandAccent: '#FF6B00',
        brandBlue: '#3A86FF',
      },
    },
  },
  plugins: [],
}