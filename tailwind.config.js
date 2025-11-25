/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nua: {
          green: {
            dark: '#2E5C38',
            light: '#A3C940',
          },
          brown: '#966F46',
          blue: '#7FB5D3',
          cream: '#F5F2E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
