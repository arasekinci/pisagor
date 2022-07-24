import type { HTMLAttributes, ReactNode } from 'react'

export type NavbarAttributes = HTMLAttributes<HTMLElement>

export interface NavbarProps extends NavbarAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
