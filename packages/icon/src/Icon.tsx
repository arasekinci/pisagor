import React from 'react'
import { classnames } from 'begonya/functions'

import type { IconProps } from './icon.types'
import * as styles from './icon.styles'

const Icon: React.FunctionComponent<IconProps> = ({
  appearance,
  className,
  color,
  name,
  size = 'medium',
  ...rest
}) => {
  const classNames = classnames(
    styles.root,
    styles.size(size),
    appearance ? styles.appearance(appearance) : null,
    color ? styles.color(color) : null,
    className
  )

  return (
    <span className={classNames} {...rest}>
      {name.replace(/-/g, '_')}
    </span>
  )
}

export default Icon
