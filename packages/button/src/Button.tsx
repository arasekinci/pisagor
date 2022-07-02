import React from 'react'
import { cx } from '@emotion/css'

import type { ButtonProps } from './Button.types'
import * as styles from './Button.styles'

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    appearance = 'default',
    children,
    className,
    iconAfter,
    iconBefore,
    size = 'medium',
    testId,
    ...rest
  },
  ref
) => {
  const classNames = cx(
    styles.root,
    styles.appearance[appearance],
    styles.size[size],
    className
  )

  return (
    <button className={classNames} ref={ref} data-testid={testId} {...rest}>
      {React.isValidElement(iconBefore)
        ? React.cloneElement(iconBefore, {
            className: 'button-icon-before',
            size: (iconBefore && iconBefore.props.size) || 'small',
          })
        : null}
      {children && <span className="button-text">{children}</span>}
      {React.isValidElement(iconAfter)
        ? React.cloneElement(iconAfter, {
            className: 'button-icon-after',
            size: (iconAfter && iconAfter.props.size) || 'small',
          })
        : null}
    </button>
  )
}

export default React.forwardRef(Button)
