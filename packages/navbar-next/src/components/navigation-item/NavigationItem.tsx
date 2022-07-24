import { cx } from '@emotion/css'

import type { NavigationItemProps } from './NavigationItem.types'
import * as styles from './NavigationItem.styles'

export const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = cx(styles.root, className)

  return (
    <button
      className={classNames}
      data-testid={testId && `${testId}-menu`}
      {...rest}
    >
      {children}
    </button>
  )
}
