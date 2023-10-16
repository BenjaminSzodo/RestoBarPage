/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'custom-orange': 'rgb(255, 181, 0)',
      },
    },
  },
  plugins: [],
}

