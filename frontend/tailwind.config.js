/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c7fc',
          400: '#809df9',
          500: '#4d74f6',
          600: '#3a5bed',
          700: '#2e48db',
          800: '#2a3cb2',
          900: '#27358d',
        },
        secondary: {
          50: '#f5f5f6',
          100: '#e6e6e8',
          200: '#cdced2',
          300: '#a9acb3',
          400: '#7d818c',
          500: '#636772',
          600: '#4d505a',
          700: '#3e414a',
          800: '#35373e',
          900: '#303136',
        },
        accent: {
          50: '#fdf3f3',
          100: '#fbe8e8',
          200: '#f9d4d4',
          300: '#f4b4b4',
          400: '#ed8888',
          500: '#e35d5d',
          600: '#d13a3a',
          700: '#af2f2f',
          800: '#912a2a',
          900: '#792828',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}