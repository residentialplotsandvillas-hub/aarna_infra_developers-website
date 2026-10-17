import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand:    { DEFAULT: '#800000', dark: '#5c0000' },  // maroon
        accent:   { DEFAULT: '#ffff00', dark: '#e0e000' },  // yellow
        ink:      '#000000',
        body:     '#333333',
        light:    '#FCFCFD',
        muted:    '#adadad',
      },
      fontFamily: {
        sans:    ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        btn: 'rgba(45,35,66,.4) 0 2px 4px, rgba(45,35,66,.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset',
        card: '0 4px 30px rgba(0,0,0,.1)',
      },
      keyframes: {
        slideInText: { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(-5px)' } },
        blink:       { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.1)' } },
      },
      animation: {
        'slide-in-text': 'slideInText 1s ease infinite alternate',
        'blink':         'blink 1.5s infinite',
      },
    },
  },
  plugins: [],
};

export default config;