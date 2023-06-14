/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-gradient':
          'linear-gradient(92.46deg, #FF8A29 31.2%, #CF5D00 71.97%)',
        'linear-gradient-button':
          'linear-gradient(122.71deg, #F99500 53.34%, #FFCD29 133.06%)',
        'linear-gradient-banner':
          'linear-gradient(175.96deg, #F57002 3.3%, rgba(245, 112, 2, 0) 56.06%)',
      },
      colors: {
        white: '#FFFFFF',
        black: {
          400: '#383838',
          800: '#121212',
        },
        orange: {
          500: '#F57002',
          600: '#CF5D00',
        },
      },
      dropShadow: {
        sm: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
