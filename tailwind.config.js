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
          blue: '#00bcd4',
          dark: '#0097a7',
          light: '#80deea',
        },
        gradient: {
          start: '#00bcd4',
          end: '#009688',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00bcd4, 0 0 10px #00bcd4' },
          '100%': { boxShadow: '0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4' },
        },
      },
    },
  },
  plugins: [],
}

