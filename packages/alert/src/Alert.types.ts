import type { HTMLAttributes, ReactElement } from 'react'

export type AlertAppearance =
  | 'default'
  | 'error'
  | 'help'
  | 'info'
  | 'success'
  | 'warning'

export interface AlertProps extends HTMLAttributes<HTMLElement> {
  /**
   * The prop description will be added here.
   */
  appearance?: AlertAppearance
  /**
   * The prop description will be added here.
   */
  title?: string
  /**
   * The prop description will be added here.
   */
  icon?: ReactElement | null
  /**
   * The prop description will be added here.
   */
  testId?: string
}
