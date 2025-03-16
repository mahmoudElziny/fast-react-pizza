/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'monospace']
    },
    height: {
      screen: '100dvh'
    },
    extend: {},
  },
  plugins: [],
}