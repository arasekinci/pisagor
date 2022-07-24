import React from 'react'
import { classnames } from 'begonya/functions'
import type { IconProps } from '@pisagor/icon'

import type { CustomButtonProps } from './CustomButton.types'
import * as styles from './CustomButton.styles'

const CustomButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  CustomButtonProps
> = (
  {
    children,
    className,
    classNameList = {},
    iconAfter,
    iconBefore,
    testId,
    type = 'button',
    ...rest
  },
  ref
) => {
  const classNames = classnames(styles.root, className)

  const renderIcon = (icon?: React.ReactElement<IconProps>) => {
    if (React.isValidElement(icon) && icon) {
      const classNames = classnames(icon.props.className, classNameList.icon)

      return React.cloneElement(icon, {
        className: classNames,
      })
    }
  }

  const renderText = () => {
    if (children) {
      const classNames = classnames(styles.text, classNameList.text)

      return <span className={classNames}>{children}</span>
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
      {renderText()}
      {renderIcon(iconAfter)}
    </button>
  )
}

export default React.forwardRef(CustomButton)
