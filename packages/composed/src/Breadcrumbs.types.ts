import type {
  BreadcrumbsProps as Props,
  BreadcrumbsItemProps,
} from '@pisagor/breadcrumbs'

export interface BreadcrumbsProps extends Omit<Props, 'children'> {
  /**
   * The prop description will be added here.
   */
  items?: Array<BreadcrumbsItemProps>
}
