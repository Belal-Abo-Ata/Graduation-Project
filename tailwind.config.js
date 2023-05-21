/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffffff',
          100: '#cde2f6',
          200: '#9ac5ed',
          300: '#68a7e5',
          400: '#358adc',
          500: '#036dd3',
          600: '#0257a9',
          700: '#02417f',
          800: '#012c54',
          900: '#01162a',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      transitionProperty: {
        'max-h': 'max-height',
      },
      animation: {
        'ping-once': 'ping 0.6s alternate',
      },
    },
  },
  plugins: [],
};
