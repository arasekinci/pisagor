import React, { StrictMode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { PisagorProvider } from '@pisagor/core'
import '@pisagor/core/css'

import '@/styles/main.scss'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start()
    }

    const handleRouteComplete = () => {
      NProgress.done()
    }

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteComplete)

    return function cleanup() {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteComplete)
    }
  }, [])

  return (
    <StrictMode>
      <PisagorProvider mode="light">
        <Component {...pageProps} />
      </PisagorProvider>
    </StrictMode>
  )
}

export default App
