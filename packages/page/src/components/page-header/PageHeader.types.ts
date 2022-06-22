import type { HTMLAttributes, ReactElement, ReactNode } from 'react'

export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Contents of the action bar to be rendered next to the page title.
   */
  actions?: ReactElement
  /**
   * Page breadcrumbs to be rendered above the title.
   */
  breadcrumbs?: ReactElement
  /**
   * Contents of the bottom bar to be rendered below the page title. Typically contains a search bar and/or filters.
   */
  children?: ReactNode
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   */
  testId?: string
}
