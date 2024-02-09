/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rhino: {
          50: '#f4f7fa',
          100: '#e6ebf3',
          200: '#d3dbea',
          300: '#b4c4dc',
          400: '#90a6ca',
          500: '#758bbc',
          600: '#6375ad',
          700: '#57659e',
          800: '#4b5482',
          900: '#3a415f',
          950: '#2a2d41',
        },
      },
      fontFamily: {
        extra: ['WaitingfortheSunrise'],
        extra2: ['Open-Sans'],
      },
      screens: {
        mdplus: '876px',
      },
      boxShadow: {
        extra: '0px 0 4px 2px rgba(0,0,0,0.15)',
        extra_link: '6px 0 2px -4px rgba(0,0,0,0.15)',
      },
    },
  },
  safelist: [
    'delay-[25ms]',
    'delay-[50ms]',
    'delay-[75ms]',
    'delay-[100ms]',
    'delay-[125ms]',
    'delay-[150ms]',
    'delay-[175ms]',
    'shadow-extra',
  ],
  plugins: [],
};
