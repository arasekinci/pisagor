import React from 'react'

import type { IconProps } from './Icon.types'

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 'medium',
  ...rest
}) => {
  return (
    <span
      className="material-icons"
      data-size={typeof size === 'number' ? undefined : size}
      style={{ fontSize: typeof size === 'number' ? size : undefined }}
      {...rest}
    >
      {name}
    </span>
  )
}

export default Icon
