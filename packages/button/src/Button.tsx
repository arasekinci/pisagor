import React from 'react'

import type { ButtonProps } from './Button.types'

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, ...rest },
  ref
): JSX.Element => {
  return (
    <button {...rest} ref={ref}>
      {children}
    </button>
  )
}

export default React.forwardRef(Button)
