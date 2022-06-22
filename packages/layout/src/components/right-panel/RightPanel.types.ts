import type { HTMLAttributes, ReactNode } from 'react'

export type RightPanelPosition = 'fixed' | 'relative' | 'static'

export interface RightPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  position?: RightPanelPosition
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
