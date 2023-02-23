import type { ButtonHTMLAttributes, ReactElement } from 'react'
import type { Color, Status } from '@pisagor/core'
import type { IconProps } from '@pisagor/icon'

export type ButtonColor = Color

export type ButtonStatus = Status

export type ButtonSize = 'small' | 'medium' | 'large'

/**
 * Props for the Button component.
 *
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>}
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: boolean
  color?: ButtonColor
  icon?: ReactElement<IconProps>
  iconAfter?: ReactElement<IconProps>
  iconBefore?: ReactElement<IconProps>
  size?: ButtonSize
  status?: ButtonStatus
  testId?: string
}
