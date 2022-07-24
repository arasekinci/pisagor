import type { ButtonHTMLAttributes, ReactElement } from 'react'

export type CustomButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>

export type CustomButtonClassNameList = {
  icon?: string
  text?: string
}

export interface CustomButtonProps extends CustomButtonAttributes {
  /**
   * The prop description will be added here.
   */
  classNameList?: CustomButtonClassNameList
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
