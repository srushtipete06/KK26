/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          bg: '#FDFBF7',      // Warm ivory-beige page background
          card: '#F4EFE6',    // Soft sand-beige boxes
          border: '#E5DCCB',  // Warm border lines
        },
        brown: {
          dark: '#2B1E16',    // Deep Espresso Brown
          medium: '#5C4638',  // Coffee Brown text
          accent: '#8C6239',  // Caramel Brown buttons
        }
      }
    },
  },
  plugins: [],
}