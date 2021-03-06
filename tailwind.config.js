module.exports = {
  important: true,
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: []
    }
  },
  theme: {
    /**
     * Color values are defined in /src/theme/colors.scss.
     * Color names should be sematic in order to provide
     * contextual alignment when thinking about themes.
     * E.g. primary-text-color (semantic) vs black-1 (literal)
     */
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      white: 'var(--white)',
      black: 'var(--black)',
      twitterblue: 'var(--twitter-blue)',
      twittergray: 'var(--twitter-gray)',
      twittergreyt: 'var(--twitter-greyt)',
      twittergrey: 'var(--twitter-grey)',

      app: {
        background: 'var(--app-background)',
        footer: 'var(--app-footer)'
      },
      typography: {
        primary: 'var(--typography-primary)',
        secondary: 'var(--typography-secondary)',
        success: 'var(--typography-success)',
        error: 'var(--typography-error)',
        light: 'var(--typography-light)'
      },
      button: {
        success: 'var(--button-success)',
        failure: 'var(--button-error)'
      }
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem'
    },
    minWidth: {
      '1/2': '50%'
    }
  },
  variants: {},
  plugins: []
};
