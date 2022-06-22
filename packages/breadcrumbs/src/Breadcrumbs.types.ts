import type { HTMLAttributes, ReactNode } from 'react'

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Text to be used as label of navigation region that wraps the breadcrumbs
   */
  label?: string
  /**
   * The prop description will be added here.
   */
  separator?: ReactNode
  /**
   * The items to be included inside the Breadcrumbs wrapper
   */
  children?: ReactNode
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   */
  testId?: string
}
