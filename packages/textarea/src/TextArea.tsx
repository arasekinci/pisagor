import React from 'react'

import type { TextAreaProps } from './TextArea.types'
import * as Styles from './TextArea.styles'

const TextArea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ disabled = false, ...rest }, ref): JSX.Element => {
  return (
    <Styles.Root
      ref={ref}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
    />
  )
}

export default React.forwardRef(TextArea)
