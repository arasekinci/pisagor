import type { HTMLAttributes, ReactNode } from 'react'

export type MessageType = 'invalid' | 'valid' | 'description'

export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  type?: MessageType
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
