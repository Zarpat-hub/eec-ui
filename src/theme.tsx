import { createTheme } from '@mui/material'
import variables from './variables.module.scss'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: false
    laptop: false
    desktop: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: variables.primaryBlue,
    },
    secondary: {
      main: variables.accentVibrantBlue,
    },
  },
  breakpoints: {
    values: {
      mobile: Number(variables.mobile.slice(0, -2)),
      desktop: Number(variables.desktop.slice(0, -2)),
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, Roboto, Arial',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& > div > input': {
            padding: '.5rem',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
    },
  },
})

export default theme
