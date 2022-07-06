import type { InputHTMLAttributes, ReactElement } from 'react'

export type CheckboxSize = 'small' | 'medium' | 'large'

export type CheckboxAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
>

export interface CheckboxProps extends CheckboxAttributes {
  /**
   * The prop description will be added here.
   */
  label?: string
  /**
   * The prop description will be added here.
   */
  text?: string | ReactElement
  /**
   * The prop description will be added here.
   */
  size?: CheckboxSize
  /**
   * The prop description will be added here.
   */
  testId?: string
}
