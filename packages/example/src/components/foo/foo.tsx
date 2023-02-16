import React from 'react'
import { classnames } from 'begonya/functions'

import type { FooProps } from './foo.types'
import * as styles from './foo.styles'

const Foo: React.FunctionComponent<FooProps> = ({
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

export default Foo
