/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#C44FEB',
      },
      fontFamily: {
        sans: ['NotoSans-Medium', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
