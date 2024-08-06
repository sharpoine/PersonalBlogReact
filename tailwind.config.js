/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        architechs: ['Architects Daughter', 'sans-serif']
      }, gridTemplateColumns: {
        // Özel grid-template-columns sınıfı
        '.75fr': '0.75fr',
        'custom': '0.25fr 0.75fr',
      },
    },

  },
  plugins: [],
}

