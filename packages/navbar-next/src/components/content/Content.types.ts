import type { HTMLAttributes, ReactNode } from 'react'

export type ContentAttributes = HTMLAttributes<HTMLDivElement>

export interface ContentProps extends ContentAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
