import type { NestedProps } from './Nested.types'
import * as Styles from './Nested.styles'

export const Nested: React.FunctionComponent<NestedProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <Styles.Root data-testid={testId} {...rest}>
      {children}
    </Styles.Root>
  )
}
