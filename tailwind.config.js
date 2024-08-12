export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this matches your file structure
  ],
  theme: {
    extend: {
      colors: {
        'persian-blue': '#1c1c6c',
        'light-blue': '#add8e6',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #1c1c6c, #add8e6)',
      },
    },
  },
  plugins: [],
};
