import type { TextareaHTMLAttributes } from 'react'

export type TextAreaSize = 'small' | 'medium' | 'large'

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * The prop description will be added here.
   */
  size?: TextAreaSize
  /**
   * The prop description will be added here.
   */
  label?: string
  /**
   * The prop description will be added here.
   */
  testId?: string
}
