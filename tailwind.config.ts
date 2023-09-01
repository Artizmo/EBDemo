import type { Config } from 'tailwindcss';

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
      'light-gray': '#b2b2b2',
      black: '#363232'
    }
  },
  plugins: []
};
export default config;