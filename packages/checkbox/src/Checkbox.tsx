import React, { useEffect, useId, useState } from 'react'
import { classnames } from 'begonya/functions'
import { Label } from '@pisagor/form'

import { sizes } from './core/constants'
import type { CheckboxProps } from './checkbox.types'
import * as styles from './checkbox.styles'

const Checkbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = (
  {
    checked,
    children,
    className,
    defaultChecked = false,
    disabled = false,
    id,
    label,
    name,
    required,
    size = 'medium',
    testId,
    onChange,
    ...rest
  },
  ref
) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)
  const classNames = classnames(styles.root, className)
  const uid = useId()
  const labelId = useId()
  const key = id || uid

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }

    setIsChecked(event.currentTarget.checked)
  }

  return (
    <div className={classNames} data-testid={testId}>
      {label && (
        <Label id={labelId} htmlFor={key} required={required}>
          {label}
        </Label>
      )}
      <label className={styles.inputgroup(isChecked, disabled)}>
        <input
          ref={ref}
          className={styles.input}
          type="checkbox"
          id={key}
          name={name || key}
          aria-checked={isChecked}
          aria-disabled={disabled}
          aria-labelledby={labelId}
          aria-required={required}
          checked={isChecked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          {...rest}
        />
        <svg
          className={styles.icon}
          aria-label={label}
          role="presentation"
          viewBox="0 0 24 24"
          width={sizes[size]}
          height={sizes[size]}
        >
          <g fillRule="evenodd">
            <rect x="6" y="6" width="12" height="12" rx="2" />
            {isChecked && (
              <path
                fill="#fff"
                d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z"
              />
            )}
          </g>
        </svg>
        {children && <div className={styles.content}>{children}</div>}
      </label>
    </div>
  )
}

export default React.forwardRef(Checkbox)
