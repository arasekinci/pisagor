import type { HTMLAttributes, ReactNode } from 'react'

export type LeftPanelPosition = 'fixed' | 'relative' | 'static'

export interface LeftPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  position?: LeftPanelPosition
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
