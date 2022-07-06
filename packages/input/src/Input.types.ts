import type { InputHTMLAttributes } from 'react'

export type InputType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export type InputSize = 'small' | 'medium' | 'large'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The prop description will be added here.
   */
  type?: InputType
  /**
   * The prop description will be added here.
   */
  size?: InputSize
  /**
   * The prop description will be added here.
   */
  label?: string
  /**
   * The prop description will be added here.
   */
  testId?: string
}
