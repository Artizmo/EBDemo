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
      'light-gray': '#f9f9f9',
      gray: '#b2b2b2',
      black: '#363232'
    },
    screens: {
      sm: [{
        min: '650px',
        max: '767px',
      }, 
      { 
        min: '650px'
      }],
      md: [{
        min: '768px',
        max: '1023px'
      }, {
        min: '768px'
      }],
      lg: [{
        min: '1024px',
        max: '1279px'
      }, {
        min: '1024px'
      }],
      xl: [{
        min: '1280px',
        max: '1535px'
      }, {
        min: '1280px'
      }],
      '2xl': {
        min: '1536px'
      }
    }
  },
  plugins: []
};
export default config;