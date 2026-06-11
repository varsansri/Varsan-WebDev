/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pumpkin: '#fe7f2d',
        charcoal: '#233d4d',
        ink: '#0d1b24',
        cream: '#fdf6ec',
        sunglow: '#ffca3a',
        mist: '#d7e2ea',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
