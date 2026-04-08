/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#000022',
          cta: '#FF00AA',
          accent: '#0000FF',
        },
      },
    },
  },
  plugins: [],
}
