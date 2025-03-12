module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all files in src/ for Tailwind classes
  ],
  theme: {
    extend: {
      width: {
        '15': '60px', // Custom width for 60px (Prosci)
      },
      height: {
        '15': '60px', // Custom height for 60px (Prosci)
      },
    },
  },
  plugins: [],
};