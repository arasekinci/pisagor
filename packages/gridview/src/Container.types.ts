import type { HTMLAttributes } from 'react'

export type ContainerSize = 'fluid' | 'extended' | 'wide' | 'medium' | 'narrow'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  size?: ContainerSize
}
