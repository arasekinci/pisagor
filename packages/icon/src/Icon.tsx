import React from 'react'
import { classnames } from 'begonya/functions'

import type { IconProps } from './Icon.types'

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 'medium',
  className,
  ...rest
}) => {
  return (
    <span
      className={classnames('material-icons', className)}
      data-size={typeof size === 'number' ? undefined : size}
      style={{ fontSize: typeof size === 'number' ? size : undefined }}
      {...rest}
    >
      {name}
    </span>
  )
}

export default Icon
