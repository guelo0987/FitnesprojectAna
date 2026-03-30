/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fit-green': '#A3E635',
        'fit-green-dark': '#84CC16',
        'fit-black': '#111111',
        'fit-gray': '#6B7280',
        'fit-light': '#F9FAFB',
        'fit-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
