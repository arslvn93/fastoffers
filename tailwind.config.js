module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'primary': '#81c3d7',
        'secondary': 'rgb(230, 108, 108)',
        'link': '#5b7bfb'
      },
      backgroundColor: {
        'primary': '#81c3d7',
        'secondary': 'rgb(230, 108, 108)',
        'optional': '#27292c'
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
        'primary': '#81c3d7',
        'secondary': 'rgb(230, 108, 108)',
        'optional': '#27292c'
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
