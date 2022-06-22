import type { BreadcrumbsItemProps } from './BreadcrumbsItem.types'
import * as Styles from './BreadcrumbsItem.styles'

export const BreadcrumbsItem: React.FunctionComponent<BreadcrumbsItemProps> = ({
  iconAfter,
  iconBefore,
  children,
  ...rest
}) => {
  return (
    <Styles.Root>
      <Styles.Anchor {...rest}>
        {iconBefore}
        {children && <Styles.Text>{children}</Styles.Text>}
        {iconAfter}
      </Styles.Anchor>
    </Styles.Root>
  )
}
