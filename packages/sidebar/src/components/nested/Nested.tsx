import type { NestedProps } from './Nested.types'
import * as styles from './Nested.styles'

export const Nested: React.FunctionComponent<NestedProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <div className={styles.root} data-testid={testId} {...rest}>
      {children}
    </div>
  )
}
