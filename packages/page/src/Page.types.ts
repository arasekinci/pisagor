import type { HTMLAttributes, ReactNode } from 'react'

export interface PageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
