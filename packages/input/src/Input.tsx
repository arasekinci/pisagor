import React from 'react'

import type { InputProps } from './Input.types'
import * as Styles from './Input.styles'

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = 'text', disabled = false, ...rest },
  ref
): JSX.Element => {
  return (
    <Styles.Root
      ref={ref}
      type={type}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
    />
  )
}

export default React.forwardRef(Input)
