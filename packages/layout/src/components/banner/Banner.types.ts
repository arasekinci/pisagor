import type { HTMLAttributes, ReactNode } from 'react'

export type BannerPosition = 'fixed' | 'relative' | 'static'

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  position?: BannerPosition
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
