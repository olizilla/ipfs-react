import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'ipfs-css/theme.json'

export default function i18nDecorator (fn) {
  return (
    <ThemeProvider theme={theme} >
      {fn()}
    </ThemeProvider>
  )
}
