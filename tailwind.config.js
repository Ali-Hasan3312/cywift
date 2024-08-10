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

      },
      gridTemplateColumns: {
        'custom': 'minmax(2rem, 14%) 1fr',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

