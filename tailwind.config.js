/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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