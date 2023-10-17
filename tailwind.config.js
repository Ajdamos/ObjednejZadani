/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        's': '400px',
        'm': '700px',
        'l': '1280px'
      },
      
      extend: {},
  },
  plugins: [],
}

