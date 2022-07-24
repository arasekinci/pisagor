import { cx } from '@emotion/css'

import type { ActionsProps } from './Actions.types'
import * as styles from './Actions.styles'

export const Actions: React.FunctionComponent<ActionsProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = cx(styles.root, className)

  return (
    <div
      className={classNames}
      data-testid={testId && `${testId}-actions`}
      {...rest}
    >
      {children}
    </div>
  )
}
