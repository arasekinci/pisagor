import type { HTMLAttributes, ReactNode } from 'react'

export type MenuAttributes = HTMLAttributes<HTMLDivElement>

export interface MenuProps extends MenuAttributes {
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
