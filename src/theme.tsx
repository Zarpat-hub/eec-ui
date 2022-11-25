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
      dark: variables.primaryBlack,
      main: variables.primaryBlue,
      light: variables.primaryGrey,
    },
    secondary: {
      dark: variables.accentVibrantBlue,
      main: variables.secondaryBlue,
      light: variables.accentBlue,
    },
  },
  breakpoints: {
    values: {
      mobile: Number(variables.mobile.slice(0, -2)),
      desktop: Number(variables.desktop.slice(0, -2)),
    },
  },
})

export default theme
