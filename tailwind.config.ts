/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
      },
      colors: {
        background: '#0f172a',
        accent: {
          yellow: '#facc15',
          green: '#10b981',
          blue: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}
