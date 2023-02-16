import React, { Fragment, useContext, useEffect } from 'react'

import type { PisagorProviderProps, PisagorContextValue } from './types'

export const PisagorContext = React.createContext<PisagorContextValue | null>(
  null
)

export const PisagorProvider: React.FunctionComponent<PisagorProviderProps> = ({
  mode = 'auto',
  theme,
  children,
}) => {
  const value: PisagorContextValue = {}

  useEffect(() => {
    const root = document.documentElement
    const query = '(prefers-color-scheme: dark)'

    const change = (event: MediaQueryListEvent) => {
      root.setAttribute('data-theme', event.matches ? 'dark' : 'light')
    }

    root.setAttribute('data-theme', mode)

    if (mode === 'auto') {
      root.setAttribute('data-color-mode', mode)

      if (window.matchMedia) {
        const media = window.matchMedia(query)

        if (media.matches) {
          root.setAttribute('data-theme', 'dark')
        } else {
          root.setAttribute('data-theme', 'light')
        }

        media.addEventListener('change', change)
      } else {
        root.setAttribute('data-theme', 'light')
      }
    }

    return function cleanup() {
      if (window.matchMedia) {
        const media = window.matchMedia(query)

        media.removeEventListener('change', change)
      }
    }
  }, [mode])

  return (
    <Fragment>
      <PisagorContext.Provider value={value}>
        {children}
      </PisagorContext.Provider>
    </Fragment>
  )
}

export const usePisagor = (): PisagorContextValue => {
  const pisagor = useContext(PisagorContext)

  if (pisagor) {
    return pisagor
  }

  throw new Error('usePisagor must be used within a PisagorProvider.')
}
