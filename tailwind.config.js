/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sfPro)'],
        mono: ['var(--font-sfMono)']
      }
    }
  },
  variants: {},
  plugins: ['@tailwindcss/forms']
}
