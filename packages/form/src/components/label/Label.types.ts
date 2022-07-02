import type { LabelHTMLAttributes, ReactNode } from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The prop description will be added here.
   */
  required?: boolean
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
