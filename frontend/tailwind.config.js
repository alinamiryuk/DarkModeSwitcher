module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: {
          100: '#f4f4f5',
        },
        'true-gray': {
          400: '#a3a3a3',
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
      borderRadius: {
        sm: '8px',
        lg: '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
