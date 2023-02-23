import React, { useState } from 'react'
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
    color = 'neutral',
    icon,
    iconAfter,
    iconBefore,
    size = 'medium',
    status,
    testId,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    ...rest
  },
  ref
) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const appearance = convertStatusNameToColor(color, status)
  const classNames = classnames(
    styles.root,
    styles.appearance(appearance, accent),
    styles.size[size],
    className
  )

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    onMouseDown && onMouseDown(event)

    setPressed(true)
  }

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    onMouseLeave && onMouseLeave(event)

    setPressed(false)
  }

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    onMouseUp && onMouseUp(event)

    setPressed(false)
  }

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
    <button
      ref={ref}
      className={classNames}
      aria-pressed={pressed}
      data-testid={testId}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      {...rest}
    >
      {renderIcon(iconBefore)}
      {renderIcon(icon)}
      {children && <span className={styles.text}>{children}</span>}
      {renderIcon(iconAfter)}
    </button>
  )
}

export default React.forwardRef(Button)
