import React from 'react'
import { classnames } from 'begonya/functions'

import type { IconProps } from './Icon.types'
import * as styles from './Icon.styles'

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  color,
  name,
  size = 'medium',
  ...rest
}) => {
  const classNames = classnames(styles.root, styles.size(size), className)

  return (
    <span className={classNames} style={{ color }} {...rest}>
      {name}
    </span>
  )
}

export default Icon
