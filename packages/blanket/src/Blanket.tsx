import React from 'react'
import { classnames } from 'begonya/functions'

import type { BlanketProps } from './Blanket.types'
import * as styles from './Blanket.styles'

const Blanket: React.ForwardRefRenderFunction<HTMLDivElement, BlanketProps> = (
  { className, children, testId, ...rest },
  ref
) => {
  const classNames = classnames(styles.root, className)

  return (
    <div
      className={classNames}
      ref={ref}
      role="presentation"
      // onClick={onClick}
      data-testid={testId}
      {...rest}
    >
      {children}
    </div>
  )
}

export default React.forwardRef(Blanket)
