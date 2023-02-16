/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dirty-white': '#F7F6F6',
        'light-gray': '#E1E0E0',
        'highlight-gray': '#D1D0D0',
        'medium-gray': '#CCCCCC',
        'dark-gray': '#C0C0C0',
        'apple-blue': '#007AFF',
        'code-green': '#4AF626',
      },
      fontFamily: {
        sans: ['var(--font-sfPro)'],
        mono: ['var(--font-sfMono)']
      }
    }
  },
  variants: {},
  plugins: ['@tailwindcss/forms']
}
