import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        minsk: {
          '50': '#eef2ff',
          '100': '#e1e8fe',
          '200': '#c8d4fd',
          '300': '#a7b7fa',
          '400': '#8391f6',
          '500': '#666cee',
          '600': '#4f49e2',
          '700': '#433bc7',
          '800': '#3632a1',
          '900': '#2e2d78',
          '950': '#1e1c4a',
        },
        'curious-blue': {
          '50': '#f2f9fd',
          '100': '#e3f1fb',
          '200': '#c2e3f5',
          '300': '#8bcdee',
          '400': '#4eb3e2',
          '500': '#299fd7',
          '600': '#187bb1',
          '700': '#15638f',
          '800': '#155477',
          '900': '#174663',
          '950': '#0f2d42',
        },
      },
    },
  },
  plugins: [],
};
export default withMT(config);
