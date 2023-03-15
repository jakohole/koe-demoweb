/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Thai', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'keen': "https://content.keenprofile.com/wp-content/uploads/2020/05/exp_bg5.jpg"
      }),
      backgroundOpacity: {
        '50': '0.5',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
