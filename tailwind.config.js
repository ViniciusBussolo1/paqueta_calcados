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
        'linear-gradient-header':
          'linear-gradient(92.46deg, #FF8A29 31.2%, #CF5D00 71.97%)',
      },
      colors: {
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
