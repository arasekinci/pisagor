import React, { useRef, useId, Fragment } from 'react'
import { classnames } from 'begonya/functions'
import Popper from '@pisagor/popper'

import type { PopupProps } from './Popup.types'
import * as styles from './Popup.styles'

const Popup: React.FunctionComponent<PopupProps> = ({
  children,
  className,
  isOpen,
  testId,
  trigger,
  ...rest
}) => {
  const triggerRef = useRef<HTMLElement>(null)
  const id = useId()
  const classNames = classnames(styles.root, className)
  const triggerNode = trigger({
    ref: triggerRef,
    'aria-controls': id,
    'aria-expanded': isOpen,
    'aria-haspopup': true,
  })

  return (
    <Fragment>
      {triggerNode}
      {isOpen && (
        <Popper
          className={classNames}
          testId={testId}
          triggerRef={triggerRef}
          {...rest}
        >
          {children}
        </Popper>
      )}
    </Fragment>
  )
}

export default Popup
