/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:
      {
        'newcol':'#1E1A1A',
      }
    },
  },
  plugins: [


    require('flowbite/plugin')


  ],
}