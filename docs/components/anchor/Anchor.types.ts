import type { AnchorHTMLAttributes, ReactNode } from 'react'
import type { LinkProps } from 'next/link'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The prop description will be added here.
   */
  link?: LinkProps
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
}
