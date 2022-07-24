import { cx } from '@emotion/css'

import type { NavigationProps } from './Navigation.types'
import * as styles from './Navigation.styles'

export const Navigation: React.FunctionComponent<NavigationProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = cx(styles.root, className)

  return (
    <nav
      className={classNames}
      data-testid={testId && `${testId}-nav`}
      {...rest}
    >
      {children}
    </nav>
  )
}
