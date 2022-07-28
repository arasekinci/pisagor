import type { HTMLAttributes, ReactElement } from 'react'

export type LogoAttributes = HTMLAttributes<HTMLDivElement>

export interface LogoProps extends LogoAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactElement
  /**
   * The prop description will be added here.
   */
  href?: string
  /**
   * The prop description will be added here.
   */
  src?: string
  /**
   * The prop description will be added here.
   */
  testId?: string
}
