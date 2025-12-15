/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'feria-blue': '#0B2F55', // Updated to match user reference
        'feria-accent': '#cda434', // Gold
        'feria-vibrant-pink': '#ec4899',
        'feria-vibrant-orange': '#f97316',
        'feria-vibrant-green': '#22c55e',
        'feria-vibrant-purple': '#a855f7',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
