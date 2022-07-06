import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type DrawerActionAttributes = ButtonHTMLAttributes<HTMLButtonElement>

export interface DrawerActionProps extends DrawerActionAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * A unique hook to be used for testing.
   */
  testId?: string
}
