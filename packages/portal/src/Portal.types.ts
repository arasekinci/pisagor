import type { ReactNode } from 'react'

export interface PortalProps {
  /**
   * The items to be included inside the Breadcrumbs wrapper
   */
  children?: ReactNode
  /**
   * The z-index of the DOM container element.
   * */
  zIndex?: string
}
