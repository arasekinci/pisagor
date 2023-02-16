import React from 'react'
import { classnames } from 'begonya/functions'

import type { ExampleProps } from './example.types'
import * as styles from './example.styles'

const Example: React.FunctionComponent<ExampleProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = classnames(styles.root, className)

  return (
    <div className={classNames} data-testid={testId} {...rest}>
      {children}
    </div>
  )
}

export default Example
