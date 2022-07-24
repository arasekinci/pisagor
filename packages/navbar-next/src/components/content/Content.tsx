import { cx } from '@emotion/css'

import type { ContentProps } from './Content.types'
import * as styles from './Content.styles'

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = cx(styles.root, className)

  return (
    <div
      className={classNames}
      data-testid={testId && `${testId}-content`}
      {...rest}
    >
      {children}
    </div>
  )
}
