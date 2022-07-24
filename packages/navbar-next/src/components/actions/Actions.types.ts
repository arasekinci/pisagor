import type { HTMLAttributes, ReactNode } from 'react'

export type ActionsAttributes = HTMLAttributes<HTMLDivElement>

export interface ActionsProps extends ActionsAttributes {
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
