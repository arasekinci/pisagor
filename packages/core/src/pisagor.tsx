import React, { useContext } from 'react'
import { ThemeProvider, ThemeContext } from '@emotion/react'

import type { PisagorProviderProps, PisagorContextValue, Theme } from './types'

export const PisagorContext = React.createContext<PisagorContextValue | null>(
  null
)

export const PisagorProvider: React.FunctionComponent<PisagorProviderProps> = ({
  theme,
  children,
}) => {
  const value: PisagorContextValue = {}

  return (
    <PisagorContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PisagorContext.Provider>
  )
}

export const usePisagor = (): PisagorContextValue => {
  const pisagor = useContext(PisagorContext)

  if (pisagor) {
    return pisagor
  }

  throw new Error('usePisagor must be used within a PisagorProvider.')
}

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext) as Theme

  if (theme) {
    return theme
  }

  throw new Error('useTheme must be used within a PisagorProvider.')
}
