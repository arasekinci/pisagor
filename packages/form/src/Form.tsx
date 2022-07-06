import React from 'react'
import { classnames } from 'begonya/functions'

import type { FormProps } from './Form.types'
import * as styles from './Form.styles'

const Form: React.ForwardRefRenderFunction<HTMLFormElement, FormProps> = (
  { children, className, testId, ...rest },
  ref
) => {
  return (
    <form
      className={classnames(styles.root, className)}
      ref={ref}
      data-testid={testId}
      {...rest}
    >
      {children}
    </form>
  )
}

export default React.forwardRef(Form)
