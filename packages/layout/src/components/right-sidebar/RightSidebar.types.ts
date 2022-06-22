import type { HTMLAttributes, ReactNode } from 'react'

export type RightSidebarPosition = 'fixed' | 'relative' | 'static'

export interface RightSidebarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  position?: RightSidebarPosition
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
