module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'primary': '#100EA0',
        'secondary': 'rgb(255, 255, 255)',
        'link': '#0095bb'
      },
      backgroundColor: {
        'primary': '#100EA0',
        'secondary': 'rgb(16, 14, 160)',
        'optional': '#0E0E0E'
      },
      fontFamily: {
        'primary': ['Roboto Condensed', 'sans-serif']
      },
      boxShadow: {
        'primary': '0 0 14px rgba(0, 0, 0, .05)'
      },
      backgroundImage: {
        'border': "url('/bg-border.png')"
      },
      fontSize: {
        '5.8vw': '5.8vw',
        '5.8vw': '5.8vw',
      },
      borderColor: {
        'primary': '#100EA0',
        'secondary': 'rgb(16, 14, 160)',
        'optional': '#0E0E0E'
      },
      height: {
        '500px': '500px'
      },
      fontSize: {
        '120px': '120px',
        '115px': '115px',
        '113px': '113px',
        '112px': '112px',
        '111px': '111px',
        '110px': '110px',
        '100px': '100px',
        '80px': '80px'
      }
    },
  },
  variants: {
    extend: {
      margin: ['last', 'hover'],
      inset: ['hover']
    },
  },
  plugins: [],
}
