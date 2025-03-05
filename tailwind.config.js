/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8800',
        'primary-hover': '#ff961f',
        'dark-primary': '#222222'
      },
      screens: {
        xs: '450px'
      }
    }
  },
  plugins: []
}
