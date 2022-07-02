import type { HTMLAttributes, ReactNode } from 'react'

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
