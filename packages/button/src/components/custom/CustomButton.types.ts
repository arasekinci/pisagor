import type { ButtonHTMLAttributes, ReactElement } from 'react'
import type { CSSObject } from '@emotion/css'

export type CustomButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>

export type CustomButtonStyles = {
  icon?: CSSObject
  root?: CSSObject
  text?: CSSObject
}

export interface CustomButtonProps extends CustomButtonAttributes {
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
  overrides?: CustomButtonStyles
  /**
   * The prop description will be added here.
   */
  testId?: string
}
