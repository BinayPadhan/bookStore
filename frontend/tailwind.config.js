/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkTheme: '#021526',
        navTheme: '#17153B',
        lightViolet:'#CF9FFF'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}