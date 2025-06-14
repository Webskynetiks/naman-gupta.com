/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...fontFamily.sans], // Add Roboto font
        poppins: ['Poppins', ...fontFamily.sans], // Add Poppins font
      },
      colors: {
        primary: '#32064A',
        orange: '#e66a1f',
        lightpink: '#e42a69',
        secondary: '#1F2937',
        accent: '#3B82F6',
        muted: '#9CA3AF',
      },
      screens: {
        xl1100: '1100px',
      },
    },
  },
  plugins: [],
};
