import React, { useRef, Fragment, useState } from 'react'
import { classnames } from 'begonya/functions'
import Popper from '@pisagor/popper'

import type { TooltipProps } from './Tooltip.types'
import * as styles from './Tooltip.styles'

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  className,
  content,
  placement = 'bottom',
  testId,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const triggerRef = useRef<HTMLElement>(null)
  const classNames = classnames(styles.root, className)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  const renderTrigger = () => {
    if (React.isValidElement(children)) {
      if (React.Children.only(children)) {
        return React.cloneElement(children, {
          ref: triggerRef,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })
      }
    }
  }

  return (
    <Fragment>
      {renderTrigger()}
      {isOpen && (
        <Popper
          className={classNames}
          placement={placement}
          testId={testId}
          triggerRef={triggerRef}
          {...rest}
        >
          {content}
        </Popper>
      )}
    </Fragment>
  )
}

export default Tooltip
