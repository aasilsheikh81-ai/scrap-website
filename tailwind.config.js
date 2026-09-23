/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0A0A0A',
          charcoal: '#171717',
          offwhite: '#FAFAFA',
          red: '#DC2626',
          darkred: '#991B1B',
          accent: '#EA580C', // Amber/Orange accent
          muted: '#737373', // Muted text
        }
      }
    },
  },
  plugins: [],
}
