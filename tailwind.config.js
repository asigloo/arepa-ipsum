/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'display': ['Montserrat'],
      'sans': ['Hind', '-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Montserrat', 'Georgia', 'Cambria']
    },
    extend: {
      colors: {
        aguacate: {
          100: '#F7FBEE',
          200: '#EBF4D6',
          300: '#DFEDBD',
          400: '#C8E08B',
          500: '#B0D259',
          600: '#9EBD50',
          700: '#6A7E35',
          800: '#4F5F28',
          900: '#353F1B',
        },
        pernil: {
          100: '#ECEAE8',
          200: '#D0CBC6',
          300: '#B3ACA3',
          400: '#7B6E5E',
          500: '#423019',
          600: '#3B2B17',
          700: '#281D0F',
          800: '#1E160B',
          900: '#140E08',
        }
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
