export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#2D5A27',
        'forest-dark': '#1e3d1a',
        'forest-light': '#3d7a35',
        'minimal-white': '#F8F9FA',
        graphite: '#6C757D',
        marble: '#F0EDE8',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
