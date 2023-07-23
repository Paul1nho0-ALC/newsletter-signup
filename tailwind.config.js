/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        dark: 'hsl(234, 29%, 20%)',
        medium: 'hsl(235, 18%, 26%)',
        light: 'hsl(231, 7%, 60%)',
      },
    },
  },
  plugins: [],
}
