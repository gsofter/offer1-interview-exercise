import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  type: 'light',
  shadows: ['none'],
  sidebarWidth: 260,
  sidebarMobileHeight: 90,
})

const Offer1Theme = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>
}

export default Offer1Theme
