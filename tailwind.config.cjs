module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        ivory: '#F9F6F1',
        'antique-gold': '#C5A572',
        champagne: '#E5D3B3',
        slate: '#3D3D3D',
        taupe: '#A89F91',
        'deep-space': '#0b0d17'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(7,8,12,0.6)'
      }
    }
  },
  plugins: []
}
