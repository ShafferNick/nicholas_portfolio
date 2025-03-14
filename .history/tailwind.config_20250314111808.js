/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // This covers all files in src, including src/app and src/app/components
  ],
  theme: {
    screens: {
      'md': '768px', // Keep the md breakpoint as defined
    },
  },
  plugins: [],
};