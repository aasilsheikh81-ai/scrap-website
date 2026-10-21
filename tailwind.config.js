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
          green: '#087A45', // Primary brand color: Forest green
          darkgreen: '#075D37', // Dark green accent
          lightgreen: '#EAF8EF', // Light green sections
          orange: '#FF8717', // Secondary accent: Orange
          lightorange: '#FFF3E5', // Light orange highlights
          navy: '#101C32', // Main headings: Deep navy
          slate: '#667085', // Body text: Slate gray
          border: '#E5E7EB', // Borders and dividers
          offwhite: '#F9FAFB',
          white: '#FFFFFF',
          whatsapp: '#25D366',

          // Compatibility aliases
          black: '#101C32',
          charcoal: '#17243B',
          surface: '#F8FAFC',
          muted: '#667085',
          subtle: '#475467',
          red: '#087A45',
          darkred: '#075D37',
          accent: '#FF8717',
        }
      }
    },
  },
  plugins: [],
}
