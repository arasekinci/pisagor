import type { HTMLAttributes, ReactNode } from 'react'

export type NavigationItemAttributes = HTMLAttributes<HTMLElement>

export interface NavigationItemProps extends NavigationItemAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * Will set the appearance of the button to look highlighted.
   */
  isHighlighted?: boolean
  /**
   * The prop description will be added here.
   */
  testId?: string
}
