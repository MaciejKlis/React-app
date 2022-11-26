/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'nav-bg': '#53525254',
      'sidebar-bg': '#00000026',
      'primary': 'rgba(63, 63, 63, 0.25)',
      'bor-primary': 'rgb(21, 21, 21)' //border primry
    },
    extend: {},
  },
  plugins: [],
}
