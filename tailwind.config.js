/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Define un breakpoint "xs" para pantallas extremadamente pequeñas
      },
      textColor: {
        'custom-orange': 'rgb(255, 181, 0)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

