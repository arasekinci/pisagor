import React from 'react'
import { classnames } from 'begonya/functions'
import { convertStatusNameToColor } from '@pisagor/core/themes'
import type { IconProps } from '@pisagor/icon'

import type { ButtonProps } from './button.types'
import * as styles from './button.styles'

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    accent = true,
    children,
    className,
    color = 'default',
    icon,
    iconAfter,
    iconBefore,
    size = 'medium',
    status,
    testId,
    ...rest
  },
  ref
) => {
  const appearance =
    color === 'default' ? 'default' : convertStatusNameToColor(color, status)
  const classNames = classnames(
    styles.root,
    styles.appearance(appearance, accent),
    styles.size[size],
    className
  )

  const renderIcon = (elem?: React.ReactElement<IconProps>) => {
    const sizes = {
      large: 24,
      medium: 20,
      small: 16,
    }

    if (React.isValidElement(elem)) {
      return React.cloneElement<IconProps>(elem, {
        size: sizes[size],
      })
    }
  }

  return (
    <button className={classNames} ref={ref} data-testid={testId} {...rest}>
      {renderIcon(iconBefore)}
      {renderIcon(icon)}
      {children && <span className={styles.text}>{children}</span>}
      {renderIcon(iconAfter)}
    </button>
  )
}

export default React.forwardRef(Button)
