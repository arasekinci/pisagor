import React, { useId } from 'react'
import { classnames } from 'begonya/functions'
import { Label } from '@pisagor/form'

import type { TextAreaProps } from './TextArea.types'
import * as styles from './TextArea.styles'

const TextArea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
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
    testId,
    ...rest
  },
  ref
): JSX.Element => {
  const uid = useId()
  const key = id || uid
  const labelId = key && label ? `${key}-label` : undefined

  return (
    <div className={classnames(styles.root, className)} data-testid={testId}>
      {label && (
        <Label id={labelId} htmlFor={key} required={required}>
          {label}
        </Label>
      )}
      <textarea
        ref={ref}
        className={classnames(styles.textarea, styles.size[size])}
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

export default React.forwardRef(TextArea)
