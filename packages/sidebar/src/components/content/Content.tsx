import type { ContentProps } from './Content.types'
import * as Styles from './Content.styles'

export const Content: React.FunctionComponent<ContentProps> = ({
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
