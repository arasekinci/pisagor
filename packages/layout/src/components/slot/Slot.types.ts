import type { HTMLAttributes, ReactNode } from 'react'

export type SlotPosition = 'left' | 'right'

export interface SlotProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  position?: SlotPosition
  /**
   * The prop description will be added here.
   */
  isOpen?: boolean
  /**
   * The prop description will be added here.
   */
  children: ReactNode
  /**
   * The prop description will be added here.
   */
  onOpenChange(): void
}
