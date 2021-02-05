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
      boxShadow: {
        small: '0px 2px 4px rgba(57, 61, 69, 0.06)',
      },
      margin: {
        '22px': '22px',
      },
      padding: {
        '8px': '8px',
      },
      width: {
        '30px': '30px',
        '286px': '286px',
        '338px': '338px',
      },
      height: {
        '60px': '60px',
        '76px': '76px',
      },
      backgroundImage: {
        sun: "url('/src/img/light.png')",
        moon: "url('/src/img/dark.png')",
      },
      backgroundPosition: {
       'bottom-dark': 'center bottom 8px',
       'top-light': 'center top 8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
