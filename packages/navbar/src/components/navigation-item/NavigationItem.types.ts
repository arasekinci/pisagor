import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type NavigationItemAttributes = ButtonHTMLAttributes<HTMLButtonElement>

export interface NavigationItemProps extends NavigationItemAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
  /**
   * Will set the appearance of the button to look highlighted.
   */
  isSelected?: boolean
}
