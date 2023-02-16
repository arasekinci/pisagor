import React from 'react'
import { classnames } from 'begonya/functions'

import type { AvatarGroupProps } from './avatar-group.types'
import * as styles from './avatar-group.styles'

export const AvatarGroup: React.FunctionComponent<AvatarGroupProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = classnames(styles.list, className)

  return (
    <ul className={classNames} data-testid={testId} {...rest}>
      {React.Children.map(children, (child, index) => (
        <li key={index} className={styles.listitem}>
          {child}
        </li>
      ))}
    </ul>
  )
}
