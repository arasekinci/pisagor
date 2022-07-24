import type { HTMLAttributes, ReactNode } from 'react'

export type NavigationAttributes = HTMLAttributes<HTMLElement>

export interface NavigationProps extends NavigationAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
