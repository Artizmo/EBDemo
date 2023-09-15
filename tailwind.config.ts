import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx,svg}'
  ],
  theme: {
    colors: {
      red: '#ce0e2d',
      green: '#bed600',
      teal: '#0099A8',
      white: '#f3f3f3',
      'light-gray': '#f9f9f9',
      gray: '#b2b2b2',
      black: '#363232'
    }
  },
  plugins: []
};
export default config;