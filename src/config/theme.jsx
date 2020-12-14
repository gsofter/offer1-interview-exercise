import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import cyan from '@material-ui/core/colors/cyan'
import { colors } from '@material-ui/core'
const light = purple[700] // #f44336
const primary = purple[800] // #f44336
const dark = purple[900] // #f44336
const main = purple['A100']
const theme = createMuiTheme({
  type: 'light',
  shadows: ['none'],
  sidebarWidth: 260,
  sidebarMobileHeight: 90,
  palette: {
    primary: {
      main: primary,
      light: light,
      primary: primary,
      dark: dark,
    },
    secondary: {
      main: primary,
      light: light,
      primary: primary,
      dark: dark,
    },
    background: {
      paper: 'white',
      default: 'white',
    },
    text: {
      main: dark,
      primary: dark,
      light: light,
      dark: dark,
      secondary: 'rgb(0,0,0,.5)',
    },
  },
  typography: {
    htmlFontSize: 14,
    button: {
      fontSize: '0.7em',
    },
    h6: {
      fontSize: '1.1rem',
    },
  },
})

const Offer1Theme = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>
}

export default Offer1Theme
