import React from 'react'
import { classnames } from 'begonya/functions'
import { css, cx } from '@emotion/css'

import type { CustomButtonProps } from './CustomButton.types'
import * as styles from './CustomButton.styles'

const CustomButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  CustomButtonProps
> = (
  {
    children,
    className,
    iconAfter,
    iconBefore,
    overrides = {},
    testId,
    type = 'button',
    ...rest
  },
  ref
) => {
  const classNames = classnames(styles.root, css(overrides.root), className)

  const renderIcon = (icon?: React.ReactElement) => {
    if (React.isValidElement(icon) && icon) {
      const iconStyle = css(overrides.icon)

      return React.cloneElement(icon, {
        className: cx(iconStyle, icon.props.className),
      })
    }
  }

  return (
    <button
      ref={ref}
      className={classNames}
      type={type}
      tabIndex={0}
      data-testid={testId}
      {...rest}
    >
      {renderIcon(iconBefore)}
      {children && (
        <span className={cx(styles.text, css(overrides.text))}>{children}</span>
      )}
      {renderIcon(iconAfter)}
    </button>
  )
}

export default React.forwardRef(CustomButton)
