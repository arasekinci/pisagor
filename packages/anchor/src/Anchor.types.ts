import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The items to be included inside the Breadcrumbs wrapper
   */
  children?: ReactNode
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   */
  testId?: string
}
