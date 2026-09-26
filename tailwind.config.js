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
        brand: { orange: '#DF7D23', 'orange-light': '#F2A03A', 'orange-deep': '#A94F14', blue: '#142850', 'blue-deep': '#0D1B3A', 'blue-mid': '#1B3567', anthracite: '#1F2430', 'anthracite-2': '#2B303C', surface: '#F1F3F6', line: '#DDE1E8' },
      },
    },
  },
  plugins: [],
}