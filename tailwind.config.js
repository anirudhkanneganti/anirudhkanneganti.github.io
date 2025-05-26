/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f7a3d",         // Deep sustainable green
        secondary: "#e3fcec",       // Pastel light green
        leaf: "#87d68d",            // More greenery
        night: "#263238",           // Gentle dark mode
        sunlight: "#f6ffe7",        // Light background
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
