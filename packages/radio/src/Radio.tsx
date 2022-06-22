import React from 'react'

import type { RadioProps } from './Radio.types'

const Radio: React.ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
  { children, ...rest },
  ref
): JSX.Element => {
  return (
    <input type="radio" {...rest} ref={ref}>
      {children}
    </input>
  )
}

export default React.forwardRef(Radio)
