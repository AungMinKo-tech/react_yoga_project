/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'beau-rivage': ['Beau Rivage', 'cursive'],
        'jost': ['Jost', 'sans-serif'],
      },
      colors: {
        primary: '#1D3408',
        'primary-dark': '#7C3AED',
        secondary: '#FB7D5B',
        accent: '#10B981',
        tertiary: '#FCC43E',
        quatinery: '#4D7E20',
        danger: '#FF4550',
      },
    },
  },
  plugins: [],
}
