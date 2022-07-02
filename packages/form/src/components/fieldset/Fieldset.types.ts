import type { FieldsetHTMLAttributes, ReactNode } from 'react'

export interface FieldsetProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /**
   * The prop description will be added here.
   */
  description?: ReactNode
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
