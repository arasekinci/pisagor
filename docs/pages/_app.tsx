import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from '@pisagor/theme'
import '@pisagor/css/normalize'
import '@pisagor/css/gridview'

import '@/styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
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
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
