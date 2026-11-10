import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:   { DEFAULT: '#142B43', dark: '#0D1F33' },
        ivory:  '#F6F4EF',
        gold:   { DEFAULT: '#B99A64', light: '#D4B887', dark: '#8F7549' },
        ink:    '#20252B',
        muted:  '#747B83',
        forest: '#294B3B',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        fa:   ['Tahoma', 'Arial', 'sans-serif'],
        ar:   ['Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 60px -15px rgba(20, 43, 67, 0.15)',
        gold:   '0 8px 30px -10px rgba(185, 154, 100, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-15px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
