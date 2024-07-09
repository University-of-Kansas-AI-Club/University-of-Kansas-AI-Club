/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          DEFAULT: '#4169E1',
          dark: '#003366',
          deep: '#002366',
          bright: '#4169E1',
          azure: '#0038A8',
          medium: '#3F00FF',
          pastel: '#7393B3',
          electric: '#3F00FF',
          soft: '#5A7FC8',
          pale: '#9AB6D3',
        },
        crimson: {
          DEFAULT: '#990000',
          dark: '#8B0000',
          deep: '#DC143C',
          light: '#F56991',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'focus'],
    },
  },
  plugins: [],
}
