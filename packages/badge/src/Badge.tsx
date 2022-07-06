import React from 'react'
import { classnames } from 'begonya/functions'

import type { BadgeProps } from './Badge.types'
import * as styles from './Badge.styles'

const Badge: React.FunctionComponent<BadgeProps> = ({
  appearance = 'default',
  className,
  value,
  testId,
  ...rest
}) => {
  const classNames = classnames(
    styles.root,
    styles.appearance[appearance],
    className
  )

  return (
    <span className={classNames} data-testid={testId} {...rest}>
      {value}
    </span>
  )
}

export default Badge
