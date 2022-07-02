import type { ButtonHTMLAttributes, ReactElement } from 'react'

export type ButtonAppearance =
  | 'default'
  | 'error'
  | 'help'
  | 'info'
  | 'success'
  | 'warning'

export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The prop description will be added here.
   */
  appearance?: ButtonAppearance
  /**
   * The prop description will be added here.
   */
  size?: ButtonSize
  /**
   * The prop description will be added here.
   */
  iconBefore?: ReactElement
  /**
   * The prop description will be added here.
   */
  iconAfter?: ReactElement
  /**
   * The prop description will be added here.
   */
  testId?: string
}
