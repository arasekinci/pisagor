import { classnames } from 'begonya/functions'
import Anchor from '@pisagor/anchor'

import type { BreadcrumbsItemProps } from './BreadcrumbsItem.types'
import * as styles from './BreadcrumbsItem.styles'

export const BreadcrumbsItem: React.FunctionComponent<BreadcrumbsItemProps> = ({
  children,
  className,
  iconAfter,
  iconBefore,
  testId,
  ...rest
}) => {
  return (
    <li className={classnames(styles.root, className)} data-testid={testId}>
      <Anchor className={styles.anchor} {...rest}>
        {iconBefore}
        {children && <span className={styles.text}>{children}</span>}
        {iconAfter}
      </Anchor>
    </li>
  )
}
