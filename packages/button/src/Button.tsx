import React from 'react'
import { classnames } from 'begonya/functions'

import type { ButtonProps } from './button.types'
import * as styles from './button.styles'

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
  const classNames = classnames(
    styles.root,
    styles.appearance[appearance],
    styles.size[size],
    className
  )

  return (
    <button className={classNames} ref={ref} data-testid={testId} {...rest}>
      {React.isValidElement(iconBefore)
        ? React.cloneElement<any>(iconBefore, {
            className: 'button-icon-before',
            size: (iconBefore && iconBefore.props.size) || 'small',
          })
        : null}
      {children && <span className="button-text">{children}</span>}
      {React.isValidElement(iconAfter)
        ? React.cloneElement<any>(iconAfter, {
            className: 'button-icon-after',
            size: (iconAfter && iconAfter.props.size) || 'small',
          })
        : null}
    </button>
  )
}

export default React.forwardRef(Button)
