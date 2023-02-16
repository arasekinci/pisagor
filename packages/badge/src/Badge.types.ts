import type { HTMLAttributes, ReactElement } from 'react'
import type { Color, Status } from '@pisagor/core'
import type { IconProps } from '@pisagor/icon'

export type BadgeColor = Color

export type BadgeStatus = Status

/**
 * Props for the Badge component.
 *
 * @extends {HTMLAttributes<HTMLSpanElement>}
 */

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  accent?: boolean
  color?: BadgeColor
  icon?: ReactElement<IconProps>
  max?: number
  status?: BadgeStatus
  testId?: string
  value?: string | number
}
