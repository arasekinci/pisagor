import React from 'react'
import { cx } from '@emotion/css'

import type { FormProps } from './Form.types'
import * as styles from './Form.styles'

const Form: React.ForwardRefRenderFunction<HTMLFormElement, FormProps> = (
  { children, className, testId, ...rest },
  ref
) => {
  return (
    <form
      className={cx(styles.root, className)}
      ref={ref}
      data-testid={testId}
      {...rest}
    >
      {children}
    </form>
  )
}

export default React.forwardRef(Form)
