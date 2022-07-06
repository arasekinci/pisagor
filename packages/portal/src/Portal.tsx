import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import type { PortalProps } from './Portal.types'

const SafePortal: React.FunctionComponent<PortalProps> = ({ children }) => {
  const portal = document.createElement('div')
  portal.classList.add('portal')
  const portalRef = useRef<HTMLDivElement>(portal)
  document.body.appendChild(portalRef.current)

  // useEffect(() => {
  //   return function cleanup() {
  //     if (portalRef.current) {
  //       document.body.removeChild(portalRef.current)
  //     }
  //   }
  // }, [])

  return ReactDOM.createPortal(children, portalRef.current)
}

const Portal: React.FunctionComponent<PortalProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted) {
    return <SafePortal>{children}</SafePortal>
  }

  return null
}

export default Portal
