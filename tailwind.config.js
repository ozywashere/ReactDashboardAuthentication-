/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#090e34',
        primary: '#4a6cf7',
        body: '#959cb1',
        dark1: '#1d2144',
      },
    },
  },
  plugins: [],
};
