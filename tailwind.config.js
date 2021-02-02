module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'heroImage': "url('/nba-teams.png')"
      }) 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
