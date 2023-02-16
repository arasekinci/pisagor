import React from 'react'
import { classnames } from 'begonya/functions'
import { convertStatusNameToColor } from '@pisagor/core/themes'
import type { IconProps } from '@pisagor/icon'

import type { BadgeProps } from './badge.types'
import * as styles from './badge.styles'

const Badge: React.FunctionComponent<BadgeProps> = ({
  accent = false,
  className,
  color = 'neutral',
  icon,
  status,
  testId,
  value,
  ...rest
}) => {
  const appearance = convertStatusNameToColor(color, status)
  const classNames = classnames(
    styles.appearance(appearance, accent),
    className
  )

  if (icon) {
    return React.cloneElement<IconProps>(icon, {
      className: classnames(styles.icon, classNames),
      size: icon.props.size || 12,
    })
  }

  return (
    <span
      className={classnames(styles.text, classNames)}
      data-testid={testId}
      {...rest}
    >
      {value}
    </span>
  )
}

export default Badge
