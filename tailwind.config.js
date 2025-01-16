/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'text': 'shine 5s linear infinite',
      },
      keyframes: {
        shine: {
          'to': {
            'background-position': '200% center',
          },
        },
      },
    },
  },
  plugins: [],
};