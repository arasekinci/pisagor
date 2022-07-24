import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import type { PortalProps } from './Portal.types'

const Portal: React.FunctionComponent<PortalProps> = ({
  children,
  zIndex = 'auto',
}) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const portal = document.createElement('div')
    portal.classList.add('portal')
    portal.style.zIndex = zIndex

    document.body.appendChild(portal)

    setContainer(portal)

    return function cleanup() {
      document.body.removeChild(portal)
    }
  }, [zIndex])

  if (container) {
    return ReactDOM.createPortal(children, container)
  }

  return null
}

export default Portal
