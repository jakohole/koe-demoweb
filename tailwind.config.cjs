/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'ibm-plex-sans-Thai': ['IBM Plex Sans Thai', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
