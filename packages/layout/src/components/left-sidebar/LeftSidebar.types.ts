import type { HTMLAttributes, ReactNode } from 'react'

export type LeftSidebarPosition = 'fixed' | 'relative' | 'static'

export interface LeftSidebarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  position?: LeftSidebarPosition
  /**
   * The prop description will be added here.
   */
  width?: number
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
