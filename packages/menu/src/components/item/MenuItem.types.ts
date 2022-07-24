import type { HTMLAttributes, ReactNode } from 'react'

export type MenuItemAttributes = HTMLAttributes<HTMLDivElement>

export interface MenuItemProps extends MenuItemAttributes {
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  description?: React.ReactNode
  /**
   * The prop description will be added here.
   */
  iconAfter?: React.ReactNode
  /**
   * The prop description will be added here.
   */
  iconBefore?: React.ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
