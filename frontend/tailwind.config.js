module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f4f4f5',
        },
        'true-gray': {
          400: '#e5e5e5',
          800: '#262626',
          900: '#171717',
        },
        'cool-gray': {
          200: '#e5e7eb',
        },
        blue: {
          600: '#2563eb',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
