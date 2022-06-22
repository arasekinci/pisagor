import type { HTMLAttributes, ReactNode } from 'react'

export type NavbarPosition = 'fixed' | 'relative' | 'static'

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  position?: NavbarPosition
  /**
   * The prop description will be added here.
   */
  height?: number
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
