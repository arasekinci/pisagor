import type { HTMLAttributes, ReactElement, ReactNode } from 'react'

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Contents of the action bar to be rendered next to the page title.
   */
  actions?: ReactElement
  /**
   * Contents of the action bar to be rendered next to the page title. Typically a button group.
   */
  bottomBar?: ReactElement
  /**
   * Page breadcrumbs to be rendered above the title.
   */
  breadcrumbs?: ReactElement
  /**
   * Contents of the bottom bar to be rendered below the page title. Typically contains a search bar and/or filters.
   */
  children?: ReactNode
  /**
   * Used as id of inner h1 tag. This is exposed so the header text can be used as label of other element by aria-labeledby
   */
  id?: string
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   */
  testId?: string
}
