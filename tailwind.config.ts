import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'moderate-violet': '#733FC8',
        'dark-grayish-blue': '#48556A',
        'dark-blackish-blue': '#19202D',
        'light-gray': '#CFCFCF',
        'light-grayish-blue': '#ECF2F8',
      },
      fontFamily: {
        barlowSemiCondensed: ['var(--font-barlow-semi-condensed)'],
      },
    },
  },
  plugins: [],
};
export default config;
