/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#78e346',
        'custom-red': '#f70c0c',
        'custom-yellow': '#f3f70c',

      }
    },
  },
  plugins: [],
}

