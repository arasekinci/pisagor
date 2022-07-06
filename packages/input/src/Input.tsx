import React, { useId } from 'react'
import { classnames } from 'begonya/functions'
import { Label } from '@pisagor/form'

import type { InputProps } from './Input.types'
import * as styles from './Input.styles'

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className,
    disabled,
    id,
    label,
    name,
    placeholder,
    readOnly,
    required,
    size = 'medium',
    type = 'text',
    testId,
    ...rest
  },
  ref
) => {
  const classNames = classnames(styles.root, className)
  const uid = useId()
  const key = id || uid
  const labelId = key && label ? `${key}-label` : undefined

  return (
    <div className={classNames} data-testid={testId}>
      {label && (
        <Label id={labelId} htmlFor={key} required={required}>
          {label}
        </Label>
      )}
      <input
        ref={ref}
        className={classnames(styles.input, styles.size[size])}
        type={type}
        id={key}
        name={name || key}
        aria-disabled={disabled}
        aria-labelledby={labelId}
        aria-placeholder={placeholder}
        aria-readonly={readOnly}
        aria-required={required}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        {...rest}
      />
    </div>
  )
}

export default React.forwardRef(Input)
