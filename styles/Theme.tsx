import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { light, dark } from './themeTypes'

const Theme: React.FunctionComponent<{ children: any }> = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
)

export default Theme
