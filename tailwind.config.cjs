/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-black': '#22272c',
        'primary-light': '#fffefd',
        'secondary-light': '#f6f6f6',
        'primary-gray': '#9f9f9f',
        'solid-gray': '#e4e4e7',
      }
    },
  },
  plugins: []
};
