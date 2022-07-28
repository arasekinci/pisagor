import type { HTMLAttributes } from 'react'

export type ContainerSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

export interface ContainerProps extends HTMLAttributes<HTMLSpanElement> {
  iconColor?: string
  iconGradientStart?: string
  iconGradientStop?: string
  size?: ContainerSize
  textColor?: string
}
