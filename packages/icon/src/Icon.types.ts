import type { HTMLAttributes } from 'react'

export type IconSize =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | number

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Text used to describe what the icon is in context. A label is needed when there is no pairing visible text next to the icon.
   */
  label?: string
  /**
   * Name of the icon you want to use.
   */
  name: string
  /**
   * There are three icon sizes – small (16px), medium (24px), and large (32px). This pixel size refers to the canvas the icon sits on, not the size of the icon shape itself.
   */
  size?: IconSize
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
   */
  testId?: string
}
