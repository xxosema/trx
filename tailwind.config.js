/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trx-red': '#ff0000',
        'trx-black': '#000000',
        'trx-orange': '#ff6600',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
