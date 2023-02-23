import type { ReactElement } from 'react'
import type { AnchorProps } from '@pisagor/anchor'

export interface BreadcrumbsItemProps extends AnchorProps {
  /**
   * The prop description will be added here.
   */
  iconAfter?: ReactElement
  /**
   * The prop description will be added here.
   */
  iconBefore?: ReactElement
}
