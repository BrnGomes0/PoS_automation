/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppinsFont': ["Poppins", "sans-serif"]
      },
      fontWeight: {
        'mediumBold': 510
      }
    },
  },
  plugins: [],
}

