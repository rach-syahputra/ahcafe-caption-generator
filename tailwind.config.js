/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffc300',
        'dark-primary': '#0A0A0A',
        'gray-primary': '#71717A'
      },
      screens: {
        xs: '450px'
      }
    }
  },
  plugins: []
}
