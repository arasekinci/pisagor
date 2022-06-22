import type { ReactElement } from 'react'
import type { LinkProps } from '@pisagor/link'

export interface BreadcrumbsItemProps extends LinkProps {
  /**
   * The prop description will be added here.
   */
  iconAfter?: ReactElement
  /**
   * The prop description will be added here.
   */
  iconBefore?: ReactElement
}
