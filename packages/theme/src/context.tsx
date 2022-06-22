import React, { useContext } from 'react'

import type { ThemeProviderProps, ThemeContextValue } from './types'
import * as colors from './colors'

export const ThemeContext = React.createContext<ThemeContextValue | null>(null)

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const value: ThemeContextValue = {
    colors,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextValue => {
  const theme = useContext(ThemeContext)

  if (theme) {
    return theme
  }

  throw new Error('useTheme must be used within a ThemeProvider.')
}
