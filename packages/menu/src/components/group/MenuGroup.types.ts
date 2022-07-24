import type { HTMLAttributes, ReactNode } from 'react'

export type MenuGroupAttributes = HTMLAttributes<HTMLDivElement>

export interface MenuGroupProps extends MenuGroupAttributes {
  /**
   * Children of the menu group, should generally be `Section` components.
   */
  children: ReactNode
  /**
   * Will render a border at the top of the section.
   */
  hasSeparator?: boolean
  /**
   * Useful to constrain the menu group minimum height to a specific value.
   */
  minHeight?: string | number
  /**
   * Useful to constrain the menu groups height to a specific value.
   * Needs to be set when wanting to have scrollable sections.
   */
  maxHeight?: string | number
  /**
   * Used to override the accessibility role for the element.
   */
  role?: string
  /**
   * A `testId` prop is provided for specified elements,
   * which is a unique string that appears as a data attribute `data-testid` in the rendered code,
   * serving as a hook for automated tests.
   */
  testId?: string
  /**
   * The text passed into the internal HeadingItem. If a title is not provided,
   * the HeadingItem will not be rendered, and this component acts as a regular Section
   */
  title?: string
}
