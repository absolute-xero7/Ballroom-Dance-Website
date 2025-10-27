/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B4A6B', // Navy blue from the image
          light: '#4F5F80',
          dark: '#2A3A5B'
        },
        secondary: {
          DEFAULT: '#F5F2E9', // Cream background from the image
          dark: '#E8E4D8'
        },
        accent: {
          DEFAULT: '#A67C52', // Brown accent for buttons and highlights
          dark: '#8A6642'
        },
        dancer: {
          light: '#F5EFE5', // Light beige for dancer's light suit
          dark: '#4A2D29'  // Dark brown for dancer's dress
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/images/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}