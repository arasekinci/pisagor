import React from 'react'
import { classnames } from 'begonya/functions'

import type { DrawerActionProps } from './DrawerAction.types'
import * as styles from './DrawerAction.styles'

export const DrawerAction = React.forwardRef<
  HTMLButtonElement,
  DrawerActionProps
>(({ children, className, testId, ...rest }, ref) => {
  const classNames = classnames(styles.root, className)

  return (
    <button ref={ref} className={classNames} data-testid={testId} {...rest}>
      {children}
    </button>
  )
})
