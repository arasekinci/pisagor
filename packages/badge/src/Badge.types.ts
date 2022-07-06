import type { HTMLAttributes } from 'react'

export type BadgeAppearance =
  | 'default'
  | 'error'
  | 'help'
  | 'info'
  | 'success'
  | 'warning'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The prop description will be added here.
   */
  appearance?: BadgeAppearance
  /**
   * The prop description will be added here.
   */
  value?: string | number
  /**
   * The prop description will be added here.
   */
  max?: number
  /**
   * The prop description will be added here.
   */
  testId?: string
}
