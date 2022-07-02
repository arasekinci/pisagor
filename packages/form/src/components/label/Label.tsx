import { cx } from '@emotion/css'

import type { LabelProps } from './Label.types'
import * as styles from './Label.styles'

export const Label: React.FunctionComponent<LabelProps> = ({
  children,
  className,
  required,
  testId,
  ...rest
}) => {
  return (
    <label
      className={cx(styles.root, className)}
      data-testid={testId && `${testId}-label`}
      {...rest}
    >
      {children}
      {required && (
        <span className={styles.required} aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}
