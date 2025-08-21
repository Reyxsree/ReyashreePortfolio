/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Zine', 'cursive'], // Add your custom font
        script: ['Mr Scripton', 'cursive'],
      },
      boxShadow: {
        text: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Custom text shadow
      },
    },
  },
  plugins: [],
}

