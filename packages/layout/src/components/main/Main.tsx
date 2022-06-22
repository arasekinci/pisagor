import type { MainProps } from './Main.types'
import * as Styled from './Main.styles'

export const Main: React.FunctionComponent<MainProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root data-testid={testId && `${testId}-main`} {...rest}>
      {children}
    </Styled.Root>
  )
}
