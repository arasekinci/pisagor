import type { HTMLAttributes, ReactElement } from 'react'
import type { Color, Status } from '@pisagor/core'

export type AlertColor = Color

export type AlertStatus = Status

/**
 * Props for the Alert component.
 *
 * @extends {HTMLAttributes<HTMLElement>}
 */

export interface AlertProps extends HTMLAttributes<HTMLElement> {
  accent?: boolean
  icon?: ReactElement | null
  color?: AlertColor
  status?: AlertStatus
  testId?: string
  title?: string
}
