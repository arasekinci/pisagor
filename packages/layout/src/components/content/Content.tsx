import type { ContentProps } from './Content.types'
import * as Styled from './Content.styles'

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root data-testid={testId && `${testId}-content`} {...rest}>
      {children}
    </Styled.Root>
  )
}
