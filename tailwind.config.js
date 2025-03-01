/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sigma: ['sigma']
      },
      colors: {
        bg: '#2B4172',
        pinky: '#E57CD8',
        button_color: '#564260'
      },
      screens: {
        'ts': '480px'
    },
    },
  },
  plugins: [],
}

