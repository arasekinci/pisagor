import type { HTMLAttributes, ReactNode } from 'react'

export interface BlanketProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The children to be rendered within Blanket.
   */
  children?: ReactNode
  /**
   * A `testId` prop is provided for specified elements,
   * which is a unique string that appears as a data attribute `data-testid` in the rendered code,
   * serving as a hook for automated tests.
   */
  testId?: string
}
