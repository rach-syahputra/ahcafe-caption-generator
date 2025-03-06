/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffc300',
        'primary-hover': '#ffd60a',
        'dark-primary': '#202020'
      },
      screens: {
        xs: '450px'
      }
    }
  },
  plugins: []
}
