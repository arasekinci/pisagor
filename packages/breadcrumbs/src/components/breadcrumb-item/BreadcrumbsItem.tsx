import { cx } from '@emotion/css'
import { useTheme } from '@pisagor/core'
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
  const theme = useTheme()

  return (
    <li className={cx(styles.root, className)} data-testid={testId}>
      <Anchor className={styles.anchor(theme)} {...rest}>
        {iconBefore}
        {children && <span className={styles.text}>{children}</span>}
        {iconAfter}
      </Anchor>
    </li>
  )
}
