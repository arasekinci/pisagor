import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Contents of the bottom bar to be rendered below the page title. Typically contains a search bar and/or filters.
   */
  children?: ReactNode
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   */
  testId?: string
}
